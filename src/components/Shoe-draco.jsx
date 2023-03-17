import React, { useRef, useLayoutEffect, memo } from "react";
import { useGLTF, Center, Clone } from "@react-three/drei";
import * as THREE from "three";
import { useSnapshot } from "valtio";
import { store, setCurrentObject } from "../Features/Valtio_state";

function Model(props) {
  const { items } = useSnapshot(store);
  const { nodes, materials } = useGLTF("/shoe-draco.glb");
  useLayoutEffect(() => {
    Object.values(nodes).forEach((node) => {
      node.isMesh &&
        ((node.receiveShadow = node.castShadow = true),
        (node.material.color = new THREE.Color(0xaaaaaa)));
    });
  }, [nodes, materials]);
  return (
    <Center>
      <group
        position-y={2}
        // {...props}
        dispose={null}
        rotation-z={-Math.PI / 12}
        onPointerOver={(e) => (
          e.stopPropagation(), setCurrentObject(e.object.material.name)
        )}
        onPointerOut={(e) =>
          e.intersections.length === 0 && setCurrentObject(null)
        }
        onPointerMissed={() => (store.active = null)}
        onClick={(e) => (
          e.stopPropagation(), (store.active = e.object.material.name)
        )}
      >
        <Clone object={nodes.shoe} material-color={items.laces} />
        <Clone object={nodes.shoe_1} material-color={items.mesh} />
        <Clone object={nodes.shoe_2} material-color={items.caps} />
        <Clone object={nodes.shoe_3} material-color={items.inner} />
        <Clone object={nodes.shoe_4} material-color={items.sole} />
        <Clone object={nodes.shoe_5} material-color={items.stripes} />
        <Clone object={nodes.shoe_6} material-color={items.band} />
        <Clone object={nodes.shoe_7} material-color={items.patch} />
      </group>
    </Center>
  );
}

export default Model;

useGLTF.preload("/shoe-draco.glb");
