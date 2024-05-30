// import { useState } from "react";
// import { v4 as uuid } from 'uuid';

function Box({ backgroundColor, width, height }) {
  // width and height are passed as numbers
  //need to convert into string and add "px"

  const style = { backgroundColor, width, height };
  return (
    <div style={style}>
    </div>
  );


}

export default Box;