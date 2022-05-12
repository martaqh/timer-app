import './App.css';
import TimeDisplay from './components/TimeDisplay/TimeDisplay';

const App = () => {
 // const [timeCurrent, setTimeCurrent] = useState(0);
 // const [interval, setInterval] = useState(null);

  return (
    <div>
      <TimeDisplay time={TimeDisplay}/>
    </div>
  );
}

export default App;
