import React from 'react'
import VideoItem from '../youtube_item/youtube_item'

const VideoList = (props)=>(
    <ul>
        {props.videos.map(video => (
        <VideoItem key={video.id} video={video}/>))}
    </ul>
);

export default VideoList
