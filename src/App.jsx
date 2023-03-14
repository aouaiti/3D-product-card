import { Suspense, useRef, useState, useEffect, useLayoutEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Stage,
  View,
  PresentationControls,
  Float,
  Loader,
  CameraControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import { MotionConfig, useAnimation } from "framer-motion";

import { useSnapshot } from "valtio";
import { store, toggleScreen } from "./Features/Valtio_state";

import Card from "./components/Card";
import Shoe from "./components/Shoe-draco";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Button, Stack } from "@mui/material";

import "./App.css";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const ref = useRef();
  const cameraControlsRef = useRef();
  const snap = useSnapshot(store);
  useLayoutEffect(() => {
    // console.log(cameraControlsRef.current);
    // console.log(state);
    console.log(store.isFullScreen);
    store.isFullScreen &&
      cameraControlsRef.current?.rotate(Math.PI * 2.25, 0, true);
    !store.isFullScreen &&
      cameraControlsRef.current?.rotate(Math.PI * -2.25, 0, true);
  }, [store.isFullScreen]);
  return (
    <MotionConfig>
      <Box className="App">
        <Suspense fallback={null}>
          <Canvas
            onCreated={() => {
              // setCanvasReady(true);
            }}
          >
            <Perf position="top-left" />
            <View track={ref}>
              {/* <color attach={"background"} args={["red"]} /> */}
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
              {/* <color attach={"background"} args={["red"]} /> */}
              <Stage
                shadows={store.isFullScreen ? true : false}
                preset={"soft"}
                adjustCamera={false}
              >
                <Float floatIntensity={1.4} speed={2}>
                  <PresentationControls
                    makeDefault
                    global
                    snap
                    polar={[-0.5, 0.5]}
                    config={{ mass: 2, tension: 400 }}
                  >
                    <Shoe />
                  </PresentationControls>
                </Float>
              </Stage>
            </View>
          </Canvas>
        </Suspense>
      </Box>

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
            <Stack
              direction={"column"}
              sx={{
                height: "90%",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <Button
                color="error"
                variant="contained"
                onClick={() => toggleScreen()}
              >
                Customize
              </Button>
            </Stack>
          </Card>
        </Stack>
      </ThemeProvider>

      <Loader />
    </MotionConfig>
  );
}

export default App;
