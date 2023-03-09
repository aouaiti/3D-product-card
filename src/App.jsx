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
  Float,
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import Card from "./components/Card";
import Shoe from "./components/Shoe-draco";

import { Box } from "@mui/material";

import "./App.css";

function App() {
  const ref = useRef();
  return (
    <Suspense fallback={<div>loading !!!!!!!!!!!!!</div>}>
      <Box className='App'>
        <Canvas
          shadows
          camera={{
            position: [3, 3, 3],
          }}
        >
          {/* <Perf position='top-left' />
          <OrbitControls makeDefault />
          <GizmoHelper alignment='bottom-right' margin={[80, 80]}>
            <GizmoViewport
              axisColors={["#9d4b4b", "#2f7f4f", "#3b5b9d"]}
              labelColor='white'
            />
          </GizmoHelper>
          <Grid
            sectionColor={"#9d4b4b"}
            sectionThickness={1.9}
            cellColor={"#6f6f6f"}
            args={[35, 35]}
            fadeDistance={15}
            position-y={-0.51}
          />
          <color attach='background' args={["#303035"]} />
          <Stage
            shadows={"accumulative"}
            preset={"rembrandt"}
            environment={"lobby"}
            adjustCamera={false}
          >
            <Center top>
              <Shoe />
            </Center>
          </Stage> */}
          <View track={ref}>
            <PerspectiveCamera makeDefault position={[0, 0, 4]} />
            <Environment preset='city' />
            <directionalLight position={[0, 1, 4]} intensity={2} />
            <ambientLight />
            <OrbitControls makeDefault />
            <Float floatIntensity={1.4} speed={2}>
              <Center>
                <Shoe />
              </Center>
            </Float>
          </View>
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
          <button>click</button>
        </Card>
      </Box>
    </Suspense>
  );
}

export default App;
