import { Suspense, useRef, useEffect } from "react";
// import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { Loader } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { MotionConfig } from "framer-motion";

import { store, toggleReady } from "./Features/Valtio_state";

import Card from "./components/Card";
import Shoe from "./components/Shoe-draco";
import CursorController from "./components/CursorController";
import ColorController from "./components/ColorController";
import ViewComponent from "./components/ViewComponent";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Button, Stack } from "@mui/material";

import "./App.css";
import { useSnapshot } from "valtio";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const ref = useRef();
  const { isFullScreen } = useSnapshot(store);
  return (
    <MotionConfig>
      <Box className="App">
        <Suspense fallback={null}>
          {/* 3D content __________________________________________________*/}
          <Canvas
            className=".canvas"
            eventSource={document.getElementById("root")}
            gl={{ alpha: true }}
            onCreated={() => {
              toggleReady();
            }}
          >
            <Perf position="top-left" />
            <ViewComponent refIt={ref}>
              <Shoe />
            </ViewComponent>
          </Canvas>
        </Suspense>
      </Box>

      {/* 2D content __________________________________________________*/}
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Stack className="container">
          <Card className="cardD" isFullScreen={store.isFullScreen} ref={ref} />
        </Stack>
      </ThemeProvider>
      <CursorController />
      <ColorController />
      <Loader />
    </MotionConfig>
  );
}

export default App;
