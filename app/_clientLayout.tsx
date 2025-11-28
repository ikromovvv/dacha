"use client"

import type React from "react"


import { Provider } from "react-redux"
import store from "@/store/store"
import MenuHeader from "@/app/components/menuHeader/menuHeader";


export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
      <Provider store={store}>
          <MenuHeader />

          <div className="mt-[80px]">
              {children}
          </div>
      </Provider>
  )
}
