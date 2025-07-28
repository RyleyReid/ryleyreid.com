import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera, useTexture } from '@react-three/drei';
import * as THREE from 'three';

// Import all icons
const techLogos = import.meta.glob('/src/assets/techLogos/*.png', { eager: true });
const personalIcons = import.meta.glob('/src/assets/personalIcons/*.svg', { eager: true });

interface FloatingIconProps {
  texture: THREE.Texture;
  position: [number, number, number];
  scale?: number;
}

const FloatingIcon = ({ texture, position, scale = 1 }: FloatingIconProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (!meshRef.current) return;
    
    // Create a more dynamic bouncing motion
    const time = state.clock.elapsedTime;
    meshRef.current.position.y = position[1] + Math.sin(time * 0.5 + position[0]) * 0.3;
    meshRef.current.position.x = position[0] + Math.sin(time * 0.3) * 0.2;
    meshRef.current.rotation.z = Math.sin(time * 0.2) * 0.1;
    
    // Scale effect on hover
    if (hovered) {
      meshRef.current.scale.lerp(new THREE.Vector3(scale * 1.2, scale * 1.2, 1), 0.1);
    } else {
      meshRef.current.scale.lerp(new THREE.Vector3(scale, scale, 1), 0.1);
    }
  });

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.2}
      floatIntensity={0.5}
    >
      <mesh
        ref={meshRef}
        position={position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial 
          map={texture} 
          transparent 
          opacity={hovered ? 1 : 0.7}
          side={THREE.DoubleSide}
        />
      </mesh>
    </Float>
  );
};

const Background3D = () => {
  const [icons, setIcons] = useState<THREE.Texture[]>([]);

  useEffect(() => {
    // Load all textures
    const loadTextures = async () => {
      const textureLoader = new THREE.TextureLoader();
      const loadedIcons: THREE.Texture[] = [];

      // Load tech logos
      for (const path in techLogos) {
        const texture = await textureLoader.loadAsync(path);
        texture.needsUpdate = true;
        loadedIcons.push(texture);
      }

      // Load personal icons
      for (const path in personalIcons) {
        const texture = await textureLoader.loadAsync(path);
        texture.needsUpdate = true;
        loadedIcons.push(texture);
      }

      setIcons(loadedIcons);
    };

    loadTextures();
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      background: 'linear-gradient(135deg,rgb(255, 255, 255) 0%, #2a2a2a 100%)'
    }}>
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        
        {icons.map((texture, index) => {
          const angle = (index / icons.length) * Math.PI * 2;
          const radius = 5 + Math.random() * 2; // Random radius between 5 and 7
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          const z = (Math.random() - 0.5) * 2;
          const scale = 0.5 + Math.random() * 0.5; // Random scale between 0.5 and 1
          
          return (
            <FloatingIcon
              key={index}
              texture={texture}
              position={[x, y, z]}
              scale={scale}
            />
          );
        })}
      </Canvas>
    </div>
  );
};

export default Background3D; 