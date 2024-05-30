import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Box from './Box';
import BoxList from './BoxList.jsx';

/** Component for entire page.
 *
 * Props: none
 * State: none
 *
*/

function App() {

  return (
    <div className="App">
      <BoxList></BoxList>
    </div>
  );
};

export default App;
