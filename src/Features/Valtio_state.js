import { proxy } from "valtio";

export const store = proxy({
  isCanvasReady: false,
  isFullScreen: false,
  current: null,
  active: null,
  items: {
    laces: "#aaaaaa",
    mesh: "#aaaaaa",
    caps: "#aaaaaa",
    inner: "#aaaaaa",
    sole: "#aaaaaa",
    stripes: "#aaaaaa",
    band: "#aaaaaa",
    patch: "#aaaaaa",
  },
});

export const toggleScreen = () => {
  store.isFullScreen = !store.isFullScreen;
};
export const toggleReady = () => {
  store.isCanvasReady = !store.isCanvasReady;
};
export const setCurrentObject = (state) => {
  store.current = state;
};
export const setActiveObject = (state) => {
  store.active = state;
};
