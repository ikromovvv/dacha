"use client"

import type React from "react"


import { Provider } from "react-redux"
import store from "@/store/store"
import MenuHeader from "@/app/components/menuHeader/menuHeader";
import {useParams, usePathname} from "next/navigation";


export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

    const pathname = usePathname(); // masalan: /key-list

    const {id} = useParams()

    return (
      <Provider store={store}>
          <MenuHeader />

          <div style={{marginTop: !id ? "150px" : "100px"}}>
              {children}
          </div>
      </Provider>
  )
}
