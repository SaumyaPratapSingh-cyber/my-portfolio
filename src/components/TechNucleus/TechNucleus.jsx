import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Icosahedron, Octahedron, MeshDistortMaterial } from "@react-three/drei";

const RotatingCore = () => {
    const meshRef = useRef();
    const innerRef = useRef();

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x -= delta * 0.2;
            meshRef.current.rotation.y -= delta * 0.3;
        }
        if (innerRef.current) {
            innerRef.current.rotation.x += delta * 0.5;
            innerRef.current.rotation.z += delta * 0.5;
        }
    });

    return (
        <Float
            speed={2}
            rotationIntensity={1}
            floatIntensity={2}
        >
            {/* Outer Tech Shell (Black Wireframe) */}
            <Icosahedron args={[1, 0]} ref={meshRef} scale={2.4}>
                <meshStandardMaterial
                    color="#000000"
                    wireframe
                    transparent
                    opacity={0.15}
                />
            </Icosahedron>

            {/* Middle Geometric Layer */}
            <Octahedron args={[1, 0]} scale={1.8}>
                <meshStandardMaterial
                    color="#333"
                    wireframe
                    transparent
                    opacity={0.2}
                />
            </Octahedron>

            {/* Inner "Colorful" Core - Represents Tech/AI */}
            <mesh ref={innerRef} scale={1.1}>
                <dodecahedronGeometry args={[1, 0]} />
                {/* MeshNormalMaterial gives a beautiful multi-color look that changes with rotation */}
                <meshNormalMaterial wireframe={false} />
            </mesh>
        </Float>
    );
};

const TechNucleus = () => {
    return (
        <div className="w-full h-full relative z-10">
            <Canvas camera={{ position: [0, 0, 8], fov: 45 }} className="bg-transparent">
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <RotatingCore />
            </Canvas>
        </div>
    );
};

export default TechNucleus;
