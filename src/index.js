import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import Logo from './components/logo';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDtzBx6Byn7JahWG8wHn2s8qxphYw2vCrk';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null,
        };
    }

    componentDidMount() {
        this.videoSearch('kuchkaho tv');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (video) => {
            this.setState({
                videos: video,
                selectedVideo: video[0],
            });
        })
    }

    yaqiCheck = (sel) => {
        console.log("SAL", sel)
        this.setState({
            selectedVideo: sel,
        })
    }

    render () {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

        return (
            <div>
                <div className='header'>
                    <Logo>
                    </Logo>
                    <SearchBar
                        onSearchTermChange={videoSearch}
                    />
                </div>
                <VideoDetail
                    video={this.state.selectedVideo}
                />
                <VideoList
                    onVideoSelect={(sal) => this.yaqiCheck(sal)}
                    videos={this.state.videos}
                />
            </div>
        );
    }
};

ReactDOM.render(<App />, document.querySelector('.container'));