import React from "react";
import VideoListItem from "./video_list_item";

const VideoList = (props) => {

    const Yaqicheck3 = (video) => {
        console.log("YA", video)
        props.onVideoSelect(video)
    }


    const videoItems = props.videos.map((video) => {
        return (
            <VideoListItem
                onVideoSelect={(video) => Yaqicheck3(video)}
                key={video.etag}
                video={video}
            />
        );
    });

    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
}

export default VideoList;