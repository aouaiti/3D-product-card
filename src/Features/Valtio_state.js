import { proxy } from "valtio";

export const store = proxy({
  isCanvasReady: false,
  activeModel: null,
  models: {
    model1: {
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
    },
    model2: {
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
    },
    model3: {
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
    },
  },
});

export const toggleReady = () => {
  store.isCanvasReady = !store.isCanvasReady;
};
export const setActiveModel = (state) => {
  store.activeModel = state;
};
export const toggleScreen = (state) => {
  store.models[state].isFullScreen = !store.models[state].isFullScreen;
};
export const setCurrentObject = (model, item) => {
  if (store.models[model].isFullScreen) store.models[model].current = item;
};
export const setActiveObject = (model, item) => {
  if (store.models[model].isFullScreen) store.models[model].active = item;
};
export const setObjectColor = (color) => {
  store.models[store.activeModel].items[
    store.models[store.activeModel].active
  ] = color;
};
