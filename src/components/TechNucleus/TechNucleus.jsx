import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, RoundedBox, Torus, Icosahedron, MeshTransmissionMaterial, ContactShadows, Environment, PresentationControls } from "@react-three/drei";

const CyberCube = () => {
    const outerRef = useRef();
    const innerRef = useRef();
    const ringRef = useRef();

    useFrame((state, delta) => {
        if (outerRef.current) {
            outerRef.current.rotation.y += delta * 0.2;
            outerRef.current.rotation.z += delta * 0.1;
        }
        if (innerRef.current) {
            innerRef.current.rotation.x -= delta * 0.3;
            innerRef.current.rotation.y -= delta * 0.3;
        }
        if (ringRef.current) {
            ringRef.current.rotation.x += delta * 0.5;
            ringRef.current.rotation.z += delta * 0.2;
        }
    });

    return (
        <Float
            speed={3}
            rotationIntensity={0.8}
            floatIntensity={1.5}
        >
            <group scale={0.8}>
                {/* 1. CENTRAL MATTE CORE */}
                <RoundedBox ref={innerRef} args={[1.5, 1.5, 1.5]} radius={0.4} smoothness={4}>
                    <meshStandardMaterial
                        color="#1e1b4b"
                        roughness={0.4} // Matte Clay Look
                        metalness={0.2}
                    />
                </RoundedBox>

                {/* 2. HOLOGRAPHIC GLASS SHELL */}
                <Icosahedron ref={outerRef} args={[1.8, 0]}>
                    <MeshTransmissionMaterial
                        backside
                        backsideThickness={5}
                        thickness={2}
                        chromaticAberration={1}
                        anisotropy={0.5}
                        distortion={0.5}
                        distortionScale={0.5}
                        temporalDistortion={0.2}
                        roughness={0}
                        color="#818cf8" // Tech Blue Transmission
                    />
                </Icosahedron>

                {/* 3. ORBITING DATA RING */}
                <group ref={ringRef}>
                    <Torus args={[2.8, 0.05, 16, 100]} rotation={[1.5, 0, 0]}>
                        <meshBasicMaterial color="#38bdf8" toneMapped={false} />
                    </Torus>
                    {/* Satellite */}
                    <mesh position={[2.8, 0, 0]}>
                        <sphereGeometry args={[0.2, 32, 32]} />
                        <meshBasicMaterial color="#c084fc" toneMapped={false} />
                    </mesh>
                </group>

                {/* 4. ACCENT PARTICLES */}
                <mesh position={[-2, 1, 1]}>
                    <boxGeometry args={[0.3, 0.3, 0.3]} />
                    <meshStandardMaterial color="#f472b6" emissive="#f472b6" emissiveIntensity={2} toneMapped={false} />
                </mesh>
                <mesh position={[1.5, -1.5, 0.5]}>
                    <octahedronGeometry args={[0.2]} />
                    <meshStandardMaterial color="#34d399" emissive="#34d399" emissiveIntensity={2} toneMapped={false} />
                </mesh>
            </group>
        </Float>
    );
};

const TechNucleus = () => {
    return (
        <div className="w-full h-full relative z-10">
            <Canvas shadows camera={{ position: [0, 0, 8], fov: 40 }} className="bg-transparent">
                {/* Environment for nice reflections on the Glass */}
                <Environment preset="city" />

                {/* Soft Studio Lighting */}
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow color="#ffffff" />
                <pointLight position={[-10, -10, -5]} intensity={1} color="#6366f1" />

                <PresentationControls
                    global
                    config={{ mass: 2, tension: 500 }}
                    snap={{ mass: 4, tension: 1500 }}
                    rotation={[0, 0, 0]}
                    polar={[-Math.PI / 4, Math.PI / 4]}
                    azimuth={[-Math.PI / 4, Math.PI / 4]}
                >
                    <CyberCube />
                </PresentationControls>

                <ContactShadows position={[0, -2.5, 0]} opacity={0.5} scale={10} blur={2} far={4} color="#000000" />
            </Canvas>
        </div>
    );
};

export default TechNucleus;
