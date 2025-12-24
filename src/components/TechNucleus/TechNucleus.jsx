import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Icosahedron, MeshDistortMaterial } from "@react-three/drei";

const RotatingCore = () => {
    const meshRef = useRef();

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += delta * 0.2;
            meshRef.current.rotation.y += delta * 0.3;
        }
    });

    return (
        <Float
            speed={2} // Animation speed
            rotationIntensity={1.5} // XYZ rotation intensity
            floatIntensity={2} // Up/down float intensity
        >
            <Icosahedron args={[1, 0]} ref={meshRef} scale={2.2}>
                {/* Wireframe Outer Shell */}
                <meshStandardMaterial
                    color="#000000"
                    wireframe
                    transparent
                    opacity={0.3}
                    emissive="#000000"
                    emissiveIntensity={0.5}
                />
            </Icosahedron>

            {/* Inner "Energy" Core */}
            <mesh scale={1.2}>
                <sphereGeometry args={[1, 32, 32]} />
                <MeshDistortMaterial
                    color="#e5e5e5"
                    speed={2}
                    distort={0.4}
                    radius={1}
                    roughness={0.2}
                    metalness={0.8}
                />
            </mesh>
        </Float>
    );
};

const TechNucleus = () => {
    return (
        <div className="w-full h-full relative z-10">
            <Canvas camera={{ position: [0, 0, 8], fov: 45 }} className="bg-transparent">
                <ambientLight intensity={1.5} />
                <directionalLight position={[10, 10, 5]} intensity={2} />
                <pointLight position={[-10, -10, -5]} intensity={1} color="#ffffff" />
                <RotatingCore />
            </Canvas>
        </div>
    );
};

export default TechNucleus;
