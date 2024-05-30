import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Box from './Box';


/** Component for entire page.
 *
 * Props: none
 * State: none
 *
*/

function App() {
  const [count, setCount] = useState(0);

  function incrCount() {
    setCount(count => count + 1);
  }

  return (
    <div className="App">
      <Box backgroundColor="red" width="100px" height="50px" />
    </div>
  );
};

export default App;
