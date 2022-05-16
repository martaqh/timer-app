import styles from './App.module.scss'
import TimeDisplay from './components/TimeDisplay/TimeDisplay';
import { useState, useEffect } from 'react';

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

 useEffect(() => {
  return () => {
     if(timeInterval) clearInterval(timeInterval);
  };
}, [timeInterval]);

  return (
    <div className={styles.container}>
      <div className={styles.timerWrapper}>
        <TimeDisplay time={timeCurrent}/>
        <div className={styles.buttonsWrapper}>
          <button className={styles.btn} onClick={useStart}>Start</button>
          <button className={styles.btn} onClick={useStop}>Stop</button>
          <button className={styles.btn} onClick={useReset}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
