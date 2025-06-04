import React from 'react';

interface PlanetProps {
  id: string;
  model: string;
  position: string;
  scale: string;
  rotationDuration?: number;
}

export default function Planet({
  id,
  model,
  position,
  scale,
}: PlanetProps) {
  return (
    <a-entity
      id={id}
      gltf-model={model}
      position={position}
      scale={scale}
    ></a-entity>
  );
}