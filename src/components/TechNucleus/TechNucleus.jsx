import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, TorusKnot, MeshDistortMaterial, Stars } from "@react-three/drei";

const RotatingCore = () => {
    const meshRef = useRef();

    useFrame((state, delta) => {
        if (meshRef.current) {
            // Complex rotation for dynamic visuals
            meshRef.current.rotation.x += delta * 0.2;
            meshRef.current.rotation.y += delta * 0.4;
        }
    });

    return (
        <Float
            speed={3}
            rotationIntensity={1.5}
            floatIntensity={2}
        >
            <TorusKnot args={[1, 0.3, 128, 16]} ref={meshRef} scale={1.8}>
                {/* Colorful Holographic/Liquid Material */}
                <MeshDistortMaterial
                    color="#4F46E5" // Base tech blue/purple
                    attach="material"
                    distort={0.6} // Liquid distortion
                    speed={3} // Fast movement
                    roughness={0.1} // Glossy
                    metalness={0.8} // Metallic
                    emissive="#312e81" // Glow
                    emissiveIntensity={0.5}
                />
            </TorusKnot>
        </Float>
    );
};

const TechNucleus = () => {
    return (
        <div className="w-full h-full relative z-10">
            <Canvas camera={{ position: [0, 0, 8], fov: 45 }} className="bg-transparent">
                <ambientLight intensity={1} />
                {/* Colorful Lighting Setup */}
                <pointLight position={[10, 10, 10]} intensity={2} color="#ff00ff" />
                <pointLight position={[-10, -10, -10]} intensity={2} color="#00ffff" />
                <directionalLight position={[0, 5, 5]} intensity={1} color="#ffffff" />

                <RotatingCore />
                <Stars radius={100} depth={50} count={200} factor={4} saturation={0} fade speed={1} />
            </Canvas>
        </div>
    );
};

export default TechNucleus;
