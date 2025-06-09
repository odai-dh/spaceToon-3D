AFRAME.registerComponent('thumbstick-move', {
  schema: { rig: {type: 'selector'}, speed: {type: 'number', default: 0.05} },
  init: function () {
    this.direction = {x: 0, y: 0};
    this.el.addEventListener('thumbstickmoved', (evt) => {
      this.direction.x = evt.detail.x;
      this.direction.y = evt.detail.y;
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
  schema: { rig: {type: 'selector'}, speed: {type: 'number', default: 0.5} },
  init: function () {
    this.rotationInput = {x: 0, y: 0};
    this.el.addEventListener('thumbstickmoved', (evt) => {
      this.rotationInput.x = evt.detail.x;
      this.rotationInput.y = evt.detail.y;
    });
  },
  tick: function () {
    if (!this.data.rig) return;
    const rigObj = this.data.rig.object3D;

    if (Math.abs(this.rotationInput.x) > 0.05 || Math.abs(this.rotationInput.y) > 0.05) {
      const euler = new THREE.Euler(
        -this.rotationInput.y * 0.01 * this.data.speed, // pitch (X)
        -this.rotationInput.x * 0.01 * this.data.speed, // yaw (Y)
        0,
        'YXZ'
      );
      rigObj.rotation.x += euler.x;
      rigObj.rotation.y += euler.y;
    }
  }
});