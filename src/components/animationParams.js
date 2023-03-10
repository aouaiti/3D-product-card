export const animation = {
  anim1: {
    clipPath: "polygon(0 0%, 100% 0%, 100% 0%, 0% 0%)",
    transition: {
      duration: 0.5,
      ease: "linear",
    },
  },
  anim2: {
    clipPath: "polygon(0 0%, 100% 0%, 100% 80%, 0% 20%)",
    transition: {
      duration: 0.5,
      ease: "linear",
      //   delay: 0.5,
    },
  },
  anim3: {
    clipPath: "polygon(0 20%, 100% 80%, 100% 100%, 0 100%)",
    transition: {
      duration: 0.5,
      ease: "linear",
      //   delay: 0.5,
    },
  },
  anim4: {
    clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
    transition: {
      duration: 0.5,
    },
  },
  bgFullScreen: {
    background: "rgba(255,255,255,0)",
    transition: {
      duration: 0.5,
    },
  },
  bgNotFullScreen: {
    background: "rgba(255,255,255,1)",
    transition: {
      duration: 0.5,
    },
  },
};
