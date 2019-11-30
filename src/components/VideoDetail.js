import React, { Fragment } from 'react';

import { Paper, Typography } from '@material-ui/core';

function VideoDetail ({ video }) {
    if(!video) return <div> No Videos found..</div>
    console.log(video);
    const videoId = video.id.videoId !== undefined ? video.id.videoId : video.id.channelId;
    const videoSrc = `https://www.youtube.com/embed/${videoId}`
    return (
        <Fragment>
            <Paper elevation={6} style={{ height: '70%' }}>
                <iframe frameBorder='0' height='100%' width='100%' title='Video' src={videoSrc} />
            </Paper>
            <Paper elevation={6} style={{ padding: '10px'}}>
                <Typography variant='h4'>
                    {video.snippet.title}
                </Typography>
                <Typography variant='subtitle2'>
                    {video.snippet.channelTitle}
                </Typography>
                <Typography variant='subtitle2'>
                    {video.snippet.description}
                </Typography>
            </Paper>
        </Fragment>
    )
}

export default VideoDetail;