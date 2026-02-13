import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Text, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';

const Hexagon3D = () => {
    const meshRef = useRef(null);
    const [hovered, setHover] = useState(false);

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += delta * 0.2;
            meshRef.current.rotation.y += delta * 0.2;
        }
    });

    return (
        <Float floatIntensity={2} rotationIntensity={1.5}>
            <mesh
                ref={meshRef}
                scale={hovered ? 1.2 : 1}
                onPointerOver={() => setHover(true)}
                onPointerOut={() => setHover(false)}
            >
                <cylinderGeometry args={[2, 2, 0.5, 6]} />
                <MeshTransmissionMaterial
                    backside
                    backsideThickness={5}
                    thickness={2}
                    roughness={0}
                    transmission={1}
                    ior={1.5}
                    chromaticAberration={1}
                    anisotropy={20}
                    color="#00E5FF"
                    emissive="#007BFF"
                    emissiveIntensity={0.5}
                />
            </mesh>
        </Float>
    );
};

export default Hexagon3D;
