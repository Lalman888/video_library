"use client"

import React, { Fragment, useState } from "react"
import { getVideo, updateVideo, uploadVideo } from "@/api"
import { Video } from "@/types"
import { useMutation } from "@tanstack/react-query"
import { AxiosError } from "axios"
import { useRouter } from "next/navigation"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog"

const UploadVideo = () => {
  const [progress, setProgress] = useState(0)

  const config = {
    onUploadProgress: (progressEvent: any) => {
      const { loaded, total } = progressEvent
      let percent = Math.floor((loaded * 100) / total)
      //console.log("percent: ", percent)
      setProgress(percent)
    },
  }

  const mutation = useMutation(uploadVideo)

  const upload = (file: File[]) => {
    const formData = new FormData()
    formData.append("video", file[0])

    mutation.mutate({ formData, config })
  }
  return (
    <>
      <div className="flex h-screen w-full flex-col items-center justify-center bg-gray-100">
        <div className="w-full max-w-sm rounded-md bg-white p-4 shadow-md">
          <Dialog>
            <DialogTrigger>
              <div className="flex items-center justify-center">
                <span className="text-xl font-medium text-gray-800">
                  Upload Video
                </span>
              </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[525px]">
              <DialogHeader>
                <div className="mb-3 flex flex-col">
                  <label
                    className="mb-2 font-bold text-gray-800"
                    htmlFor="video"
                  >
                    Video
                  </label>
                  <input
                    className="rounded-md border border-gray-300 px-3 py-2"
                    type="file"
                    name="video"
                    id="video"
                    accept="video/mp4,video/x-m4v,video/*"
                    multiple={false}
                    // @ts-ignore
                    onChange={(e) => upload(e.target.files as File[])}
                    required
                  />
                </div>

                {progress === 0 && (
                  <>
                    <div>{progress} %</div>
                  </>
                )}
                {
                  mutation.data && (
                    <Fragment>
                  <EditVideoForm videoId={mutation.data.videoId} />
                    </Fragment>
                  )
                }
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </>
  )
}

export default UploadVideo

export const EditVideoForm = ({ videoId }: { videoId: string }) => {
  const [videoForm, setVideoForm] = useState({
    title: "",
    description: "",
    published: false,
  })
  const router = useRouter()
  type input = Parameters<typeof updateVideo>["0"]

  const mutation = useMutation<Video, AxiosError, input>(updateVideo, {
    onSuccess: (data) => {
      //console.log("data: edit form ", data)
      router.push(`/`)
    },
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    mutation.mutate({
      videoId,
      ...videoForm,
    })
  }

  return (
    <>
      <form className="mt-4" onSubmit={handleSubmit}>
        <div className="mb-3 flex flex-col">
          <label className="mb-2 font-bold text-gray-800" htmlFor="title">
            Title
          </label>
          <input
            className="rounded-md border border-gray-300 px-3 py-2"
            type="text"
            name="title"
            value={videoForm.title}
            onChange={(e) =>
              setVideoForm({ ...videoForm, title: e.target.value })
            }
            id="title"
            placeholder="Enter title"
            required
          />
        </div>
        <div className="mb-3 flex flex-col">
          <label className="mb-2 font-bold text-gray-800" htmlFor="description">
            Description
          </label>
          <textarea
            className="rounded-md border border-gray-300 px-3 py-2"
            name="description"
            id="description"
            value={videoForm.description}
            onChange={(e) =>
              setVideoForm({ ...videoForm, description: e.target.value })
            }
            rows={3}
            placeholder="Enter description"
            required
          ></textarea>
        </div>
        <div className="mb-3 flex flex-col">
          <label className="mb-2 font-bold text-gray-800" htmlFor="published">
            Published
          </label>
          <input
            type="checkbox"
            name="published"
            id="published"
            className="rounded-md border border-gray-300 px-3 py-2"
            checked={videoForm.published}
            onChange={(e) =>
              setVideoForm({ ...videoForm, published: e.target.checked })
            }
          />
        </div>
        <div className="mt-4 flex items-center justify-center">
          <button
            className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-500 focus:bg-blue-700 focus:outline-none"
            type="submit"
          >
            Upload
          </button>
        </div>
      </form>
    </>
  )
}
