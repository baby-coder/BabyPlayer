import React from 'react';

import { Grid } from '@material-ui/core';

import { SearchBar, VideoDetail, VideoList } from './components/';

import youtubeApi from './api/youtube';
import { config } from './config';

class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null,
    }

    handleSubmit = async (searchTerm) => {
        const response = await youtubeApi.get('search', {
            params: {
                part: 'snippet',
                maxResults: '5',
                key: config.API_KEY,
                q: searchTerm
              },
        })
        // console.log(response);
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        })
    }

    videoSelect = (video) => {
        this.setState({
            selectedVideo: video
        })
    }

    render() {
        const { selectedVideo, videos } = this.state;
         return (
            <Grid justify='center' container spacing={10}>
                <Grid item xs={12}>
                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                            {/* Search bar */}
                            <SearchBar onFormSubmit={this.handleSubmit} />
                        </Grid>
                        <Grid item xs={8}>
                            {/* Video details */}
                            <VideoDetail video={selectedVideo} />
                        </Grid>
                        <Grid item xs={4}>
                            {/* Video list */}
                            <VideoList videos={videos} onVideoSelect={this.videoSelect} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default App;