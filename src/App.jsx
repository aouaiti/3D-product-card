import { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Loader } from "@react-three/drei";
import { Perf } from "r3f-perf";

import { store, toggleReady } from "./Features/Valtio_state";
import { useSnapshot } from "valtio";

import Card from "./components/Card";
import Shoe from "./components/Shoe-draco";
import CursorController from "./components/CursorController";
import ColorController from "./components/ColorController";
import ViewComponent from "./components/ViewComponent";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Stack } from "@mui/material";

import "./App.css";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const refs = useRef({});
  return (
    <>
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
            <ViewComponent model="model1" index={0} refIt={refs.current}>
              <Shoe model="model1" />
            </ViewComponent>
            {/* <ViewComponent model="model2" index={1} refIt={refs.current}>
              <Shoe model="model2" />
            </ViewComponent> */}
          </Canvas>
        </Suspense>
      </Box>

      {/* 2D content ________________________________________________________*/}
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Stack
          className="container"
          sx={{ flexDirection: "row", justifyContent: "space-around" }}
        >
          <Card
            model="model1"
            className="cardD"
            ref={(ref) => (refs.current[0] = { current: ref })}
          />
          {/* <Card
            model="model2"
            className="cardD"
            ref={(ref) => (refs.current[1] = { current: ref })}
          /> */}
        </Stack>
      </ThemeProvider>

      {/* Controllers _________________________________________________________*/}
      <CursorController />
      <ColorController />
      <Loader />
    </>
  );
}

export default App;
