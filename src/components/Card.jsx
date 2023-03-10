import { forwardRef, useEffect, memo } from "react";
import { MotionConfig, useAnimation, motion } from "framer-motion";

import { animation } from "./animationParams";

const topDiv = {
  position: "absolute",
  top: "0%",
  clipPath: "polygon(0 0, 100% 0%, 100% 80%, 0 20%)",
  background: "rgb(0, 110, 184)",
  width: "100%",
  height: "100%",
  zIndex: "-1",
};
const botDiv = {
  position: "absolute",
  bottom: "0%",
  clipPath: "polygon(0 20%, 100% 80%, 100% 100%, 0 100%)",
  background: "rgb(71, 149, 209)",
  width: "100%",
  height: "100%",
  zIndex: "-1",
};

function ActionAreaCard({ children, isFullScreen, ...props }, ref) {
  const lowerBackControls = useAnimation();
  const higherBackControls = useAnimation();

  useEffect(() => {
    if (!isFullScreen) {
      (async () => {
        await lowerBackControls.start("anim4");
        // await lowerBackControls.start("anim2");
        await lowerBackControls.start("anim3");
      })();
      (async () => {
        await higherBackControls.start("anim1");
        // await higherBackControls.start("anim3");
        await higherBackControls.start("anim2");
      })();
    }
    if (isFullScreen) {
      (async () => {
        await lowerBackControls.start("anim3");
        await lowerBackControls.start("anim4");
        // await lowerBackControls.start("anim2");
      })();
      (async () => {
        await higherBackControls.start("anim2");
        await higherBackControls.start("anim1");
        // await higherBackControls.start("anim3");
      })();
    }
  }, [isFullScreen]);

  return (
    <div
      ref={ref}
      {...props}
      style={{
        width: `${isFullScreen ? "100vw" : "300px"}`,
        height: `${isFullScreen ? "100vh" : "400px"}`,
        transition: "1s",
        position: "relative",
        // boxShadow: "0px 0px 10px 2px gray",
      }}
    >
      <motion.div
        variants={animation}
        exit="anim1"
        initial="anim2"
        animate={higherBackControls}
        style={topDiv}
      ></motion.div>
      <motion.div
        variants={animation}
        exit="anim4"
        initial="anim3"
        animate={lowerBackControls}
        style={botDiv}
      ></motion.div>
      <motion.div
        initial={{ background: "rgba(255,255,255,1)" }}
        animate={{
          background: `${
            isFullScreen ? "rgba(255,255,255,0)" : "rgba(255,255,255,1)"
          }`,
        }}
        transition={{
          duration: 1.5,
        }}
        style={{
          position: "absolute",
          zIndex: -2,
          width: "100%",
          height: "100%",
        }}
      ></motion.div>
      {children}
    </div>
  );
}

export default memo(forwardRef(ActionAreaCard));
