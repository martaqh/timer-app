
import TimeDisplay from './components/TimeDisplay/TimeDisplay';
import { useState } from 'react';

const App = () => {
 const [timeCurrent, setTimeCurrent] = useState(0);
 const [timeInterval, setTimeInterval] = useState(null);
 

 const useStart = () => {
  setTimeInterval(setInterval(() => {
    setTimeCurrent(prevValue => prevValue + 1);
  }, 1))
};
 

 const useStop = () => {
    clearInterval(timeInterval);
 }

 const useReset = () => {
    setTimeCurrent(0);
    clearInterval(timeInterval);
 }

  return (
    <div>
      <TimeDisplay time={timeCurrent}/>
      <button onClick={useStart}>Start</button>
      <button onClick={useStop}>Stop</button>
      <button onClick={useReset}>Reset</button>
    </div>
  );
}

export default App;
