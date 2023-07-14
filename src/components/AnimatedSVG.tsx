import type { ReactNode } from 'react';
import React, { useEffect, useRef } from 'react';

interface AnimatedSVGProps {
  children: ReactNode;
  isDisabled: boolean | undefined;
  reverse?: boolean | undefined;
  duration?: number;
  animateStroke?: boolean;
  openColor?: string;
  openedColor?: string;
  closeColor?: string;
  closedColor?: string;
  scaleDurationByLength?: boolean;
  calculatePathLength?: boolean;
  baseOpacity?: number;
}

type Elements = (SVGPathElement | SVGCircleElement | SVGRectElement)[];
export function AnimatedSVG({
  children,
  isDisabled,
  reverse,
  duration = 0.5,
  animateStroke = true,
  openColor = 'currentColor',
  openedColor = 'currentColor',
  closeColor = 'currentColor',
  closedColor = 'currentColor',
  scaleDurationByLength = false,
  calculatePathLength = true,
  baseOpacity = 0.5,
}: AnimatedSVGProps) {
  const svgRef = useRef<HTMLDivElement | null>(null);
  const staticRef = useRef<HTMLDivElement | null>(null);

  const elementsRef = useRef<HTMLDivElement[]>([]);
  /* eslint-disable no-param-reassign */
  useEffect(() => {
    if (!svgRef.current) return;

    const elements: Elements = Array.from(
      svgRef.current.querySelectorAll('path, circle, rect')
    );

    elements.forEach((element) => {
      element.style[animateStroke ? 'stroke' : 'fill'] = closedColor;
    });
  }, [animateStroke, closedColor]);

  useEffect(() => {
    if (!svgRef.current || !staticRef.current) return;

    const elements: Elements = Array.from(
      svgRef.current.querySelectorAll('path, circle, rect')
    );
    const staticElements: Elements = Array.from(
      staticRef.current.querySelectorAll('path, circle, rect')
    );

    // reverse the order of the elements
    if (reverse) {
      elements.reverse();
    }

    // Compute and store path data
    if (calculatePathLength && !elementsRef.current.length) {
      const maxElementLength = Math.max(
        ...elements.map((element) =>
          element?.getTotalLength
            ? element.getTotalLength()
            : Math.max(
                // @ts-ignore
                element.height.baseVal.value,
                // @ts-ignore
                element.width.baseVal.value
              )
        )
      );

      elements.forEach((element) => {
        const length = element.getTotalLength
          ? element.getTotalLength()
          : // @ts-ignore
            Math.max(element.height.baseVal.value, element.width.baseVal.value);
        const elementDuration = scaleDurationByLength
          ? (length / maxElementLength) * duration
          : duration;
        element.style.transition = animateStroke
          ? `stroke-dashoffset ${elementDuration}s ease-in, stroke ${elementDuration}s `
          : `fill ${elementDuration}s`;
        // @ts-ignore
        elementsRef.current.push({ element, length });
      });
    }
    // @ts-ignore
    elementsRef.current.forEach(({ element, length }) => {
      const onTransitionEnd = () => {
        if (isDisabled) {
          element.style[animateStroke ? 'stroke' : 'fill'] = closedColor;
        } else if (isDisabled === false) {
          element.style[animateStroke ? 'stroke' : 'fill'] = openedColor;
        }
        element.removeEventListener('transitionend', onTransitionEnd);
      };

      element.removeEventListener('transitionend', onTransitionEnd);
      element.addEventListener('transitionend', onTransitionEnd);

      if (isDisabled) {
        element.style[animateStroke ? 'stroke' : 'fill'] = closeColor;
        element.style.strokeDasharray = animateStroke ? `${length}` : '';
        element.style.strokeDashoffset = animateStroke ? '0' : '';
      } else if (isDisabled === false) {
        if (reverse) {
          element.style.transitionDelay = `${duration}s`;
          element.style[animateStroke ? 'stroke' : 'fill'] = closedColor;
          element.style.strokeDasharray = animateStroke ? `${length}` : '';
        }
        element.style[animateStroke ? 'stroke' : 'fill'] = openColor;
        element.style.strokeDasharray = animateStroke ? `${length}` : '';
        element.style.strokeDashoffset = animateStroke ? `${length}` : '';
      }
    });

    // Apply stroke color to static SVG
    staticElements.forEach((element) => {
      element.style.stroke = isDisabled ? openedColor : closedColor;
    });
  }, [
    isDisabled,
    duration,
    animateStroke,
    openColor,
    closeColor,
    openedColor,
    closedColor,
    calculatePathLength,
    scaleDurationByLength,
  ]);

  return (
    <div style={{ position: 'relative' }}>
      <div
        ref={staticRef}
        style={{
          position: 'absolute',
          opacity: baseOpacity,
        }}
      >
        {children}
      </div>
      <div ref={svgRef}>{children}</div>
    </div>
  );
}

export default AnimatedSVG;
