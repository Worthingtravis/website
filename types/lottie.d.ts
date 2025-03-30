import { ComponentType } from 'react';

export interface LottieAnimationProps {
  animationData: Record<string, any>;
  className?: string;
}

declare const LottieAnimation: ComponentType<LottieAnimationProps>;
export default LottieAnimation; 