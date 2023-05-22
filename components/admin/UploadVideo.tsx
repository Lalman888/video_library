import React from 'react'

const UploadVideo = () => {
  return (
    <>
        <div className="flex h-screen w-full flex-col items-center justify-center bg-gray-100">
            <div className="w-full max-w-sm rounded-md bg-white p-4 shadow-md">
                <div className="flex items-center justify-center">
                    <span className="text-xl font-medium text-gray-800">Upload Video</span>
                 </div>
                <form className="mt-4" action="#" method="POST" encType="multipart/form-data">
                    <div className="mb-3 flex flex-col">
                        <label className="mb-2 font-bold text-gray-800" htmlFor="video">Video</label>
                        <input className="rounded-md border border-gray-300 px-3 py-2" type="file" name="video" id="video" required />
                    </div>
                    <div className="mb-3 flex flex-col">
                        <label className="mb-2 font-bold text-gray-800" htmlFor="title">Title</label>
                        <input className="rounded-md border border-gray-300 px-3 py-2" type="text" name="title" id="title" placeholder="Enter title" required />
                    </div>
                    <div className="mb-3 flex flex-col">
                        <label className="mb-2 font-bold text-gray-800" htmlFor="description">Description</label>
                        <textarea className="rounded-md border border-gray-300 px-3 py-2" name="description" id="description" rows={3} placeholder="Enter description" required></textarea>
                    </div>
                    <div className="mt-4 flex items-center justify-center">
                        <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-500 focus:bg-blue-700 focus:outline-none" type="submit">Upload</button>
                    </div>
                </form>
            </div>
        </div>
                         
    </>
  )
}

export default UploadVideo
