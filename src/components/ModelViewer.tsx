"use client";
import { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function AnimatedModel() {
  const model = useGLTF("/assets/img/3D.glb");
  const modelRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (modelRef.current) {
      // Subtle animations for realism
      modelRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 1.5) * 0.05;
      modelRef.current.position.y = -1 + Math.sin(clock.getElapsedTime() * 2) * 0.02;

      // Breathing effect (scaling)
      const scaleFactor = 0.1 + Math.sin(clock.getElapsedTime() * 1.2) * 0.002;
      modelRef.current.scale.set(scaleFactor, scaleFactor, scaleFactor);
    }
  });

  return <primitive ref={modelRef} object={model.scene} position={[0, -1.2, 0]} scale={0.1} />;
}

export default function ModelViewer() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="fixed bottom-0 left-5">
      {/* Toggle Button */}
      <button
        className="bg-blue-500 text-white p-1 rounded-full shadow-lg flex items-center"
        onClick={() => setIsVisible(!isVisible)}
      >
        {isVisible ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
      </button>

      {/* 3D Model Viewer */}
      <div
        className={`w-[250px] h-[350px] overflow-hidden transition-opacity duration-500 ${
          isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {isVisible && (
          <Canvas camera={{ position: [0, 1, 3], fov: 40 }} className="w-full h-full">
            {/* Lighting */}
            <ambientLight intensity={1} />
            <directionalLight position={[2, 2, 5]} intensity={1.5} />

            {/* 3D Model */}
            <AnimatedModel />

            {/* Interactive Controls */}
            <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
          </Canvas>
        )}
      </div>
    </div>
  );
}
