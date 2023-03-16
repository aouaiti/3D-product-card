import { HexColorPicker } from "react-colorful";
import { useSnapshot } from "valtio";
import { store } from "../Features/Valtio_state";
import TextField from "@mui/material/TextField";

const ColorPicker = () => {
  const { active, items, isFullScreen } = useSnapshot(store);
  return (
    <div
      style={{ display: active && isFullScreen ? "block" : "none" }}
      className="colorPicker"
    >
      <HexColorPicker
        className="picker"
        color={items[active]}
        onChange={(color) => (store.items[active] = color)}
      />
      <h1 style={{ color: "black", textAlign: "center" }}>{active}</h1>
    </div>
  );
};

export default ColorPicker;
