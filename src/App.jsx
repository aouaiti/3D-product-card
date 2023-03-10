import { Suspense, useRef, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Stage,
  View,
  PerspectiveCamera,
  PresentationControls,
  Float,
  Loader,
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import { motion, MotionCanvas, LayoutCamera } from "framer-motion-3d";
import { MotionConfig, useAnimation } from "framer-motion";

import Card from "./components/Card";
import Shoe from "./components/Shoe-draco";
import { animation } from "./components/animationParams";

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
  const [isFullScreen, setFullScreen] = useState(false);

  return (
    <MotionConfig>
      <Box className="App">
        <Suspense fallback={null}>
          <Canvas>
            <Perf position="top-left" />
            <color attach={"background"} args={["#red"]} />
            <View track={ref}>
              <PerspectiveCamera makeDefault position={[0, 0, 4]} />
              <Stage
                shadows={isFullScreen ? true : false}
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
          <Card className="cardD" isFullScreen={isFullScreen} ref={ref}>
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
                onClick={() => setFullScreen(!isFullScreen)}
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
