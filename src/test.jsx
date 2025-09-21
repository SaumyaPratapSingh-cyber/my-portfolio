import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";

const Test = () => {
  return (
    <div className="container" style={{height: "100vh", width: "100%", scrollSnapAlign: "center"}}>
      <Canvas>
        <OrbitControls enableZoom={false} autoRotate={true}/>
        <ambientLight intensity={1}/>
        <directionalLight position={[3,2,1]}/>
        <mesh>
          <boxGeometry args={[3,3,3]}/>
          <meshStandardMaterial>
            <color attach="color" name="hotpink" />
          </meshStandardMaterial>
        </mesh>
      </Canvas>
    </div>
  );
};

export default Test;