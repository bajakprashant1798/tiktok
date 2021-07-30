import axios from './axios';
import { useEffect, useState } from 'react';
import './App.css';
import Video from './Video';

function App() {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get('/v2/posts');
      setVideos(response.data);
      return response;
    }

    fetchPosts();
  }, []);

  return (
    // BEM naming convention
    <div className="app">
      <div className="app__videos">

        {videos.map(({url, channel, description, song, likes, messages, shares}) => (
          <Video 
            url = {url}
            channel = {channel}
            song = {song}
            likes = {likes}
            messages = {messages}
            description = {description}
            shares = {shares}
          />
        ))}
        
        {/* <Video url="sam.mp4" 
          channel="pbb"
          description="Yeee it's works"
          song="React Is rocking right now boom boom"
          likes={123}
          messages={456}
          shares={986}
        />
        <Video /> */}

      </div>
    </div>
  );
}

export default App;
