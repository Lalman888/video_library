import React from "react"
import Link from "next/link"
import { Video } from "@/types"

const VideoCard = ({ video }: { video: Video }) => {
  return (
    <>
      <Link href={`/watch/${video.videoId}`} passHref>
        <div className="flex h-64 w-full flex-col items-center justify-center rounded-lg bg-gray-800 shadow-md">
          <p className="text-sm text-gray-400"> {video.videoId} </p>
          <h3 className="text-3xl font-medium text-gray-100">{video.title}</h3>
          <p className="text-sm text-gray-400">{video.description}</p>
        </div>
      </Link>
    </>
  )
}

export default VideoCard
