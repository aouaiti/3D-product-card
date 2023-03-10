/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ./public/shoe-draco.glb
*/

import React, { useRef, useLayoutEffect } from "react";
import { useGLTF, Center } from "@react-three/drei";
import * as THREE from "three";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/shoe-draco.glb");
  useLayoutEffect(() => {
    Object.values(nodes).forEach((node) => {
      node.isMesh &&
        ((node.receiveShadow = node.castShadow = true),
        (node.material.color = new THREE.Color(0xaaaaaa)));
    });
  }, [nodes, materials]);
  return (
    <group position-y={1} {...props} dispose={null}>
      <Center>
        <mesh geometry={nodes.shoe.geometry} material={materials.laces} />
        <mesh geometry={nodes.shoe_1.geometry} material={materials.mesh} />
        <mesh geometry={nodes.shoe_2.geometry} material={materials.caps} />
        <mesh geometry={nodes.shoe_3.geometry} material={materials.inner} />
        <mesh geometry={nodes.shoe_4.geometry} material={materials.sole} />
        <mesh geometry={nodes.shoe_5.geometry} material={materials.stripes} />
        <mesh geometry={nodes.shoe_6.geometry} material={materials.band} />
        <mesh geometry={nodes.shoe_7.geometry} material={materials.patch} />
      </Center>
    </group>
  );
}

useGLTF.preload("/shoe-draco.glb");
