import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Box, Sphere } from "@react-three/drei";

function FloatingComputer() {
  const group = useRef();

  useFrame((state) => {
    group.current.rotation.y += 0.005;
    group.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2;
  });

  return (
    <group ref={group}>
      {/* Screen */}
      <Box args={[2, 1.4, 0.1]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#2563eb" />
      </Box>

      {/* Screen Border */}
      <Box args={[2.2, 1.6, 0.05]} position={[0, 0, -0.05]}>
        <meshStandardMaterial color="#1e40af" />
      </Box>

      {/* Stand */}
      <Box args={[0.2, 0.8, 0.1]} position={[0, -1.1, 0]}>
        <meshStandardMaterial color="#1e40af" />
      </Box>

      {/* Base */}
      <Box args={[1, 0.1, 0.5]} position={[0, -1.5, 0]}>
        <meshStandardMaterial color="#1e40af" />
      </Box>

      {/* Decorative Spheres */}
      <Sphere args={[0.1]} position={[-0.8, 0.5, 0.2]}>
        <meshStandardMaterial color="#60a5fa" />
      </Sphere>
      <Sphere args={[0.1]} position={[0.8, -0.5, 0.2]}>
        <meshStandardMaterial color="#60a5fa" />
      </Sphere>
    </group>
  );
}

export default FloatingComputer;
