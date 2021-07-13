import React from 'react'
import VideoItem from '../youtube_item/youtube_item'
import styles from './youtube_list.module.css';

const VideoList = (props)=>(
    <ul className={styles.videos}>
        {props.videos.map(video => (
        <VideoItem key={video.id} video={video}/>))}
    </ul>
);

export default VideoList
