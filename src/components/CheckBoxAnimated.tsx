import { motion } from 'framer-motion';
import React, { useEffect, useRef } from 'react';

/* eslint-disable no-param-reassign */
const initializeCircle = ({ ref, isChecked }: { ref: any; isChecked: any }) => {
  const radius = 25;
  const circumference = 2 * Math.PI * radius;
  ref.style.strokeDasharray = `${circumference} ${circumference} `;
  ref.style.strokeDashoffset = isChecked ? 0 : circumference;

  ref.style.transformOrigin = 'center';
  ref.style.transform = 'rotate(-90deg)';
  ref.style.transition =
    'stroke-dashoffset 0.5s cubic-bezier(0.65, 0, 0.35, 1), stroke 0.5s';
  ref.style.stroke = 'rgb(43,52,67)';
  ref.style.fill = 'rgba(0, 0, 0, 0.1)';
  ref.style.strokeWidth = '0.5px';

  if (isChecked) {
    ref.style.strokeDashoffset = 0;
    setTimeout(() => {
      // ref.style.stroke = 'rgb(38,136,86)';
      ref.style.fill = 'rgb(85,182,132)';
    }, 100);
  }
};

/* eslint-disable no-param-reassign */
const initializePath = ({
  ref,
  isChecked,
}: {
  ref: SVGPathElement;
  isChecked: any;
}) => {
  const paths = ref.querySelectorAll('path');

  paths.forEach((path: SVGPathElement) => {
    const length = path.getTotalLength();
    path.style.strokeDasharray = length.toString();
    path.style.strokeDashoffset = isChecked ? '0' : length.toString();
    path.style.transition =
      'stroke-dashoffset 0.5s cubic-bezier(0.65, 0, 0.35, 1), stroke 0.5s';
    path.style.strokeWidth = '2px';
    // curved path

    if (!isChecked) {
      setTimeout(() => {
        path.style.strokeDashoffset = length.toString();
      }, 250);
    }
  });
};

export function CopyIconAnimated({
  className,
  animateOnMount,
  isChecked,
}: {
  className?: string;
  animateOnMount?: boolean;
  isChecked?: boolean;
}) {
  const ref = useRef<SVGCircleElement>(null);
  useEffect(() => {
    if (ref.current) initializeCircle({ ref: ref.current, isChecked });
  }, [animateOnMount, isChecked]);

  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        ref={ref}
        cx="9"
        cy="10"
        r="8.5"
        strokeWidth={4}
        className={className}
      />
      <path
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      />
    </svg>
  );
}

function CheckIconAnimated({
  className,
  isChecked,
}: {
  className?: string;
  isChecked?: boolean;
}) {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) initializePath({ ref: ref.current, isChecked });
  }, [isChecked]);

  return (
    <svg
      ref={ref}
      width="17"
      height="17"
      viewBox="1 0 23 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 6.2195L5.994 10.1125L12.704 2.15254"
        fill="transparent"
        strokeLinejoin="round"
        strokeLinecap="round"
        stroke={isChecked ? 'white' : 'transparent'}
        strokeWidth="4"
        style={{ transition: 'stroke 2s' }}
      />
    </svg>
  );
}

export const CheckBox = ({ isChecked }: { isChecked: boolean }) => {
  const [initialRender, setInitialRender] = React.useState(true);

  React.useEffect(() => {
    if (initialRender && isChecked) {
      setInitialRender(false);
    }
  }, [isChecked]);

  return (
    <motion.div
      layout
      className="relative flex items-center justify-center space-x-1 rounded-full "
    >
      <CopyIconAnimated
        className="transition-colors delay-150"
        animateOnMount={initialRender}
        isChecked={isChecked}
      />
      <CheckIconAnimated
        className="absolute left-0 top-0 h-full w-full"
        isChecked={isChecked}
      />
    </motion.div>
  );
};
