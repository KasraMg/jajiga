"use client";
import { useRef } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { Mesh } from "three";

function MeshComponent() {
  const fileUrl = "/golden_heart_lock_sculpted_in_vr.glb";
  const mesh = useRef<Mesh>(null!);
  const gltf = useLoader(GLTFLoader, fileUrl);

  return (
    <mesh ref={mesh}>
      <primitive object={gltf.scene} scale={0.1} />
    </mesh>
  );
}
export function Shape() {
  return (
    <div className="relative h-[150px] w-full md:!h-auto md:!w-[300px] lg:!w-[430px]">
      <div className="absolute flex w-full items-center justify-center">
        <Canvas
          flat
          camera={{ fov: 30, near: 0.1, far: 500, position: [95, 5, 95] }}
          className="!h-[400px] !w-full md:!h-[670px] md:!w-[300px] lg:!w-[430px]"
        >
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={1.5} />
          <pointLight
            position={[10, 10, 10]}
            intensity={220.5}
            color={"#f0c807"}
          />
          <pointLight
            position={[-90, -90, -90]}
            intensity={800.5}
            color={"#f0c807"}
          />
          <pointLight
            position={[-50, -20, -10]}
            intensity={400.5}
            color={"#f0c807"}
          />
          <pointLight
            position={[-30, -50, -60]}
            intensity={400.5}
            color={"#f0c807"}
          />
          <pointLight
            position={[333, 200, 400]}
            intensity={800.5}
            color={"#f0c807"}
          />
          <pointLight
            position={[10, 59, 10]}
            intensity={800.5}
            color={"#f0c807"}
          />
          <pointLight
            position={[40, 10, 34]}
            intensity={800.5}
            color={"#f0c807"}
          />
          <pointLight
            position={[25, 80, 80]}
            intensity={800.5}
            color={"#f0c807"}
          />
          <MeshComponent />
        </Canvas>
      </div>
    </div>
  );
}
