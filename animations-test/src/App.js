import React from 'react';
import { Fade, Bounce, Flip, Hinge, JackInTheBox, Roll, Rotate, Slide, Zoom } from 'react-awesome-reveal';
import './App.css';

function App() {
  return (
    <div className="App">
      <Fade>
        <p>I will gently appear as I enter the viewport</p>
      </Fade>
      <div className="spacer">
        
      </div>
      <Bounce>
        <p>Testing bounce effect</p>
      </Bounce>
      <div className="spacer">
        
      </div>
      <Flip>
        <h3>Fliiiip</h3>
      </Flip>
      <div className="spacer">
        
      </div>
      <JackInTheBox>
        <h3>JackInTheBox</h3>
      </JackInTheBox>
      <div className="spacer">
        
      </div>
      <Roll>
        <h3>ROLL</h3>
      </Roll>
      <div className="spacer">
        
      </div>
      <Rotate>
        <h3>ROTATE</h3>
      </Rotate>
      <div className="spacer">
        
      </div>
      <Zoom>
        <h3>ZOOM</h3>
      </Zoom>
    </div>
  );
}

export default App;
