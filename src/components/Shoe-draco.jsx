import React, { useRef, useLayoutEffect, memo } from "react";
import { useGLTF, Center } from "@react-three/drei";
import * as THREE from "three";
import { useSnapshot } from "valtio";
import { store, setCurrentObject } from "../Features/Valtio_state";

function Model(props) {
  // const snap = useSnapshot(store);
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
      >
        <mesh geometry={nodes.shoe.geometry} material={materials.laces} />
        <mesh geometry={nodes.shoe_1.geometry} material={materials.mesh} />
        <mesh geometry={nodes.shoe_2.geometry} material={materials.caps} />
        <mesh geometry={nodes.shoe_3.geometry} material={materials.inner} />
        <mesh geometry={nodes.shoe_4.geometry} material={materials.sole} />
        <mesh geometry={nodes.shoe_5.geometry} material={materials.stripes} />
        <mesh geometry={nodes.shoe_6.geometry} material={materials.band} />
        <mesh geometry={nodes.shoe_7.geometry} material={materials.patch} />
      </group>
    </Center>
  );
}

export default Model;

useGLTF.preload("/shoe-draco.glb");
