export function slideInFromLeft(delay: number, duration: number) {
  return {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: duration,
      },
    },
  };
}

export function slideInFromRight(delay: number, duration: number) {
  return {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: duration,
      },
    },
  };
}

export const slideInFromTop = (delay: number, duration: number) => {
  return {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: duration,
      },
    },
  };
};
