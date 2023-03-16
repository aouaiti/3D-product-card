import { useEffect } from "react";
import { useSnapshot } from "valtio";
import { store } from "../Features/Valtio_state";

const CursorController = () => {
  const { current } = useSnapshot(store);
  useEffect(() => {
    const cursor = `<svg style="transform:translate(-23px,-20px) scale(0.7)" width="88" height="88" version="1" xmlns="http://www.w3.org/2000/svg">
    <text fill="#000" style="white-space:pre" font-family="Inter var, sans-serif" font-size="20" letter-spacing="-.01em"><tspan x="40" y="40">${
      store.current || ""
    }</tspan></text>
    <path fill="${
      store.items[current] || "white"
    }" d="M27.8,39.7c-0.1,0-0.2,0-0.4-0.1c-0.2-0.1-0.4-0.3-0.6-0.5l-3.7-8.6l-4.5,4.2C18.5,34.9,18.3,35,18,35 c-0.1,0-0.3,0-0.4-0.1C17.3,34.8,17,34.4,17,34l0-22c0-0.4,0.2-0.8,0.6-0.9C17.7,11,17.9,11,18,11c0.2,0,0.5,0.1,0.7,0.3l16,15 c0.3,0.3,0.4,0.7,0.3,1.1c-0.1,0.4-0.5,0.6-0.9,0.7l-6.3,0.6l3.9,8.5c0.1,0.2,0.1,0.5,0,0.8c-0.1,0.2-0.3,0.5-0.5,0.6l-2.9,1.3 C28.1,39.7,27.9,39.7,27.8,39.7z"/>
    <path fill="#212121" d="M18,12l16,15l-7.7,0.7l4.5,9.8l-2.9,1.3l-4.3-9.9L18,34L18,12 M18,10c-0.3,0-0.5,0.1-0.8,0.2 c-0.7,0.3-1.2,1-1.2,1.8l0,22c0,0.8,0.5,1.5,1.2,1.8C17.5,36,17.8,36,18,36c0.5,0,1-0.2,1.4-0.5l3.4-3.2l3.1,7.3 c0.2,0.5,0.6,0.9,1.1,1.1c0.2,0.1,0.5,0.1,0.7,0.1c0.3,0,0.5-0.1,0.8-0.2l2.9-1.3c0.5-0.2,0.9-0.6,1.1-1.1c0.2-0.5,0.2-1.1,0-1.5 l-3.3-7.2l4.9-0.4c0.8-0.1,1.5-0.6,1.7-1.3c0.3-0.7,0.1-1.6-0.5-2.1l-16-15C19,10.2,18.5,10,18,10L18,10z"/>
</svg>`;
    if (store.isFullScreen) {
      document.querySelector(
        ".cardD"
      ).style.cursor = `url('data:image/svg+xml;base64,${btoa(cursor)}'), auto`;
      return () => (document.querySelector(".cardD").style.cursor = `default`);
    }
  }, [store.isFullScreen, store.current]);
};

export default CursorController;
