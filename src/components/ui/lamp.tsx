import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Boxes } from "./background-boxes";

function FirstAnimation() {
  return (
    <motion.div className={'contents'}>
      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: 'easeInOut',
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text py-4 text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Welcome To
      </motion.h1>
      <LampContainer>
        <motion.h1
          layoutId="title"
          initial={{ opacity: 0, y: '-30vh' }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.7,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          className="relative mt-8 bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text py-4 text-center text-5xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          worthydev.com
        </motion.h1>
      </LampContainer>
    </motion.div>
  );
}

function SecondAnimation(props: { visible2: boolean }) {
  return (
    <motion.h1
      layoutId="title"
      animate={
        props.visible2
          ? {
              opacity: 1,
              y: 0,
              scale: 1,
              top: 0,
              left: 20,
            }
          : { scale: 1.2 }
      }
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: 'easeInOut',
      }}
      className="absolute mt-8 bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text py-4 text-center text-5xl font-medium tracking-tight  text-transparent  md:text-7xl"
    >
      worthydev.com
    </motion.h1>
  );
}

export function Hero() {
  // // isVisible exist after 2 seconds
  // const [isVisible, setIsVisible] = useState(true);
  // const [isVisible2, setIsVisible2] = useState(false);
  // const [isVisible3, setIsVisible3] = useState(false);
  //
  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsVisible(false);
  //   }, 2000);
  // }, []);
  //
  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsVisible2(true);
  //   }, 3000);
  // }, []);
  //
  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsVisible3(true);
  //   }, 4000);
  // }, []);

  return (
    <motion.div
      className={cn(
        'relative z-0 flex min-h-screen w-full flex-col items-center justify-center overflow-hidden rounded-md'
      )}
    >

      {/*<AnimatePresence mode={'sync'}>*/}
      {/*  /!*{isVisible3 && <FirstAnimation />}*!/*/}
      {/*  {!isVisible && <SecondAnimation visible2={isVisible2} />}*/}
      {/*  {isVisible && <FirstAnimation />}*/}
      {/*</AnimatePresence>*/}
      <Boxes />

    </motion.div>
  );
}

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <>
      <div className="relative isolate z-0 flex w-full flex-1 scale-y-125 items-center justify-center ">
        <motion.div
          initial={{ opacity: 0, width: '0rem' }}
          whileInView={{ opacity: 1, width: '30rem' }}
          exit={{ opacity: 0, width: '0rem' }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="bg-gradient-conic absolute inset-auto right-1/2 h-56 w-[30rem] overflow-visible from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute  bottom-0 left-0 z-20 h-40 w-[100%] bg-slate-950 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute  bottom-0 left-0 z-20 h-[100%]  w-40 bg-slate-950 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, width: '0rem' }}
          whileInView={{ opacity: 1, width: '30rem' }}
          exit={{ opacity: 0, width: '0rem' }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="bg-gradient-conic absolute inset-auto left-1/2 h-56 w-[30rem] from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute  bottom-0 right-0 z-20 h-[100%]  w-40 bg-slate-950 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute  bottom-0 right-0 z-20 h-40 w-[100%] bg-slate-950 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <motion.div
          className={'contents'}
          initial={{ opacity: 0, width: '0rem' }}
          whileInView={{ opacity: 1, width: '30rem' }}
          exit={{ opacity: 0, width: '0rem' }}
        >
          <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-slate-950 blur-2xl"></div>
          <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
          <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl"></div>
        </motion.div>

        <motion.div
          initial={{ width: '0rem' }}
          whileInView={{ width: '16rem' }}
          exit={{ width: '0rem', opacity: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-400 blur-2xl"
        />
        <motion.div
          initial={{ width: '0rem' }}
          whileInView={{ width: '30rem' }}
          exit={{ width: '0rem', opacity: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-cyan-400 "
        />
        <motion.div
          className={'contents'}
          initial={{ opacity: 0, width: '0rem' }}
          whileInView={{ opacity: 1, width: '30rem' }}
          exit={{ opacity: 0, width: '0rem' }}
        >
          <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-slate-950 "></div>
        </motion.div>
      </div>

      <motion.div
        className={'contents'}
        initial={{ opacity: 0, width: '0rem' }}
        whileInView={{ opacity: 1, width: '30rem' }}
        exit={{ opacity: 0, width: '0rem' }}
      >
        <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
          {children}
        </div>
      </motion.div>
    </>
  );
};
