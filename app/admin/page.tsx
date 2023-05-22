"use client"

import React, { useEffect } from "react"
import Link from "next/link"
import { useUser } from "@/context/user"
import UploadVideo from "@/components/admin/UploadVideo"

const Admin = () => {
  // const { user, refetch } = useUser()
  let user = ''
  useEffect(() => {
    if(localStorage?.getItem('userd ')){
      user = localStorage?.getItem('userd ') || ''
      console.log('userd : ', JSON.parse(user))
    }
  }, [])
  return (
    <>
      <div>
        {user?.length > 0 ? (
          <div className="flex gap-x-4 ">
            <Link href="/login" passHref>
              <p>Login</p>
            </Link>
            <Link href="/register" passHref>
              <p>Register</p>
            </Link>
          </div>
        ) : (
          <div className="flex gap-x-4 ">
            <Link href="/logout" passHref>
              <p>Logout</p>
            </Link>
            <UploadVideo />
          </div>
        )}
      </div>
    </>
  )
}

export default Admin
