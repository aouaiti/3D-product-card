import { useEffect } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { transform, useSpring } from "framer-motion";
import { store } from "../Features/Valtio_state";

const ThreeBGController = () => {
  const transformer = transform([0, 1], [0, 1], { clamp: true });
  const { gl } = useThree();

  const spring = useSpring(transformer(!store.isFullScreen), {
    stiffness: 20,
    damping: 10,
  });

  useEffect(() => {
    spring.set(transformer(store.isFullScreen));
  }, [store.isFullScreen]);

  useFrame((delta) => {
    // console.log(spring.get());
    gl.setClearColor(0xffffff, spring.get());
  });
  return null;
};

export default ThreeBGController;
