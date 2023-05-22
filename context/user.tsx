"use client"
import { createContext,ReactNode, use, useContext, useEffect } from "react"
import { getUser } from "@/api"
import { QueryKeys } from "@/types"
import { useQuery,RefetchOptions,RefetchQueryFilters } from "@tanstack/react-query"
import { User } from "@/types"

const userContext = createContext<{user: User;
  refetch: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
  ) => any;
  // @ts-ignore
}>(null)

function UserContextProvider({ children }: { children: ReactNode }) {
  // @ts-ignore
  const { data, isLoading, refetch} = useQuery(QueryKeys.user, getUser)

  return (
  // @ts-ignore
    <userContext.Provider value={{user: data, refetch }}>
      {children}
    </userContext.Provider>
  )
}

const useUser = () => useContext(userContext)

export { UserContextProvider, useUser } 