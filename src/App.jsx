import { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Stage,
  OrbitControls,
  useGLTF,
  Grid,
  GizmoHelper,
  GizmoViewport,
  RandomizedLight,
  Center,
  Edges,
  View,
  Environment,
  PerspectiveCamera,
  PresentationControls,
  Float,
  Loader,
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import Card from "./components/Card";
import Shoe from "./components/Shoe-draco";

import { Box, Button, Stack } from "@mui/material";

import "./App.css";

function App() {
  const ref = useRef();
  return (
    <Box>
      <Box className="App">
        <Canvas
          shadows
          camera={{
            position: [3, 3, 3],
          }}
        >
          <Suspense fallback={null}>
            <Perf position="top-left" />
            <color attach={"background"} args={["#red"]} />
            <Grid
              sectionColor={"#9d4b4b"}
              sectionThickness={1.9}
              cellColor={"#6f6f6f"}
              args={[35, 35]}
              fadeDistance={15}
              position-y={-0.51}
            />
            <View track={ref}>
              <PerspectiveCamera makeDefault position={[0, 0, 4]} />
              {/* <ambientLight /> */}
              <Stage shadows={false} preset={"soft"}>
                <Float floatIntensity={1.4} speed={2}>
                  <PresentationControls
                    makeDefault
                    global
                    snap
                    config={{ mass: 2, tension: 400 }}
                  >
                    <Shoe />
                  </PresentationControls>
                </Float>
              </Stage>
            </View>
          </Suspense>
        </Canvas>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Card ref={ref}>
          <Stack
            direction={"column"}
            sx={{
              height: "90%",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Button color="error" variant="contained">
              Customize
            </Button>
          </Stack>
        </Card>
      </Box>
      <Loader />
    </Box>
  );
}

export default App;
