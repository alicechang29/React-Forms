import { useState } from "react";
//import { v4 as uuid } from 'uuid'; TODO: why doesn't this work?
import NewBoxForm from "./NewBoxForm.jsx";
import Box from "./Box.jsx";


/**
 *
 *
 * Props:
 *
 * State:
 *
 *
 *  BoxList -> NewBoxForm -> Box
 */

function BoxList() {
  const [boxes, setBoxes] = useState([]);

  function renderItems() {
    return (
      <ul>
        {boxes.map(item => (
          <Box
          key={item.id}
          backgroundColor={item.backgroundColor}
          width={item.width}
          height={item.height}></Box>
        ))}
      </ul>
    );
  }

  /** Add new item object to list */
  function addItem(item) {
    let newItem = { ...item, id: crypto.randomUUID() };
    setBoxes(items => [...items, newItem]);
  }

  return (
    <div className="BoxList">
      <NewBoxForm addItem={addItem} />
      {renderItems()}
    </div>
  );
}

export default BoxList;