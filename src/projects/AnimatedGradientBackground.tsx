import { motion, useScroll, useTransform } from 'framer-motion';

const AnimatedGradientBackground = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [1, 2]);
  const backgroundPositionX = useTransform(
    scrollYProgress,
    [0, 1],
    ['0%', '200%']
  );

  return (
    <motion.div
      className="animated-gradient"
      style={{
        scaleX,
        backgroundPositionX,
      }}
    />
  );
};

export default AnimatedGradientBackground;
