import { BlockPicker } from "react-color";
import { useState } from "react";

const ColorPicker = ({ handleBgColorChange, buttonColor }) => {
  let [noteBgColor, setNoteBgColor] = useState(buttonColor);
  const handleColorChange = (color, event) => {
    setNoteBgColor(color.hex);
    event.target.value
      ? handleBgColorChange(event.target.value)
      : handleBgColorChange(event.target.title);

    //handle background change(noteBgColor)
  };
  return (
    <BlockPicker
      colors={[
        "#ff0055",
        "#ff0000",
        "#ff6600",
        "#fffb00",
        "#bbff00",
        "#11ff04",
        "#00ec6a",
        "#00ffd4",
        "#0980ea",
        "#1100ff",
      ]}
      color={noteBgColor}
      onChangeComplete={handleColorChange}
    />
  );
};

export default ColorPicker;
