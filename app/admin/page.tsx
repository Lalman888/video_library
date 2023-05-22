"use client"

import React from "react"
import Link from "next/link"
import { useUser } from "@/context/user"

const Admin = () => {
  const { user, refetch } = useUser()
  return (
    <>
      <div>
        {!user ? (
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
          </div>
        )}
      </div>
    </>
  )
}

export default Admin
