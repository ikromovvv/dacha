"use client"

import { useDispatch, useSelector } from "react-redux"
import { useState, useCallback } from "react"
import { setSearchQuery } from "@/store/slices/filterSlice"
import type { RootState } from "@/store/store"
import { Menu, X, Globe } from "lucide-react"
import { useMediaQuery } from "@/hooks/use-mobile"
import { Input } from "antd"
import { AuthorizationPage } from "@/components/authorization/authorizationPage"
import { Modal } from "antd";

import {
    EnvironmentOutlined,
    PhoneOutlined,
    MailOutlined,
    ClockCircleOutlined
} from "@ant-design/icons";
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
    const [open, setOpen] = useState(false);
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
                        <h1 className="text-[16px] font-bold">XIZMATLAR</h1>
                        {!isMobileDesc && (
                            <h2 className="text-[12px] text-[grey] sm:block hidden max-w-[400px] truncate">
                                {activeMenuName}
                            </h2>
                        )}
                    </div>
                </div>


                {/* RIGHT SIDE — USER + LANG */}
                <div className="flex items-center gap-[15px]">
                    {/*<button onClick={() => setActive(true)}>Kirish</button>*/}

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
                {/*                    English*/}
                {/*                </button>*/}
                {/*            </div>*/}
                {/*        )}*/}
                {/*    </div>*/}
                    <div onClick={() => setOpen(true)} className={"cursor-pointer"}>
                        Bog'lanish
                    </div>
                    <Modal
                        open={open}
                        onCancel={() => setOpen(false)}
                        footer={null}
                        centered
                        width={900}
                        className="contact-modal"
                    >
                        <div className="text-center mb-6">
                            <h2 className="text-2xl font-bold">Biz bilan bog‘laning</h2>
                            <p className="text-gray-500 mt-1">
                                Sizga qulay usulni tanlang
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {/* Ofis */}
                            <InfoCard
                                icon={<EnvironmentOutlined />}
                                title="Ofis manzili"
                                text={[
                                    "Tashkent viloyati, Bostanliq tumani",
                                    "Xujakent ",
                                ]}
                            />

                            {/* Telefon */}
                            <InfoCard
                                icon={<PhoneOutlined />}
                                title="Telefon"
                                text={[
                                    "+998 95 104 04 04",
                                    "+998 99 990 68 05"
                                ]}
                            />

                            {/* Bog'lanish */}
                            <InfoCard
                                icon={<MailOutlined />}
                                title="Biz bilan bog‘lanish"
                                text={[
                                    "Telegram: @shobdikarimov",
                                ]}
                                highlight
                            />

                            {/* Ish vaqti */}
                            <InfoCard
                                icon={<ClockCircleOutlined />}
                                title="Ish vaqti"
                                text={["Har kuni: 24/7"]}
                            />
                        </div>
                    </Modal>
                </div>
            </div>

            <AuthorizationPage active={active} setActive={setActive} />
        </header>
    )
}
const InfoCard = ({
                      icon,
                      title,
                      text,
                      highlight = false
                  }: {
    icon: React.ReactNode;
    title: string;
    text: string[];
    highlight?: boolean;
}) => (
    <div className="flex gap-4 p-5 rounded-xl border bg-white shadow-sm hover:shadow-md transition">
        <div
            className={`
                w-12 h-12 flex items-center justify-center rounded-lg
                ${highlight ? "bg-orange-100 text-orange-500" : "bg-orange-50 text-orange-400"}
                text-xl
            `}
        >
            {icon}
        </div>

        <div>
            <h3 className="font-semibold mb-1">{title}</h3>
            {text.map((item, i) => (
                <p
                    key={i}
                    className={`text-sm ${highlight ? "text-orange-500" : "text-gray-600"}`}
                >
                    {item}
                </p>
            ))}
        </div>
    </div>
);