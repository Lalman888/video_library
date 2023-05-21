import { useQuery } from '@tanstack/react-query';
import React from 'react'

interface Video {
    id: string;
    title: string;
    description: string;
}

const VideoList = () => {
    const {data, isLoading, isError} =  useQuery<Video[]>({
        queryKey: ['videos'],
        queryFn: () => fetch('/api/videos').then(res => res.json())
    })

    if(isLoading) return <div>Loading...</div>
    if(isError) return <div>Error fetching videos</div>
    console.log('video list ',data);
  return (
    <div>
 Video     
    </div>
  )
}

export default VideoList
