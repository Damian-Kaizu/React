import logo from './logo.svg';
import './App.css';
import HookCounterOne from './components/useEffect/HookCounterOne';
import HookMouse from './components/useEffect/HookMouse';
import IntervalHookCounter from './components/useEffect/IntervalHookCounter';
import DataFetching from './components/useEffect/DataFetching';



function App() {
  return (
    <div className="App">
  <DataFetching/>
  <IntervalHookCounter/>
    </div>
  );
}

export default App;
