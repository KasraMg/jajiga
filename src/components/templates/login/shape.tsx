'use client';

import { useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { Mesh } from 'three';

function MeshComponent() {
    const fileUrl = '/golden_heart_lock_sculpted_in_vr.glb';
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
        <div className='flex justify-center items-center'>
            <Canvas
                flat
                camera={{
                    fov: 30,
                    near: 0.1,
                    far: 500,
                    position: [95, 10, 95],
                }}
                className='!h-[670px] !w-[430px]'
            >
                <OrbitControls />
                <ambientLight intensity={1.5} />
                <pointLight position={[10, 10, 10]} intensity={220.5} color={'#f0c807'} />
                <pointLight position={[-90, -90, -90]} intensity={220.5} color={'#f0c807'} />
                <pointLight position={[-50, -20, -10]} intensity={400.5} color={'#f0c807'} />
                <pointLight position={[-30, -50, -60]} intensity={400.5} color={'#f0c807'} />
                <pointLight position={[333, 200, 400]} intensity={220.5} color={'#f0c807'} />
                <pointLight position={[10, 59, 10]} intensity={220.5} color={'#f0c807'} />
                <pointLight position={[40, 10, 34]} intensity={220.5} color={'#f0c807'} />
                <pointLight position={[25, 80, 80]} intensity={220.5} color={'#f0c807'} /> 
                <MeshComponent />
            </Canvas>
        </div>
    );
}

 