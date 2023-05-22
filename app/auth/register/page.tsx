"use client"
import React, { useState } from "react"
import Link from "next/link"
import { registerUser } from "@/api"
import { useMutation } from "@tanstack/react-query"
import { AxiosError } from "axios"
import Head from "next/head"
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from "next/router"


const Register = () => {
  const [register, setRegister] = useState({
    username: "",
    password: "",
    email: "",
    passwordConfirmation: "",
  })

  const {toast} = useToast()
  // const router = useRouter()

  const mutation = useMutation<
    string,
    AxiosError,
    Parameters<typeof registerUser>["0"]
  >(registerUser,{
    onMutate: () => {
     toast({
      description: "Registering..."
     })},
    onSuccess: (data) => {
      toast({
        description: "Registered successfully"
      })
      console.log(data,'register')
      // router.push('/')
    },
    onError: () => {
      toast({
        description: "Could not register"
      })
    }

  } )

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegister({ ...register, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    mutation.mutate(register)
  }

  return (
    <>
    <Head>
      <title>Register</title>
    </Head>
      <div>
        <div className="flex min-h-screen items-center justify-center bg-gray-50">
          <div className="w-full max-w-lg bg-white p-8 shadow">
            <h1 className="text-2xl font-bold text-gray-800">Register</h1>

            <form onSubmit={handleSubmit} className="mt-6">
              <div className="flex flex-col justify-between gap-3">
                <label htmlFor="username" className="text-sm text-gray-600">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Username"
                  required
                  className="w-2/3 rounded-md border border-gray-300 px-3 py-2 placeholder:text-gray-300 focus:border-indigo-300 focus:outline-none focus:ring-1 focus:ring-indigo-100"
                  onChange={handleChange}
                />

                <label htmlFor="email" className="text-sm text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  required
                  className="w-2/3 rounded-md border border-gray-300 px-3 py-2 placeholder:text-gray-300 focus:border-indigo-300 focus:outline-none focus:ring-1 focus:ring-indigo-100"
                  onChange={handleChange}
                />
                <label htmlFor="password" className="text-sm text-gray-600">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  required
                  className="w-2/3 rounded-md border border-gray-300 px-3 py-2 placeholder:text-gray-300 focus:border-indigo-300 focus:outline-none focus:ring-1 focus:ring-indigo-100"
                  onChange={handleChange}
                />
                <label
                  htmlFor="passwordConfirmation"
                  className="text-sm text-gray-600"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="passwordConfirmation"
                  id="passwordConfirmation"
                  placeholder="Confirm Password"
                  required
                  className="w-2/3 rounded-md border border-gray-300 px-3 py-2 placeholder:text-gray-300 focus:border-indigo-300 focus:outline-none focus:ring-1 focus:ring-indigo-100"
                  onChange={handleChange}
                />

                <button
                  type="submit"
                  className="w-2/3 rounded-md bg-indigo-500 px-3 py-2 text-white focus:bg-indigo-600 focus:outline-none"
                >
                  Register
                </button>

                <div className="text-sm text-gray-500">
                  Already have an account?{" "}
                  <Link href="/auth/login">
                    <p className="text-indigo-600 hover:text-indigo-500">
                      Login
                    </p>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
