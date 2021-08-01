import './app.css';
import Score from './components/Score';
import Board from './components/Board';
import Name from './components/Name';
import { useState } from 'react';

function App() {
  const [myName, setMyName] = useState('이름2');
  return (
    <div className='App'>
      Parent : {myName}
      <Score />
      <Board name={myName} />
      <Name name={myName} />
    </div>
  );
}

export default App;
