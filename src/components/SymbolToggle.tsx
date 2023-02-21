import { useState } from "react";

enum BrightnessLevel {
  STARTING = 0.1,
  ACTIVATED = 1,
}

interface Props {
  src: string;
  left: number;
  top: number;
}

export function SymbolToggle(props: Props) {
  const [opacity, setOpacity] = useState(BrightnessLevel.STARTING);
  function toggleImg() {
    setOpacity((previousValue) => {
      if (previousValue === BrightnessLevel.STARTING) {
        return BrightnessLevel.ACTIVATED;
      }
      return BrightnessLevel.STARTING;
    });
  }

  return (
    <img
      src={props.src}
      alt="wallOne"
      style={{
        left: `${props.left}px`,
        top: `${props.top}px`,
        position: "absolute",
        filter: opacity===BrightnessLevel.ACTIVATED?"drop-shadow(16px 16px 20px red) invert(75%)" : "" ,
        cursor: "pointer",
        zIndex: 300,
        borderRadius: "100px"
      }}
      onClick={toggleImg}
    />
  );
}
