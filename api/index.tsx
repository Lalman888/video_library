import axios from "axios"

const base = process.env.NEXT_PUBLIC_API_ENDPOINT

const userBase = `${base}/api/users`

const authBase = `${base}/api/auth`

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