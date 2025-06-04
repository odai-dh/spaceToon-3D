import React from 'react';
import Planet from './Planet';
import Orbit from './Orbit';
import Header from './Header';
import planets from './planetsData';

export default function App() {
  return (
    <>
      <Header />
      <a-scene background="color: #000">
        {/* Sun */}
        <Planet
          id="sun"
          model="/models/sun.glb"
          position="0 1.25 0"
          scale="0.2 0.2 0.2"
          rotationDuration={20000}
        />

        {/* Planets dynamically rendered */}
        {planets.map((planet) => (
          <Orbit
            key={planet.id}
            orbitDuration={planet.orbitDuration}
            distance={planet.distance}
          >
            <Planet
              id={planet.id}
              model={planet.model}
              position={planet.position}
              scale={planet.scale}
              rotationDuration={planet.rotationDuration}
            />
          </Orbit>
        ))}

        {/* Environment */}
        <a-sky src="images/space.jpg"></a-sky>

        {/* Spaceship cockpit with camera inside */}
        <a-entity id="spaceship" position="0 1 20">
          {/* Cockpit model - adjust path/scale/position as needed */}
          <a-entity
            gltf-model="/models/cockpit.glb"
            position="0 0 0"
            rotation="0 90 0"
            scale="0.01 0.01 0.01"
          ></a-entity>

          {/* Camera inside the cockpit */}
          <a-entity
            camera
            look-controls
            wasd-controls="acceleration: 100"
            position="0 0.1 0"
          ></a-entity>
        </a-entity>

        {/* VR controllers and teleport */}
        <a-entity laser-controls="hand: left"></a-entity>
        <a-entity laser-controls="hand: right"></a-entity>
        <a-entity teleport-controls="cameraRig: #spaceship; teleportOrigin: #spaceship; button: trigger;"></a-entity>



        {/* Lights */}
        <a-entity light="type: ambient; color: #fff; intensity: 0.5"></a-entity>
        <a-entity light="type: point; intensity: 1" position="0 10 0"></a-entity>
      </a-scene>
    </>
  );
}