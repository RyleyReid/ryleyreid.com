import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Float, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { skills } from '../Skills/content';

interface FloatingTextProps {
  text: string;
  position: [number, number, number];
  color: string;
}

const FloatingText = ({ text, position, color }: FloatingTextProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (!meshRef.current) return;
    
    // Gentle floating motion
    meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5 + position[0]) * 0.2;
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
  });

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.2}
      floatIntensity={0.5}
    >
      <Text
        ref={meshRef}
        position={position}
        fontSize={0.5}
        color={hovered ? '#3498db' : color}
        anchorX="center"
        anchorY="middle"
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        {text}
      </Text>
    </Float>
  );
};

const Background3D = () => {
  const colors = ['#ffffff', '#e0e0e0', '#d0d0d0'];
  
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      background: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)'
    }}>
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        
        {skills.map((skill, index) => {
          const angle = (index / skills.length) * Math.PI * 2;
          const radius = 5;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          const z = (Math.random() - 0.5) * 2;
          
          return (
            <FloatingText
              key={skill}
              text={skill}
              position={[x, y, z]}
              color={colors[index % colors.length]}
            />
          );
        })}
      </Canvas>
    </div>
  );
};

export default Background3D; 