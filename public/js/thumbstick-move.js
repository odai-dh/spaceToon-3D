AFRAME.registerComponent('thumbstick-move', {
  schema: { rig: {type: 'selector'}, speed: {type: 'number', default: 0.01} },
  init: function () {
    this.direction = {x: 0, y: 0};
    this.normalSpeed = this.data.speed;
    this.boostSpeed = this.data.speed * 3;

    this.el.addEventListener('thumbstickmoved', (evt) => {
      this.direction.x = evt.detail.x;
      this.direction.y = evt.detail.y;
    });

    this.el.addEventListener('triggerdown', () => {
      this.data.speed = this.boostSpeed;
      const scene = document.querySelector('a-scene');
      if (scene) {
        scene.setAttribute('background', 'color: #222');
        if (!scene.querySelector('#boost-light')) {
          const boostLight = document.createElement('a-entity');
          boostLight.setAttribute('id', 'boost-light');
          boostLight.setAttribute('light', 'type: point; color: #0ff; intensity: 2; distance: 10');
          boostLight.setAttribute('position', '0 2 0');
          scene.appendChild(boostLight);
        }
      }
    });

    this.el.addEventListener('triggerup', () => {
      this.data.speed = this.normalSpeed;
      const scene = document.querySelector('a-scene');
      if (scene) {
        scene.setAttribute('background', 'color: #000');
        const boostLight = scene.querySelector('#boost-light');
        if (boostLight) {
          scene.removeChild(boostLight);
        }
      }
    });
  },
  tick: function () {
    if (!this.data.rig) return;
    if (Math.abs(this.direction.x) > 0.1 || Math.abs(this.direction.y) > 0.1) {
           const rigObj = this.data.rig.object3D;

      // Get forward direction
      const forward = new THREE.Vector3();
      rigObj.getWorldDirection(forward);
      forward.normalize();

      // Get strafe direction (right vector)
      const strafe = new THREE.Vector3().crossVectors(rigObj.up, forward).normalize();

      // Move based on input
      const moveVector = new THREE.Vector3();
      moveVector.addScaledVector(forward, this.direction.y * this.data.speed);
      moveVector.addScaledVector(strafe, this.direction.x * this.data.speed);

      rigObj.position.add(moveVector);
    }
  }
});
AFRAME.registerComponent('thumbstick-rotate', {
  schema: {
    rig: { type: 'selector' },
    speed: { type: 'number', default: 0.5 },
    rollSpeed: { type: 'number', default: 0.03 }
  },
  init: function () {
    this.rotationInput = {x: 0, y: 0};
    this.roll = 0;
    this.el.addEventListener('thumbstickmoved', (evt) => {
      this.rotationInput.x = evt.detail.x;
      this.rotationInput.y = evt.detail.y;
    });
    this.el.addEventListener('abuttondown', () => this.roll = -1);
    this.el.addEventListener('abuttonup', () => this.roll = 0);
    this.el.addEventListener('bbuttondown', () => this.roll = 1);
    this.el.addEventListener('bbuttonup', () => this.roll = 0);
  },
  tick: function () {
    if (!this.data.rig) return;
    const rigObj = this.data.rig.object3D;

    if (Math.abs(this.rotationInput.x) > 0.05 || Math.abs(this.rotationInput.y) > 0.05 || this.roll !== 0) {
      const deltaEuler = new THREE.Euler(
        -this.rotationInput.y * 0.01 * this.data.speed, // pitch
        -this.rotationInput.x * 0.01 * this.data.speed, // yaw
        this.roll * this.data.rollSpeed, // Z-axis roll
        'YXZ'
      );
      const deltaQuat = new THREE.Quaternion().setFromEuler(deltaEuler);
      rigObj.quaternion.multiplyQuaternions(deltaQuat, rigObj.quaternion);
    }
  }
});