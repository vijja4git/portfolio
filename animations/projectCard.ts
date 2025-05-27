// animations/projectCard.ts

export const cardSpring = {
    type: 'spring',
    bounce: 0.15,
    duration: 0.8,
    damping: 20,
    stiffness: 150,
  };
  
  export const detailsFade = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
    transition: { duration: 0.4, ease: 'easeInOut' },
  };
  
  export const titleResize = (size: any) => ({
    layout: true,
    style: { fontSize: size },
  });