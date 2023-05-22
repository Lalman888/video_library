import axios from "axios"

const base = process.env.NEXT_PUBLIC_API_ENDPOINT

const userBase = `${base}/api/users`

const authBase = `${base}/api/auth`
const videoBase = `${base}/api/videos`

export function registerUser(data: {
  username: string
  password: string
  email: string
  passwordConfirmation: string
}) {
  return axios.post(userBase, data,{
    withCredentials: true
  }).then((res) => res.data)
}

export function loginUser(data: {
    email: string
    password: string
}){
   return axios.post(authBase, data).then((res) => {
      // console.log('login: ',res)
      localStorage.setItem('accessToken', res.data.token)
      getUser()
      return res.data
   })
}

export function getUser(){
  return axios.get(userBase,{
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`
    },
    withCredentials: true
  }).then((res) => {
    // console.log('res: ',res)
    localStorage.setItem('userd ', JSON.stringify(res.data))
    return res.data
  })
  .catch((err) => {
    return null;
  })
}

export function uploadVideo({
  formData, config
} : {formData: FormData, config: {onUploadProgress: (progressEvent: any) => void}}){
  return axios.post(videoBase, formData, {
    withCredentials: true,
    ...config,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      "Content-Type": "multipart/form-data",
    }
  }).then((res) => {
    console.log('res: upload ',res)
    return res.data
  })
}

export function updateVideo({videoId,...payload} : {
  videoId: string
  title: string
  description: string
  published: boolean
}){
  return axios.patch(`${videoBase}/${videoId}`, payload, {
    withCredentials: true,
  }).then((res) => {
    console.log('res: update ',res)
    return res.data
  }
  )
}

export function getVideo(){
  return axios.get(videoBase,{
    withCredentials: true,
  }).then((res) => {
    // console.log('res: videos ',res)
    return res.data
  }
  )
} 