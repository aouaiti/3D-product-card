import { proxy } from "valtio";

export const store = proxy({
  canvasReady: false,
  isFullScreen: false,
});

export const toggleScreen = () => {
  store.isFullScreen = !store.isFullScreen;
};
