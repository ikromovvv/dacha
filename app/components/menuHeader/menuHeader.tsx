"use client"

import {useState} from "react"

import Header from "@/components/header/header"


import {MainMenu} from "@/components/menu/menu";
import {usePathname} from "next/navigation";


const CATEGORIES = ["All", "Action", "Thriller", "Sci-Fi", "Drama", "Comedy", "Adventure", "Primyera"]

export default function MenuHeader() {

    const [activeMenu, setActiveMenu] = useState(false)


    const pathname = usePathname(); // masalan: /key-list


    return (
        <div className="bg-background text-foreground fixed top-0 left-0 right-0 z-50">

            <Header setActiveMenu={setActiveMenu} activeMenu={activeMenu}/>
            {/*<div className={""}>*/}
            {pathname !==  "/key-list" &&
                <MainMenu/>}
            {/*</div>*/}
        </div>
    )
}
