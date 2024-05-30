// import { useState } from "react";
// import { v4 as uuid } from 'uuid';

/** Box
 *
 * Props:
 * backgroundColor: valid color in css
 * width: number
 * height: number
 * unit: string -> default is "px"
 */
function Box({ backgroundColor, width, height, unit = "px" }) {

  const style = {
    backgroundColor,
    width: `${width}${unit}`,
    height: `${height}${unit}`
  };
  return (
    <div style={style}>
    </div>
  );


}

export default Box;