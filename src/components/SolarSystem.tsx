import React from 'react';
import Planet from './Planet';
import Orbit from './Orbit';
import Header from './Header';
import planets from './planetsData';
import '../../public/js/thumbstick-move.js';

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

        {/* Camera rig containing cockpit and camera */}
        <a-entity
          id="cameraRig"
          position="0 1 20"
        >
          {/* Cockpit model */}


          {/* Camera inside the cockpit */}
          <a-entity
            camera
            position="0 0.17 0.18"
          >
            <a-entity
              geometry="primitive: plane; height: 1; width: 1.5"
              material="color: #99ccff; transparent: true; opacity: 0.08; side: double"
              position="0 0 -0.4"
              rotation="0 0 0"
            ></a-entity>
            <a-entity
              gltf-model="/models/cockpit.glb"
              position="0 -0.07 0.25"
              rotation="0 90 0"
              scale="0.02 0.02 0.02"
              static-body
            ></a-entity>
          </a-entity>
        </a-entity>

        {/* VR controllers and teleport */}

        <a-entity oculus-touch-controls="hand: left" thumbstick-move="rig: #cameraRig"></a-entity>
        <a-entity
          oculus-touch-controls="hand: right"
          thumbstick-rotate="rig: #cameraRig"
        ></a-entity>

        {/* Lights */}
        <a-entity light="type: ambient; color: #fff; intensity: 0.5"></a-entity>
        <a-entity light="type: point; intensity: 1" position="0 10 0"></a-entity>
      </a-scene>
    </>
  );
}