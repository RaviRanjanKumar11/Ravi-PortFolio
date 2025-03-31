"use client";
import React, { useRef, useEffect } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, useGLTF, Text } from "@react-three/drei";
import * as THREE from "three";
import { Water } from "three/examples/jsm/objects/Water.js";

type WaterRef = React.MutableRefObject<THREE.Mesh | null>;

function WaterSurface() {
    const waterRef: WaterRef = useRef(null);
    const waterNormals = useLoader(THREE.TextureLoader, "https://threejs.org/examples/textures/waternormals.jpg");
    waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping;

    useEffect(() => {
        if (waterRef.current) {
            (waterRef.current as any).material.uniforms["time"].value = 0;
        }
    }, []);

    useFrame(() => {
        if (waterRef.current) {
            (waterRef.current as any).material.uniforms["time"].value += 0.02;
        }
    });

    return (
        <primitive
            ref={waterRef}
            object={
                new Water(new THREE.PlaneGeometry(100, 100), {
                    textureWidth: 512,
                    textureHeight: 512,
                    waterNormals,
                    sunDirection: new THREE.Vector3(),
                    sunColor: 0xffffff,
                    waterColor: 0x87CEFA, // Light Blue Color
                    distortionScale: 3.7,
                })
            }
            rotation={[-Math.PI / 2, 0, 0]}
        />
    );
}

function DeveloperModel() {
    const { scene } = useGLTF("https://modelviewer.dev/shared-assets/models/Astronaut.glb");
    return <primitive object={scene} scale={[2, 3, 2]} position={[0, 0, 0]} />; // Increased Height
}

function FloatingText() {
    return (
        <Text position={[-3, 3, 0]} fontSize={0.5} color="cyan">
            {"Ravi Ranjan Kumar\nSoftware Developer\nMERN Stack\nReactjs Developer%"}
        </Text>
    );
}

const Scene: React.FC = () => {
    return (
        <Canvas camera={{ position: [0, 5, 15], fov: 75 }} shadows>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 20, 10]} intensity={1} castShadow />
            <WaterSurface />
            <DeveloperModel />
            <FloatingText />
            <OrbitControls enableDamping />
        </Canvas>
    );
};

export default Scene;