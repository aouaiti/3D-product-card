import { useRef, useEffect } from "react";
import {
  View,
  Grid,
  PerspectiveCamera,
  Stage,
  Float,
  CameraControls,
  PresentationControls,
} from "@react-three/drei";
import ThreeBGController from "./ThreeBgController";
import { store } from "../Features/Valtio_state";
import { useSnapshot } from "valtio";

const ViewComponent = ({ children, refIt, ...props }) => {
  const cameraControlsRef = useRef();
  const { isFullScreen } = useSnapshot(store);

  useEffect(() => {
    store.isFullScreen &&
      cameraControlsRef.current?.rotate(Math.PI * 2.25, 0, true);
    !store.isFullScreen &&
      cameraControlsRef.current?.rotate(Math.PI * -2.25, 0, true);
  }, [store.isFullScreen]);

  return (
    <View track={refIt}>
      <ThreeBGController />
      <PerspectiveCamera makeDefault position={[0, 0, 4]} />
      <CameraControls
        ref={cameraControlsRef}
        enabled={true}
        makeDefault={false}
        polarRotateSpeed={0}
        azimuthRotateSpeed={0}
        dollySpeed={0}
        truckSpeed={0}
      />
      {store.isFullScreen && (
        <Grid
          args={[40, 40]}
          cellSize={0.6}
          cellThickness={1}
          sectionSize={1.2}
          sectionThickness={1.5}
          fadeDistance={20}
          fadeStrength={5}
          cellColor={"red"}
          sectionColor={"#006eb8"}
          position-y={-1}
        />
      )}
      <Stage
        // shadows={"contact"}
        shadows={store.isFullScreen ? true : false}
        preset={"soft"}
        adjustCamera={false}
      >
        <Float floatIntensity={1.4} speed={2}>
          <PresentationControls
            makeDefault
            global
            snap
            cursor={!isFullScreen}
            polar={[-0.0, 0.0]}
            config={{ mass: 2, tension: 400 }}
          >
            {children}
          </PresentationControls>
        </Float>
      </Stage>
    </View>
  );
};

export default ViewComponent;
