import './App.css';
import Video from './Video';

function App() {
  return (
    // BEM naming convention
    <div className="app">
      <div className="app__videos">
        <Video url="sam.mp4" 
          channel="pbb"
          description="Yeee it's works"
          song="React Is rocking right now boom boom"
          likes="123"
          messages="456"
          shares="986"
        />
        <Video />
      </div>
    </div>
  );
}

export default App;
