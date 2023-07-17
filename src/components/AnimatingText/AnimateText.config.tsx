export interface AnimationVariants {
  initial: object;
  animate: object;
  transition: (index: number, delay: number, speed: number) => object;
}
export type SplitBy = 'word' | 'letter';
export interface AnimateProps {
  text?: string;
  delay?: number;
  variant?: 'default' | 'fade' | 'slide' | 'scale' | 'rotate';
  splitBy?: SplitBy;
  speed?: number;
}

export const animationVariants: { [key: string]: AnimationVariants } = {
  default: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: (index: number, delay: number, speed: number) => ({
      delay: index * delay * speed,
      duration: speed,
    }),
  },
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: (index: number, delay: number, speed: number) => ({
      delay: index * delay * speed,
      duration: speed,
    }),
  },
  slide: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: (index: number, delay: number, speed: number) => ({
      delay: index * delay * speed,
      duration: speed,
    }),
  },
  scale: {
    initial: { opacity: 0, scale: 0 },
    animate: { opacity: 1, scale: 1 },
    transition: (index: number, delay: number, speed: number) => ({
      delay: index * delay * speed,
      duration: speed,
    }),
  },
  rotate: {
    initial: { opacity: 0, rotate: 180 },
    animate: { opacity: 1, rotate: 0 },
    transition: (index: number, delay: number, speed: number) => ({
      delay: index * delay,
      duration: speed,
    }),
  },
};
