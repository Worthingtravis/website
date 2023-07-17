import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import AnimatedCheckIcon from '@/components/AnimatedSVG';

export function CopyIconAnimated({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 19"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="square"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M7 3.5A1.5 1.5 0 018.5 2h3.879a1.5 1.5 0 011.06.44l3.122 3.12A1.5 1.5 0 0117 6.622V12.5a1.5 1.5 0 01-1.5 1.5h-1v-3.379a3 3 0 00-.879-2.121L10.5 5.379A3 3 0 008.379 4.5H7v-1z" />
      <path d="M4.5 6A1.5 1.5 0 003 7.5v9A1.5 1.5 0 004.5 18h7a1.5 1.5 0 001.5-1.5v-5.879a1.5 1.5 0 00-.44-1.06L9.44 6.439A1.5 1.5 0 008.378 6H4.5z" />
    </svg>
  );
}

function CheckIconAnimated({ className }: { className?: string }) {
  const ref = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (ref.current) {
      const length = ref.current.getTotalLength();
      ref.current.style.strokeDasharray = length.toString();
      ref.current.style.strokeDashoffset = length.toString();
      ref.current.getBoundingClientRect(); // trigger reflow
      ref.current.style.transition =
        'stroke-dashoffset 0.5s cubic-bezier(0.65, 0, 0.35, 1), stroke 0.5s';
      ref.current.style.stroke = 'transparent';
      setTimeout(() => {
        if (!ref.current) return;
        ref.current.style.stroke = '#10B981';
        ref.current.style.strokeDashoffset = '0';
      }, 200);
    }
  }, []);

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="#10B981"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path ref={ref} d="M2 12l7 7 13-13" />
    </svg>
  );
}

/**
 * CopyV2 component with customizable variants and props for styling and behavior.
 *
 * @example Default Usage:
 * <CopyV2 text="Some text to copy" />
 *
 * @example Custom Variant:
 * <CopyV2 text="Some text to copy" variant="minimal" />
 *
 * @example Custom Background Color:
 * <CopyV2 text="Some text to copy" backgroundColor="bg-blue-500" />
 *
 * @example Custom Icons and Props:
 * <CopyV2
 *   text="Some text to copy"
 *   iconProps={{ className: 'text-red-500', size: 24 }}
 * />
 *
 * @example Custom Durations:
 * <CopyV2 text="Some text to copy" duration={0.5} activeDuration={0.75} />
 *
 * @example Custom Class Names:
 * <CopyV2
 *   text="Some text to copy"
 *   className="my-custom-button"
 *   iconProps={{ className: 'my-custom-icon' }}
 * />
 */

export const CopyV2 = (
  { text }: { text: string },
  color: string | undefined = '#10B981'
) => {
  const [copied, setCopied] = useState(false);
  const borderRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => {
      setCopied(false);
    }, 1500);

    // eslint-disable-next-line consistent-return
    return () => clearTimeout(timer);
  }, [copied]);

  useEffect(() => {
    if (borderRef.current) {
      const length = borderRef.current.getTotalLength();
      borderRef.current.style.strokeDasharray = length.toString();
      borderRef.current.style.strokeDashoffset = length.toString();
      borderRef.current.getBoundingClientRect(); // trigger reflow
      borderRef.current.style.transition =
        'stroke-dashoffset 0.5s cubic-bezier(0.65, 0, 0.35, 1), stroke 0.5s';
      borderRef.current.style.stroke = 'transparent';
      if (copied) {
        setTimeout(() => {
          if (!borderRef.current) return;
          borderRef.current.style.stroke = color;
          borderRef.current.style.strokeDashoffset = `-${length}`; // Reverse the direction
        }, 200);
      }
    }
  }, [copied]);

  return (
    <div className="flex justify-end">
      <CopyToClipboard text={text}>
        <div className="relative">
          <button
            type="button"
            className={`relative flex overflow-hidden  rounded-full bg-gray-800 p-1 text-xs hover:brightness-110 active:brightness-125 ${
              copied ? 'text-secondary-500/80' : ''
            }`}
            disabled={!text}
            onClick={() => setCopied(true)}
            data-testid="button-copy"
          >
            <svg
              className="absolute left-0 top-0"
              width="100%"
              height="100%"
              viewBox="0 0 50 50"
            >
              <path
                ref={borderRef}
                d="M25 2 a23 23 0 0 1 0 46 a23 23 0 0 1 0 -46"
                fill="transparent"
                stroke={copied ? color : 'transparent'}
                strokeWidth="2"
                strokeDasharray="0"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <AnimatePresence mode="wait">
              {!copied && (
                <motion.div
                  key="copyIcon"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }} // Set the duration for the opacity animation
                  className="flex items-center justify-center space-x-1"
                >
                  <CopyIconAnimated className="h-4 w-4" />
                </motion.div>
              )}
              {copied && (
                <motion.div
                  key="checkIcon"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }} // Set the duration for the opacity animation
                  className="flex items-center justify-center space-x-1"
                >
                  <AnimatedCheckIcon isVisible={true} duration={0.5} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </CopyToClipboard>
    </div>
  );
};
