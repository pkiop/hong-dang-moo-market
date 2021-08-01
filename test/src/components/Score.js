import './Score.css';
import { useState } from 'react';
function App() {
  const [myScore, setMyScore] = useState(100);
  return (
    <div className='score'>
      <div>Score: {myScore}</div>
    </div>
  );
}

export default App;
