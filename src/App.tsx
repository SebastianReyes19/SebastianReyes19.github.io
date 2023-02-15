import './App.scss';
import Header from './components/Header';
import Canvas from './components/Canvas';
import Intro from './components/Intro';

function App() {
  return (
    <div className='App'>
      <Header/>
      <Intro/>
      <Canvas/>
    </div>
  );
}

export default App;