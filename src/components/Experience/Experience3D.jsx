import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line, Sphere, MeshTransmissionMaterial, Environment, Stars } from "@react-three/drei";
import * as THREE from "three";

const CyberHelix = () => {
    const groupRef = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (groupRef.current) {
            groupRef.current.rotation.y = t * 0.1;
            groupRef.current.rotation.z = Math.sin(t * 0.2) * 0.1;
        }
    });

    // Generate helix points
    const points = [];
    const count = 30;
    for (let i = 0; i < count; i++) {
        const t = i / count;
        const angle = t * Math.PI * 4;
        const x = Math.cos(angle) * 2;
        const z = Math.sin(angle) * 2;
        const y = (t - 0.5) * 8;
        points.push(new THREE.Vector3(x, y, z));
    }

    // Create curve for the line
    const curve = new THREE.CatmullRomCurve3(points);

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <group ref={groupRef}>
                {/* The Central Helix Line */}
                <Line
                    points={points}
                    color="#ffffff"
                    opacity={0.3}
                    transparent
                    lineWidth={2}
                />

                {/* Floating Nodes along the helix */}
                {points.map((point, i) => (
                    <mesh key={i} position={point}>
                        <sphereGeometry args={[0.15, 16, 16]} />
                        <MeshTransmissionMaterial
                            backside
                            backsideThickness={1}
                            thickness={0.5}
                            chromaticAberration={0.5}
                            anisotropy={0.5}
                            distortion={0.2}
                            distortionScale={0.5}
                            temporalDistortion={0.1}
                            color={i % 2 === 0 ? "#ffffff" : "#444444"} // Black and White theme
                            roughness={0}
                            transmission={0.9}
                        />
                    </mesh>
                ))}

                {/* Surrounding Particles */}
                {Array.from({ length: 20 }).map((_, i) => (
                    <Float key={`p-${i}`} speed={2} rotationIntensity={2} floatIntensity={4}>
                        <mesh position={[
                            (Math.random() - 0.5) * 10,
                            (Math.random() - 0.5) * 10,
                            (Math.random() - 0.5) * 10
                        ]}>
                            <octahedronGeometry args={[0.1]} />
                            <meshBasicMaterial color="#ffffff" transparent opacity={0.4} />
                        </mesh>
                    </Float>
                ))}
            </group>
        </Float>
    );
};

const Experience3D = () => {
    return (
        <div className="absolute inset-0 w-full h-full -z-10 bg-black">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-black opacity-50 z-0"></div>
            <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
                <Environment preset="city" />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                <CyberHelix />
            </Canvas>
        </div>
    );
};

export default Experience3D;
