AFRAME.registerComponent('thumbstick-move', {
  schema: { rig: {type: 'selector'}, speed: {type: 'number', default: 0.1} },
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
      const pos = this.data.rig.getAttribute('position');
      pos.x += this.direction.x * this.data.speed;
      pos.z += this.direction.y * this.data.speed;
      this.data.rig.setAttribute('position', pos);
    }
  }
});