import { useLayoutEffect, memo } from "react";
import { useGLTF, Center, Clone } from "@react-three/drei";
import * as THREE from "three";
import { useSnapshot } from "valtio";
import {
  store,
  setCurrentObject,
  setActiveObject,
} from "../Features/Valtio_state";

function Model({ model }) {
  const { laces, mesh, caps, inner, sole, stripes, band, patch } = useSnapshot(
    store.models[model].items
  );
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
          e.stopPropagation(), setCurrentObject(model, e.object.material.name)
        )}
        onPointerOut={(e) =>
          e.intersections.length === 0 && setCurrentObject(model, null)
        }
        onPointerMissed={() => setActiveObject(model, null)}
        onClick={(e) => (
          e.stopPropagation(), setActiveObject(model, e.object.material.name)
        )}
      >
        <mesh
          geometry={nodes.shoe.geometry}
          material={materials.laces}
          material-color={laces}
        />
        <mesh
          geometry={nodes.shoe_1.geometry}
          material={materials.mesh}
          material-color={mesh}
        />
        <mesh
          geometry={nodes.shoe_2.geometry}
          material={materials.caps}
          material-color={caps}
        />
        <mesh
          geometry={nodes.shoe_3.geometry}
          material={materials.inner}
          material-color={inner}
        />
        <mesh
          geometry={nodes.shoe_4.geometry}
          material={materials.sole}
          material-color={sole}
        />
        <mesh
          geometry={nodes.shoe_5.geometry}
          material={materials.stripes}
          material-color={stripes}
        />
        <mesh
          geometry={nodes.shoe_6.geometry}
          material={materials.band}
          material-color={band}
        />
        <mesh
          geometry={nodes.shoe_7.geometry}
          material={materials.patch}
          material-color={patch}
        />
      </group>
    </Center>
  );
}

export default memo(Model);

useGLTF.preload("/shoe-draco.glb");
