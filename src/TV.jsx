import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { Canvas, extend, useThree, useFrame } from "@react-three/fiber";
import { useGLTF, Text, PerspectiveCamera, Environment, Lightformer, RenderTexture } from "@react-three/drei";

useGLTF.preload("/TV.glb");

export default function TV() {
  return (
    <div className="absolute top-0 left-0 w-full h-full">
      <Canvas camera={{ position: [0, 0, 14], fov: 23 }}>
        <ambientLight intensity={Math.PI} />
        <ScreenText invert={false} position={[0, 0, 0]} rotation={[0, (2.45 * Math.PI) / 2, 0]} />{" "}
        <Environment blur={0.75}>
          <Lightformer intensity={2} color="white" position={[0, -1, 5]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
          <Lightformer intensity={3} color="white" position={[-1, -1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
          <Lightformer intensity={3} color="white" position={[1, 1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
          <Lightformer intensity={10} color="white" position={[-10, 0, 14]} rotation={[0, Math.PI / 2, Math.PI / 3]} scale={[100, 10, 1]} />
        </Environment>
      </Canvas>
    </div>
  );
}

export function Screen({ children, ...props }) {
  const { nodes } = useGLTF("/TV.glb");

  return (
    <group {...props}>
      {/* Base TV geometry */}
      <mesh castShadow receiveShadow geometry={nodes.Base.geometry} />

      {/* Screen with lighting-reactive material */}
      <mesh geometry={nodes.Screen.geometry} position={[-0.1, 0, 0]} scale={[1, -1.35, 0.85]} rotation={[(1 * Math.PI) / 2, 0, 0]}>
        <meshStandardMaterial metalness={0.6} roughness={0.3} emissive={new THREE.Color(0x111111)} emissiveIntensity={1}>
          <RenderTexture width={512} height={512} attach="map" anisotropy={16}>
            {children}
          </RenderTexture>
        </meshStandardMaterial>
      </mesh>
    </group>
  );
}

function ScreenText({ invert, x = 0, y = -1, ...props }) {
  const textRef = useRef();
  const rand = Math.random() * 10000;
  useFrame((state) => (textRef.current.position.x = x + Math.sin(rand + state.clock.elapsedTime / 4) * 8));
  return (
    <Screen {...props}>
      <PerspectiveCamera makeDefault manual aspect={1 / 1} position={[0, 0, 15]} />
      <color attach="background" args={[invert ? "black" : "#35c19f"]} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} />
      <Text rotation={[0, 0, 0]} position={[x, y, 0]} ref={textRef} fontSize={2} letterSpacing={-0.1} color={!invert ? "black" : "#35c19f"}>
        Developer
      </Text>
    </Screen>
  );
}
