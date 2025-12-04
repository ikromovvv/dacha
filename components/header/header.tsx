"use client"

import { useDispatch, useSelector } from "react-redux"
import { useState, useCallback } from "react"
import { setSearchQuery } from "@/store/slices/filterSlice"
import type { RootState } from "@/store/store"
import { Menu, X, Globe } from "lucide-react"
import { useMediaQuery } from "@/hooks/use-mobile"
import { Input } from "antd"
import { AuthorizationPage } from "@/components/authorization/authorizationPage"

const { Search } = Input

export default function Header({
                                   activeMenu,
                                   setActiveMenu,
                               }: {
    setActiveMenu?: any
    activeMenu?: boolean
}) {
    const dispatch = useDispatch()
    const { searchQuery } = useSelector((state: RootState) => state.filter)
    const [input, setInput] = useState(searchQuery)
    const [dropdown, setDropdown] = useState(false)
    const [langDropdown, setLangDropdown] = useState(false)
    const [active, setActive] = useState(false)
    const { activeMenuName } = useSelector((state: RootState) => state.header)
    const [language, setLanguage] = useState("UZ") // Default til

    const isMobileTitle = useMediaQuery("(max-width: 400px)")
    const isMobileDesc = useMediaQuery("(max-width: 700px)")

    const handleSearch = useCallback(
        (value: string) => {
            setInput(value)
            dispatch(setSearchQuery(value))
        },
        [dispatch]
    )

    const changeLanguage = (lang: string) => {
        setLanguage(lang)
        setLangDropdown(false)
    }

    return (
        <header className="sticky top-0 z-40 bg-card border-b border-border shadow-lg">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between gap-6">

                {/* LEFT SIDE — MENU + LOGO */}
                <div className="flex items-center gap-2">
                    {/*{!activeMenu ? (*/}
                    {/*    <Menu*/}
                    {/*        className="cursor-pointer"*/}
                    {/*        size={30}*/}
                    {/*        onClick={() => setActiveMenu(!activeMenu)}*/}
                    {/*    />*/}
                    {/*) : (*/}
                    {/*    <X*/}
                    {/*        className="cursor-pointer"*/}
                    {/*        size={30}*/}
                    {/*        onClick={() => setActiveMenu(!activeMenu)}*/}
                    {/*    />*/}
                    {/*)}*/}

                    <div>
                        <h1 className="text-[16px] font-bold">Dachniki</h1>
                        {!isMobileDesc && (
                            <h2 className="text-[12px] text-[grey] sm:block hidden max-w-[400px] truncate">
                                {activeMenuName}
                            </h2>
                        )}
                    </div>
                </div>

                <button onClick={() => setActive(true)}>Kirish</button>

                {/* RIGHT SIDE — USER + LANG */}
                {/*<div className="flex items-center gap-[15px]">*/}
                {/*    /!* User avatar + name (hidden on mobile) *!/*/}
                {/*    <div className="relative">*/}
                {/*        <div*/}
                {/*            onClick={() => setDropdown(!dropdown)}*/}
                {/*            className="flex items-center gap-[5px] cursor-pointer"*/}
                {/*        >*/}
                {/*            <button className="w-[40px] h-[40px] rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center">*/}
                {/*                <img*/}
                {/*                    src="https://i.pravatar.cc/100"*/}
                {/*                    alt="avatar"*/}
                {/*                    className="w-[35px] h-[35px] rounded-full object-cover"*/}
                {/*                />*/}
                {/*            </button>*/}
                {/*            /!* Mobil ekranda ism/familiya yashiriladi *!/*/}
                {/*            {!isMobileTitle && <div>Sardor Ikromov</div>}*/}
                {/*        </div>*/}

                {/*        {dropdown && (*/}
                {/*            <div className="absolute right-0 mt-2 w-[170px] bg-card border border-border rounded-xl shadow-lg z-50 overflow-hidden">*/}
                {/*                <button className="w-full text-left px-4 py-2 hover:bg-muted transition">*/}
                {/*                    Profil*/}
                {/*                </button>*/}
                {/*                <button className="w-full text-left px-4 py-2 hover:bg-muted transition">*/}
                {/*                    Sozlamalar*/}
                {/*                </button>*/}
                {/*                <button className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 transition">*/}
                {/*                    Chiqish*/}
                {/*                </button>*/}
                {/*            </div>*/}
                {/*        )}*/}
                {/*    </div>*/}

                {/*    /!* Language selector *!/*/}
                {/*    <div className="relative">*/}
                {/*        <button*/}
                {/*            onClick={() => setLangDropdown(!langDropdown)}*/}
                {/*            className="w-[40px] h-[40px] rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center"*/}
                {/*        >*/}
                {/*            <Globe size={20} />*/}
                {/*        </button>*/}

                {/*        {langDropdown && (*/}
                {/*            <div className="absolute right-0 mt-2 w-[120px] bg-card border border-border rounded-xl shadow-lg z-50 overflow-hidden">*/}
                {/*                <button*/}
                {/*                    onClick={() => changeLanguage("UZ")}*/}
                {/*                    className={`w-full text-left px-4 py-2 hover:bg-muted transition ${*/}
                {/*                        language === "UZ" ? "font-bold" : ""*/}
                {/*                    }`}*/}
                {/*                >*/}
                {/*                    Uzbek*/}
                {/*                </button>*/}
                {/*                <button*/}
                {/*                    onClick={() => changeLanguage("RU")}*/}
                {/*                    className={`w-full text-left px-4 py-2 hover:bg-muted transition ${*/}
                {/*                        language === "RU" ? "font-bold" : ""*/}
                {/*                    }`}*/}
                {/*                >*/}
                {/*                    Russian*/}
                {/*                </button>*/}
                {/*                <button*/}
                {/*                    onClick={() => changeLanguage("EN")}*/}
                {/*                    className={`w-full text-left px-4 py-2 hover:bg-muted transition ${*/}
                {/*                        language === "EN" ? "font-bold" : ""*/}
                {/*                    }`}*/}
                {/*                >*/}
                {/*                    ENGLISH*/}
                {/*                </button>*/}
                {/*            </div>*/}
                {/*        )}*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>

            <AuthorizationPage active={active} setActive={setActive} />
        </header>
    )
}
