import { HexColorPicker } from "react-colorful";
import { useSnapshot } from "valtio";
import { store } from "../Features/Valtio_state";
import { setObjectColor } from "../Features/Valtio_state";

const ColorPicker = () => {
  const { activeModel, models } = useSnapshot(store);

  const active = models[activeModel]?.active;
  const isFullScreen = models[activeModel]?.isFullScreen;
  const color = models[activeModel]?.items[active];

  return (
    <div
      style={{
        display: active && isFullScreen ? "block" : "none",
      }}
      className="colorPicker"
    >
      <HexColorPicker
        className="picker"
        color={color}
        onChange={(color) => setObjectColor(color)}
      />
      <h1 style={{ color: "black", textAlign: "center" }}>{active}</h1>
    </div>
  );
};

export default ColorPicker;
