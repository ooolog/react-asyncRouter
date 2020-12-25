import './App.css';
import Index from './pages/index';
import PureIndex from './pages/shallowEqual/pure';

function App() {
  return (
    <div className="App">
      <Index></Index>
      <PureIndex></PureIndex>
    </div>
  );
}

export default App;
