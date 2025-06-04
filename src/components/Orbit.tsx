import React, { ReactNode } from 'react';

interface OrbitProps {
  orbitDuration: number;
  distance?: number;
  children: ReactNode;
}

export default function Orbit({ orbitDuration, distance = 5, children }: OrbitProps) {
  return (
    <a-entity
      animation={`property: rotation; from: 0 0 0; to: 0 360 0; loop: true; dur: ${orbitDuration}; easing: linear`}
    >
      <a-entity position={`${distance} 0 0`}>
        {children}
      </a-entity>
    </a-entity>
  );
}