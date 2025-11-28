"use client"

import { useDispatch, useSelector } from "react-redux"
import { useState, useCallback } from "react"
import { setSearchQuery } from "@/store/slices/filterSlice"
import type { RootState } from "@/store/store"
import {ArrowLeft, Menu, X} from "lucide-react"
import {useParams, useRouter} from "next/navigation";
import {useMediaQuery} from "@/hooks/use-mobile";
import { Input, Space } from 'antd';

const { Search } = Input;

export default function Header({activeMenu , setActiveMenu} : {setActiveMenu?: any , activeMenu?: boolean}) {
  const dispatch = useDispatch()
  const { searchQuery } = useSelector((state: RootState) => state.filter)
  const [input, setInput] = useState(searchQuery)
  const { category, id } :any = useParams();


  const isMobileTitle = useMediaQuery("(max-width: 400px)")
  const isMobileDesc = useMediaQuery("(max-width: 700px)")


  const router = useRouter();

  const {activeMenuName} =  useSelector((state : RootState) => state.header)

  const handleSearch = useCallback(
    (value: string) => {
      setInput(value)
      dispatch(setSearchQuery(value))
    },
    [dispatch],
  )

  console.log(input)

  return (
    <header className="sticky top-0 z-40 bg-card border-b border-border shadow-lg">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between gap-6">
        {/* Logo */}

        <div className="flex items-center gap-2">
          {id || category ? <div onClick={() => router.back()} className={" cursor-pointer border-2  px-2 py-1 rounded-[7px] flex gap-1 items-center active:scale-95 "}>
            Ortga
          </div> : null}
          {!activeMenu ?  <Menu  className={"cursor-pointer"} size={30} onClick={() => setActiveMenu(!activeMenu)} /> :
              <X className={"cursor-pointer"} size={30} onClick={() => setActiveMenu(!activeMenu)} />}
          {!isMobileTitle && <div>
            <h1 className="text-[16px] font-bold">
              Dachniki
            </h1>
            {!isMobileDesc && <h2 className={"text-[12px] text-[grey] sm:block hidden max-w-[400px] truncate"}>{activeMenuName}</h2>}
          </div>}

        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-[350px] focus:w-[400px]">
          {/*<span>film nomini yozib bulgandan keyin </span>*/}
          <Search placeholder="Ism Familiya" onSearch={handleSearch} size={"large"} />



        </div>

        {/* Navigation */}
        {/*<nav className="flex items-center gap-4">*/}
        {/*  <button className="px-4 py-2 text-foreground hover:text-primary transition-colors">Home</button>*/}
        {/*  <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity">*/}
        {/*    Sign In*/}
        {/*  </button>*/}
        {/*</nav>*/}
      </div>
    </header>
  )
}
