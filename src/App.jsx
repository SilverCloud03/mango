import { useState } from 'react';
import Navbar from './components/Navbar';
import NavDots from './components/NavDots';
import Scene1_Start from './components/Scene1_Start';
import Scene2_Scroll from './components/Scene2_Scroll';
import Scene3_Transport from './components/Scene3_Transport';
import Scene4_Final from './components/Scene4_Final';

function App() {
  const [revealed, setRevealed] = useState(false);

  return (
    <div
      id="scroll-root"
      className={revealed ? 'scroll-on' : 'scroll-off'}
    >
      <Navbar revealed={revealed} />
      <NavDots revealed={revealed} />
      <div id="start" className="scene-wrap">
        <Scene1_Start revealed={revealed} onReveal={() => setRevealed(true)} />
      </div>
      {revealed && (
        <>
          <div id="about" className="scene-wrap">
            <Scene2_Scroll />
          </div>
          <div id="transport" className="scene-wrap">
            <Scene3_Transport />
          </div>
          <div id="contacts" className="scene-wrap">
            <Scene4_Final />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
