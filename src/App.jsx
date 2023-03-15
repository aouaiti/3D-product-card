import { Suspense, useRef, useEffect, useLayoutEffect } from "react";
// import * as THREE from "three";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import {
  Stage,
  View,
  PresentationControls,
  Float,
  Loader,
  CameraControls,
  PerspectiveCamera,
  Grid,
  OrbitControls,
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import { MotionConfig, transform, useSpring } from "framer-motion";

import { useSnapshot } from "valtio";
import { store, toggleScreen } from "./Features/Valtio_state";

import Card from "./components/Card";
import Shoe from "./components/Shoe-draco";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Button, Stack } from "@mui/material";

import "./App.css";
import shadows from "@mui/material/styles/shadows";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

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

function App() {
  const ref = useRef();
  const cameraControlsRef = useRef();
  const snap = useSnapshot(store);
  useLayoutEffect(() => {
    store.isFullScreen &&
      cameraControlsRef.current?.rotate(Math.PI * 2.25, 0, true);
    !store.isFullScreen &&
      cameraControlsRef.current?.rotate(Math.PI * -2.25, 0, true);
  }, [store.isFullScreen]);
  return (
    <MotionConfig>
      <Box className="App">
        <Suspense fallback={null}>
          {/* 3D content __________________________________________________*/}
          <Canvas
            eventSource={document.getElementById("root")}
            gl={{ alpha: true }}
            onCreated={() => {
              // setCanvasReady(true);
            }}
          >
            <Perf position="top-left" />
            <View track={ref}>
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
              {/* <color
                attach={"background"}
                args={[new THREE.Color(1, 1, 0, 0.2)]}
              /> */}
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
                {/* <mesh position-y={-1} rotation-x={-Math.PI / 2}>
                  <planeGeometry args={[100, 100]} />
                  <meshStandardMaterial />
                </mesh> */}
                <Float floatIntensity={1.4} speed={2}>
                  <PresentationControls
                    makeDefault
                    global
                    snap
                    polar={[-0.0, 0.0]}
                    config={{ mass: 2, tension: 400 }}
                  >
                    <Shoe
                      onClick={(e) => (
                        e.stopPropagation(), console.log(e.object)
                      )}
                    />
                  </PresentationControls>
                </Float>
              </Stage>
            </View>
          </Canvas>
        </Suspense>
      </Box>
      {/* 2D content __________________________________________________*/}
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Stack
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Card className="cardD" isFullScreen={store.isFullScreen} ref={ref}>
            <Button
              sx={{
                position: "absolute",
                bottom: "5%",
                left: "50%",
                transform: "translate(-50%,-50%)",
              }}
              color="error"
              variant="contained"
              onClick={() => toggleScreen()}
            >
              Customize
            </Button>
          </Card>
        </Stack>
      </ThemeProvider>

      <Loader />
    </MotionConfig>
  );
}

export default App;
