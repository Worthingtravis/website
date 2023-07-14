import { createPopper } from '@popperjs/core';
import type { Instance } from '@popperjs/core/lib/types';
import type { MouseEventHandler } from 'react';
import { cloneElement, useEffect, useRef, useState } from 'react';

export function useTooltip() {
  const [visible, setVisible] = useState<boolean>(false);
  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const hoverRef = useRef<number | undefined>();

  useEffect(() => {
    let popperInstance: Instance | null = null;

    if (triggerRef.current && tooltipRef.current) {
      popperInstance = createPopper(triggerRef.current, tooltipRef.current, {
        placement: 'top',
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: [0, 10], // for Arrow pointing to the element
            },
          },
        ],
      });
    }

    return () => {
      popperInstance?.destroy();
      popperInstance = null;
    };
  }, []);

  useEffect(() => {
    return () => {
      if (hoverRef.current) clearTimeout(hoverRef.current); // Clear timeout when unmounting
    };
  }, []);

  const bindTrigger: {
    onMouseEnter: MouseEventHandler;
    onMouseLeave: MouseEventHandler;
    ref: React.RefObject<HTMLDivElement>;
  } = {
    onMouseEnter: () => {
      hoverRef.current = window.setTimeout(() => setVisible(true), 200); // Set delay
    },
    onMouseLeave: () => {
      if (hoverRef.current) window.clearTimeout(hoverRef.current); // Cancel delay if mouse leaves before delay finishes
      setVisible(false);
    },
    ref: triggerRef,
  };

  return { tooltipRef, bindTrigger, visible };
}

export function TooltipWrapper({
  children,
  tooltipText,
}: {
  children: React.ReactElement;
  tooltipText: string;
}) {
  const { tooltipRef, bindTrigger, visible } = useTooltip();
  return (
    <div className="relative inline-block">
      {cloneElement(children, bindTrigger)}
      <div
        ref={tooltipRef}
        className={`pointer-events-none w-max rounded bg-gray-900 p-2 text-white shadow-md transition-opacity duration-200 ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
        role="tooltip"
      >
        {tooltipText}
      </div>
    </div>
  );
}
