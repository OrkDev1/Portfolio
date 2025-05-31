import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { Canvas, extend, useThree, useFrame } from "@react-three/fiber";
import { useGLTF, Environment, Lightformer } from "@react-three/drei";
import { BallCollider, CuboidCollider, Physics, RigidBody, useRopeJoint, useSphericalJoint } from "@react-three/rapier";
import { MeshLineGeometry, MeshLineMaterial } from "meshline";

extend({ MeshLineGeometry, MeshLineMaterial });
useGLTF.preload("/LegoSuit.glb");
//useGLTF.preload("/LegoLab.glb");

export default function Lego() {
  return (
    <div className="absolute -z-0 top-0 left-0 w-full h-full">
      <Canvas camera={{ position: [0, 0, 14], fov: 23 }}>
        <ambientLight intensity={Math.PI / 4} />
        <Physics debug={false} gravity={[0, -30, 0]} timeStep={1 / 60}>
          <Band />
        </Physics>
        <Environment blur={0.75} environmentIntensity={0.6}>
          <Lightformer intensity={1} color="white" position={[0, -1, 5]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
          <Lightformer intensity={1} color="white" position={[-1, -1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
          <Lightformer intensity={2} color="white" position={[1, 1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
          <Lightformer intensity={6} color="white" position={[-10, 0, 14]} rotation={[0, Math.PI / 2, Math.PI / 3]} scale={[100, 10, 1]} />
        </Environment>
      </Canvas>
    </div>
  );
}

function Band({ maxSpeed = 50, minSpeed = 10 }) {
  const band = useRef(), fixed = useRef(), j1 = useRef(), j2 = useRef(), j3 = useRef(), card = useRef() // prettier-ignore
  const vec = new THREE.Vector3(), ang = new THREE.Vector3(), rot = new THREE.Vector3(), dir = new THREE.Vector3() // prettier-ignore
  const segmentProps = { type: "dynamic", canSleep: true, colliders: false, angularDamping: 6, linearDamping: 6 };
  const gltf = useGLTF("/LegoSuit.glb");
  const { width, height } = useThree((state) => state.size);
  const [curve] = useState(() => new THREE.CatmullRomCurve3([new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()]));
  const [dragged, drag] = useState(false);
  const [hovered, hover] = useState(false);

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]) // prettier-ignore
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]) // prettier-ignore
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]) // prettier-ignore
  useSphericalJoint(j3, card, [[0, 0, 0], [0, 1.5, 0]]) // prettier-ignore

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = dragged ? "grabbing" : "grab";
      return () => void (document.body.style.cursor = "auto");
    }
  }, [hovered, dragged]);

  useFrame((state, delta) => {
    if (dragged) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));
      [card, j1, j2, j3, fixed].forEach((ref) => ref.current?.wakeUp());
      card.current?.setNextKinematicTranslation({ x: vec.x - dragged.x, y: vec.y - dragged.y, z: vec.z - dragged.z });
    }
    if (fixed.current) {
      // Fix most of the jitter when over pulling the card
      [j1, j2].forEach((ref) => {
        if (!ref.current.lerped) ref.current.lerped = new THREE.Vector3().copy(ref.current.translation());
        const clampedDistance = Math.max(0.1, Math.min(1, ref.current.lerped.distanceTo(ref.current.translation())));
        ref.current.lerped.lerp(ref.current.translation(), delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed)));
      });
      // Calculate catmul curve
      curve.points[0].copy(j3.current.translation());
      curve.points[1].copy(j2.current.lerped);
      curve.points[2].copy(j1.current.lerped);
      curve.points[3].copy(fixed.current.translation());
      band.current.geometry.setPoints(curve.getPoints(32));
      // Tilt it back towards the screen
      ang.copy(card.current.angvel());
      rot.copy(card.current.rotation());
      card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z });
    }

    const t = state.clock.getElapsedTime();
    const head = gltf.scene.getObjectByName("Part0");
    const armL = gltf.scene.getObjectByName("Part3");
    const handL = gltf.scene.getObjectByName("Part4");
    const armR = gltf.scene.getObjectByName("Part5");
    const handR = gltf.scene.getObjectByName("Part6");
    const legL = gltf.scene.getObjectByName("Part8");
    const legR = gltf.scene.getObjectByName("Part9");

    if (handL && armL && armR && handR) {
      armL.attach(handL);
      armR.attach(handR);
    }

    const velocity = card.current.linvel(); // get linear velocity
    const speed = Math.sqrt(velocity.x * velocity.x + velocity.y * velocity.y + velocity.z * velocity.z);
    const isSwinging = !dragged && speed > 0.05;

    if (head) {
      const targetZ = dragged ? Math.PI : 0;
      head.rotation.z = THREE.MathUtils.lerp(head.rotation.z, targetZ, 0.3);
    }

    if (isSwinging && handL && armL && armR && handR) {
      const wiggle = Math.sin(t * 10) * 0.2;
      const wiggleLeg = Math.sin(t * 10) * 0.5;

      if (armL) armL.rotation.x = THREE.MathUtils.lerp(armL.rotation.x, wiggle, 0.3);
      if (armR) armR.rotation.x = THREE.MathUtils.lerp(armR.rotation.x, -wiggle, 0.3);
      if (legL) legL.rotation.x = THREE.MathUtils.lerp(legL.rotation.x, -wiggleLeg + 1, 0.3);
      if (legR) legR.rotation.x = THREE.MathUtils.lerp(legR.rotation.x, wiggleLeg + 1, 0.3);
    } else {
      if (armL) armL.rotation.x = THREE.MathUtils.lerp(armL.rotation.x, 2.3, 0.2);
      if (armR) armR.rotation.x = THREE.MathUtils.lerp(armR.rotation.x, 2.3, 0.2);
      if (legL) legL.rotation.x = THREE.MathUtils.lerp(legL.rotation.x, 1.5, 0.2);
      if (legR) legR.rotation.x = THREE.MathUtils.lerp(legR.rotation.x, 1.5, 0.2);
    }
  });

  curve.curveType = "chordal";
  //texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  return (
    <>
      <group position={[0, 4.5, 0]} renderOrder={1}>
        <RigidBody ref={fixed} {...segmentProps} type="fixed" />
        <RigidBody position={[0.5, 0, 0]} ref={j1} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1, 0, 0]} ref={j2} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1.5, 0, 0]} ref={j3} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[2, 0, 0]} ref={card} {...segmentProps} type={dragged ? "kinematicPosition" : "dynamic"}>
          <CuboidCollider args={[0.5, 1.1, 0.01]} position={[0, 0.2, 0]} />
          <primitive
            onPointerUp={(e) => (e.target.releasePointerCapture(e.pointerId), drag(false))}
            onPointerDown={(e) => (e.target.setPointerCapture(e.pointerId), drag(new THREE.Vector3().copy(e.point).sub(vec.copy(card.current.translation()))))}
            scale={1.2}
            position={[0, 0.4, -0.05]}
            rotation={[0, -0.15, 0]}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            object={gltf.scene}
          />
        </RigidBody>
      </group>
      <mesh ref={band} renderOrder={-1}>
        <meshLineGeometry />
        <meshLineMaterial color="#ffffff" depthTest={false} resolution={[width, height]} lineWidth={0.5} />
      </mesh>
    </>
  );
}
