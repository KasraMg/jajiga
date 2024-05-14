"use client";

import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { Mesh } from "three";

function MeshComponent() {
  const fileUrl = "/golden_heart_lock_sculpted_in_vr.glb";
  const mesh = useRef<Mesh>(null!);
  const gltf = useLoader(GLTFLoader, fileUrl);

 

  return (
    <mesh ref={mesh}>
      <primitive object={gltf.scene} />
    </mesh>
  );
}

export function Shape() {
  return (
    <div className='flex justify-center items-center h-screen'>
      <Canvas className='!h-[563px] !w-[395px]'>
        <OrbitControls />
        <ambientLight />
        <pointLight position={[10, 10, 10]} color={'#f0c807'} />
        <pointLight position={[10, 10, 10]} color={'#f0c807'} />
        <MeshComponent />
      </Canvas>
    </div>
  );
}