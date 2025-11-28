"use client"

import {useState} from "react"

import Header from "@/components/header"


import {MainMenu} from "@/components/menu/menu";




const CATEGORIES = ["All", "Action", "Thriller", "Sci-Fi", "Drama", "Comedy", "Adventure" , "Primyera"]

export default function MenuHeader() {

    const [activeMenu , setActiveMenu] = useState(false)






    return (
        <div className="bg-background text-foreground fixed top-0 left-0 right-0 z-50">

            <Header setActiveMenu={setActiveMenu}  activeMenu={activeMenu} />
            <div className={"w-[200px] absolute  left-0"}>
                <MainMenu
                    activeMenu={activeMenu}
                    onClose={() => setActiveMenu(false)}
                />
            </div>
        </div>
    )
}
