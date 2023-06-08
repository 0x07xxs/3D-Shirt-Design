//anything defined in here can be used anywhere else

import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#02295c',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './threejs.png',
  fullDecal: './threejs.png',
});

export default state;