import React from "react";

const VideoListItem = (props) => {
    const imageUrl = props.video.snippet.thumbnails.default.url;
    console.log("PROPS", props)


    const Yaqicheck2  = () =>  {
        console.log("PRO", props.video)
        props.onVideoSelect(props.video)
    }
    return (
        <li onClick={() => Yaqicheck2()} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl} />
                </div>
                
                <div className="media-body">
                    <div className="media-heading">
                        {props.video.snippet.title}
                    </div>
                </div>
            </div>
        </li>
    );
}

export default VideoListItem;