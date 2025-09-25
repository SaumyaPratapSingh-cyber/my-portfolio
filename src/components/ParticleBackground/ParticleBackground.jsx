import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import './particleBackground.scss';

function Particles({ count = 5000 }) {
  const mesh = useRef();
  const { size } = useThree();

  const particles = useMemo(() => {
    const temp = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      // Position particles in a sphere-like distribution for a better 3D feel
      const u = Math.random();
      const v = Math.random();
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);
      const r = Math.cbrt(Math.random()) * 8; // Cube root for even distribution
      temp[i3] = r * Math.sin(phi) * Math.cos(theta);
      temp[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      temp[i3 + 2] = r * Math.cos(phi);
    }
    return temp;
  }, [count]);

  // This hook runs on every frame to animate the particles
  useFrame((state) => {
    const { pointer } = state;
    // Make the entire particle field gently rotate
    if (mesh.current) {
      mesh.current.rotation.y += 0.0005;
      mesh.current.rotation.x += 0.0002;
      
      // Create a target for the particle system to move towards based on mouse position
      const target = new THREE.Vector3(pointer.x * (size.width / 8), pointer.y * (size.height / 8), 0);
      
      // Use LERP for a smooth, subtle follow effect
      mesh.current.position.lerp(target, 0.02);
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={particles} itemSize={3} />
      </bufferGeometry>
      {/* This material creates small points instead of squares */}
      <pointsMaterial size={0.015} color="#00ff62ff" />
    </points>
  );
}

const ParticleBackground = () => {
  return (
    <div className="particle-background">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Particles />
      </Canvas>
    </div>
  );
};

export default ParticleBackground;