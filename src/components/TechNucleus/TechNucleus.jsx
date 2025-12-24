import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, RoundedBox, ContactShadows, PresentationControls } from "@react-three/drei";

// Individual Key Component
const Key = ({ position, color, args = [1, 0.5, 1] }) => {
    const [hovered, setHover] = useState(false);
    return (
        <RoundedBox
            position={position}
            args={args}
            radius={0.15}
            smoothness={4}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
        >
            <meshStandardMaterial
                color={hovered ? "#ffe4e6" : color}
                roughness={0.4}
                metalness={0.1}
            />
        </RoundedBox>
    );
};

// The Keyboard / Calculator Composition
const CalculatorCore = () => {
    const groupRef = useRef();

    useFrame((state, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += delta * 0.1;
            groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
        }
    });

    const COLORS = {
        base: "#fffbeb", // Cream
        yellow: "#fcd34d", // SUM
        blue: "#3b82f6", // []
        orange: "#fb923c", // &
        green: "#34d399", // ?
        red: "#f87171", // %
        darkBlue: "#6366f1" // K
    };

    return (
        <Float
            speed={2}
            rotationIntensity={0.5}
            floatIntensity={1}
            floatingRange={[-0.2, 0.2]}
        >
            <group ref={groupRef} rotation={[0.4, -0.6, 0]} scale={0.7}>
                <RoundedBox position={[0, -0.6, 0]} args={[5.5, 0.5, 3.5]} radius={0.3} smoothness={4}>
                    <meshStandardMaterial color="#fdf2f8" roughness={0.5} />
                </RoundedBox>

                {/* ROW 1 */}
                <Key position={[-1.2, 0, -1]} args={[2, 0.4, 0.9]} color={COLORS.yellow} />
                <Key position={[0.5, 0, -1]} args={[0.9, 0.4, 0.9]} color={COLORS.green} />
                <Key position={[1.6, 0, -1]} args={[0.9, 0.4, 0.9]} color={COLORS.darkBlue} />

                {/* ROW 2 */}
                <Key position={[-2, 0, 0]} args={[1.5, 0.4, 0.9]} color={COLORS.base} />
                <Key position={[-0.5, 0, 0]} args={[1.2, 0.4, 0.9]} color={COLORS.orange} />
                <Key position={[0.8, 0.2, 0]} args={[0.9, 0.8, 0.9]} color={COLORS.green} />
                <Key position={[2, 0, 0]} args={[0.9, 0.4, 0.9]} color={COLORS.red} />

                {/* ROW 3 */}
                <Key position={[-2, 0, 1]} args={[0.9, 0.4, 0.9]} color={COLORS.base} />
                <Key position={[-0.5, 0, 1]} args={[1.8, 0.4, 0.9]} color={COLORS.blue} />
                <Key position={[1, 0, 1]} args={[0.9, 0.4, 0.9]} color={COLORS.orange} />
                <Key position={[2, 0, 1]} args={[0.9, 0.4, 0.9]} color={COLORS.yellow} />
            </group>
        </Float>
    );
};

const TechNucleus = () => {
    return (
        <div className="w-full h-full relative z-10">
            <Canvas shadows camera={{ position: [0, 0, 8], fov: 35 }} className="bg-transparent">
                <ambientLight intensity={0.8} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ffffff" />
                <PresentationControls
                    global
                    config={{ mass: 2, tension: 500 }}
                    snap={{ mass: 4, tension: 1500 }}
                    rotation={[0, 0, 0]}
                    polar={[-Math.PI / 4, Math.PI / 4]}
                    azimuth={[-Math.PI / 4, Math.PI / 4]}
                >
                    <CalculatorCore />
                </PresentationControls>
                <ContactShadows position={[0, -2, 0]} opacity={0.4} scale={10} blur={2.5} far={4} color="#000000" />
            </Canvas>
        </div>
    );
};

export default TechNucleus;
