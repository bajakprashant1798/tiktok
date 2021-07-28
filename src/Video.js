import React, { useRef, useState } from 'react'
import "./Video.css"
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

function Video({ url, channel, description, song, likes, messages, shares }) {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);

    const handleVideoPress = () => {
        //if video is playing
        //stop it..
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);
        }
        //otherwise if its not playing
        //play it..
    }

    return (
        <div className="video">
            <video 
            onClick={handleVideoPress}
            className="video__player"
            loop
            ref={videoRef}
            src={url}>
            </video>

            {/* https://v77.tiktokcdn.com/b2992f05b70d7cedba99671b5552a7b5/61015782/video/tos/useast2a/tos-useast2a-pve-0068/1e5a72d81bf1409b9941dddff64e404b/?a=1233&br=2072&bt=1036&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Qq.UeE~M_4ka&l=20210728071121010190176022135A80FE&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajd2M3RrOzhlNjMzNzczM0ApOjQ4aTg3O2RmN2U7Zjg7Omc0NWdvcW5tcWFgLS1kMTZzczMxYy41MTRhMDAxYDAzX2M6Yw%3D%3D&vl=&vr= */}

            {/* videoFooter */}
            <VideoFooter channel={channel} description={description} song={song} />
            
            {/* videoSidebar */}
            <VideoSidebar likes={likes} shares={shares} messages={messages} />
        </div>
    )
}

export default Video
