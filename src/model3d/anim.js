import TWEEN from '@tweenjs/tween.js';

const animateCamera = (camera, controls, cameraSettings, callBack) => {
  const { position, target, duration, minDistance } = cameraSettings;
  controls.enabled = false;
  const from = {};
  const to = {};

  if (position) {
    from.px = camera.position.x;
    from.py = camera.position.y;
    from.pz = camera.position.z;
    to.px = position.x;
    to.py = position.y;
    to.pz = position.z;
  }
  console.log('from::', from);

  if (target) {
    from.tx = controls.target.x;
    from.ty = controls.target.y;
    from.tz = controls.target.z;
    to.tx = target.x;
    to.ty = target.y;
    to.tz = target.z;
  }

  return new TWEEN.Tween(from)
    .to(to, duration ?? 5000)
    .easing(TWEEN.Easing.Sinusoidal.InOut)
    .onUpdate(function ({ px, py, pz, tx, ty, tz }) {
      if (px != null) {
        camera.position.set(px, py, pz);
      }
      if (tx != null) {
        // console.log(controls.target);
        controls.target.set(tx, ty, tz);
      }
      if (minDistance != null) {
        // console.log(controls.target);
        controls.minDistance = 100;
      }
      // controls.update();
    })
    .onComplete(() => {
      controls.enabled = true;
      callBack && callBack();
    })
    .start();
};

export default animateCamera;
