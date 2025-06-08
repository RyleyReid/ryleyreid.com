import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { colors, spacing, borderRadius } from '../styles/theme';

const SpinButton = styled.button`
  position: fixed;
  bottom: ${spacing.xl};
  right: ${spacing.xl};
  background: ${colors.primary};
  color: ${colors.text.light};
  border: none;
  padding: ${spacing.sm} ${spacing.md};
  border-radius: ${borderRadius.md};
  cursor: pointer;
  z-index: 1001;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
`;

const SpinContainer = styled.div`
  perspective: 1000px;
  transform-style: preserve-3d;
`;

const SpinEffect = () => {
    const [isSpinning, setIsSpinning] = useState(false);
    const [sections, setSections] = useState<HTMLElement[]>([]);

    useEffect(() => {
        // Get all sections when component mounts
        const sectionElements = Array.from(document.querySelectorAll('section')) as HTMLElement[];
        setSections(sectionElements);

        // Cleanup function
        return () => {
            // Reset any transforms when component unmounts
            sectionElements.forEach(section => {
                section.style.transform = '';
                section.style.transition = '';
            });
        };
    }, []);

    const startSpin = () => {
        if (isSpinning) return;
        setIsSpinning(true);

        sections.forEach((section, index) => {
            // Calculate a random tilt angle between -30 and 30 degrees
            const tiltX = Math.random() * 60 - 30;
            const tiltY = Math.random() * 60 - 30;

            // Add some delay based on index for a wave effect
            const delay = index * 100;

            // Apply the 3D transform
            section.style.transition = `transform 2s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`;
            section.style.transform = `
        rotateX(${tiltX}deg) 
        rotateY(${tiltY}deg) 
        translateZ(100px)
      `;
        });
    };

    const resetSpin = () => {
        if (!isSpinning) return;
        setIsSpinning(false);

        sections.forEach(section => {
            section.style.transition = 'transform 1s cubic-bezier(0.4, 0, 0.2, 1)';
            section.style.transform = '';
        });
    };

    return (
        <SpinButton onClick={isSpinning ? resetSpin : startSpin}>
            {isSpinning ? 'Reset' : 'Spin it!'}
        </SpinButton>
    );
};

export default SpinEffect; 