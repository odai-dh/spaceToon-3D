"use client";

import React from 'react';

interface PlanetData {
  name: string;
  radius: number;
  color: string;
  orbitRadius: number;
  orbitDuration: string; // A-Frame duration is string in ms
  rotationDuration: string;
  texture?: string; // Optional texture URL
  emissive?: string; // Optional emissive color for Sun
  emissiveIntensity?: number;
}

const planetsData: PlanetData[] = [
  { name: 'Mercury', radius: 0.38, color: '#A9A9A9', orbitRadius: 7, orbitDuration: '8800', rotationDuration: '5900' },
  { name: 'Venus', radius: 0.95, color: '#FFF8DC', orbitRadius: 10, orbitDuration: '22500', rotationDuration: '24300' },
  { name: 'Earth', radius: 1, color: '#2072A8', orbitRadius: 14, orbitDuration: '36500', rotationDuration: '2400' },
  { name: 'Mars', radius: 0.53, color: '#C1440E', orbitRadius: 18, orbitDuration: '68700', rotationDuration: '2500' },
  { name: 'Jupiter', radius: 3.5, color: '#D8CA9D', orbitRadius: 28, orbitDuration: '100000', rotationDuration: '1000' }, // Faster rotation for demo
  { name: 'Saturn', radius: 3, color: '#F0E68C', orbitRadius: 38, orbitDuration: '150000', rotationDuration: '1100' },
  { name: 'Uranus', radius: 2, color: '#AFDBF5', orbitRadius: 48, orbitDuration: '200000', rotationDuration: '1700' },
  { name: 'Neptune', radius: 1.9, color: '#3F54BA', orbitRadius: 58, orbitDuration: '250000', rotationDuration: '1600' },
];

const SolarSystem = () => {
  // This component assumes A-Frame script is loaded globally via layout.tsx
  return (
    <a-scene
      embedded
      vr-mode-ui="enabled: false"
      keyboard-shortcuts="enterVR: false"
      antialias="true"
      renderer="colorManagement: true; physicallyCorrectLights: true;"
      style={{ height: '100%', width: '100%' }}
    >
      {/* Sky */}
      <a-sky color="#031836"></a-sky>

      {/* Lighting */}
      <a-entity light="type: ambient; color: #888; intensity: 0.6"></a-entity>
      <a-entity light="type: directional; color: #FFF; intensity: 0.9; castShadow: true;" position="-5 5 5"></a-entity>

      {/* Camera */}
      <a-entity
        camera
        look-controls="pointerLockEnabled: true; magicWindowTrackingEnabled: false"
        wasd-controls="fly: true; acceleration: 65"
        position="0 20 50"
      >
      </a-entity>

      {/* Sun */}
      <a-sphere
        position="0 0 0"
        radius="4" /* Relative to other planets */
        color="#FFD700" /* Gold */
        material="shader: flat; emissive: #FFD700; emissiveIntensity: 1"
        shadow="cast: false"
      >
        <a-animation attribute="rotation" dur="30000" to="0 360 0" repeat="indefinite" easing="linear"></a-animation>
      </a-sphere>

      {/* Planets */}
      {planetsData.map((planet) => (
        <a-entity key={planet.name} rotation="0 0 0"
          animation__orbit={`property: rotation; to: 0 360 0; loop: true; dur: ${planet.orbitDuration}; easing: linear;`}>
          
          {/* Planet Entity - placeholder for GLB model */}
          <a-entity position={`${planet.orbitRadius} 0 0`}
             data-ai-hint={`${planet.name.toLowerCase()} planet`}>
            <a-sphere
              radius={planet.radius}
              color={planet.color}
              material="shader: standard; roughness: 0.7; metalness: 0.2;"
              shadow="cast: true; receive: false"
            >
              <a-animation attribute="rotation" dur={planet.rotationDuration} to="0 360 0" repeat="indefinite" easing="linear"></a-animation>
            </a-sphere>
            
            {/* Saturn's Rings */}
            {planet.name === 'Saturn' && (
              <a-ring
                color="#B0A080"
                radius-inner={planet.radius * 1.2}
                radius-outer={planet.radius * 2.2}
                rotation="-70 0 0" /* Tilt rings slightly */
                material="side: double; shader: flat; opacity: 0.8;"
                shadow="cast: true; receive: true"
              ></a-ring>
            )}
             {/* Text label for planet - for easier identification if models are not distinct */}
            <a-text
              value={planet.name}
              align="center"
              position={`0 ${planet.radius + 0.5} 0`}
              scale="2 2 2"
              color="#FFFFFF"
              look-at="[camera]"
              visible="true" 
            ></a-text>
          </a-entity>
        </a-entity>
      ))}
    </a-scene>
  );
};

export default SolarSystem;
