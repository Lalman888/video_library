"use client"

import { getVideo } from "@/api";
import VideoCard from "@/components/video/VideoCard";
import { QueryKeys } from "@/types";
import { useQuery } from "@tanstack/react-query";
// import Link from "next/link"
import { Fragment, useEffect, useState } from "react";

export default function IndexPage() {
  // const {data, error, isLoading} = useQuery(QueryKeys.videos, getVideo)
  const [videos, setVideos] = useState([])
  const [load, setLoad] = useState(false)

  useEffect(() => {
    setLoad(true)
    getVideo().then((res) => {
      console.log('res: videos get  ',res)
      setVideos(res)
      setLoad(false)
    })
  }, [])
  return (
    <section className="container grid items-center gap-6 bg-slate-200 pb-8 pt-6 md:py-10">
           {
              load ? <div>
                <h1 className="text-3xl ">Loading...</h1>
              </div> : (
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {
                    (videos || [])?.map((video,i) => (
                      <Fragment key={i}>
                        <VideoCard video={video} />
                      </Fragment>
                    ))
                  }
                  </div>
              )
           }
    </section>
  )
}
