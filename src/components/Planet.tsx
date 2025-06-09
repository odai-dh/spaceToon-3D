import React from 'react';

interface PlanetProps {
  id: string;
  model: string;
  position: string;
  scale: string;
  rotationDuration?: number;
  className?: string;
}

export default function Planet({
  id,
  model,
  position,
  scale,
  className,
}: PlanetProps) {
  return (
    <a-entity
      id={id}
      gltf-model={model}
      position={position}
      scale={scale}
      className={className}
    ></a-entity>
  );
}