import React from 'react';
import { Fade, Bounce, Flip, Hinge, JackInTheBox, Roll, Rotate, Slide, Zoom } from 'react-awesome-reveal';

//  import './App.css';
import './mysas.scss';
// import element from './animeTest';

function App() {
  
  const element = () => {
    console.log('clicked')
    const targetedElement = document.getElementById('my-element');
    targetedElement.classList.add('animate__animated', 'animate__bounceOut');
    setTimeout(function() {
      deleteElement()
    }, 1000);
    
  };
  const deleteElement = () => {
    document.getElementById('my-element').remove();
  }

  return (
    <div className="mainView">
      <Fade>
        <p>I will gently appear as I enter the viewport</p>
      </Fade>
      <div className="spacer">
      <div id="my-element">
        <button onClick={element}>
        <h3 >Custom JS element</h3>
        </button>
         <Bounce >
        <p >Testing bounce effect</p>
      </Bounce>
      </div>
      </div>
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
      <Slide delay={1000}>
        <h3>SLIDE</h3>
      </Slide>
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
