"use client"

import { Modal , Select } from "antd"
import { useState } from "react"
import { User, Briefcase } from "lucide-react"

export default function RegisterModal({ open, setOpen }: any) {
    const [selected, setSelected] = useState<string | null>(null)
    const [formOpen, setFormOpen] = useState(false)

    const handleContinue = () => {
        if (!selected) return
        setFormOpen(true)   // keyingi modal ochiladi
    }

    return (
        <>
            <Modal
                open={open}
                onCancel={() => setOpen(false)}
                footer={null}
                centered
            >
                <h2 className="text-xl font-bold mb-4">Ro‘yxatdan o‘tish</h2>
                <p className="text-gray-500 mb-5">Kim sifatida ro‘yxatdan o'tmoqchisiz?</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    {/* Employee */}
                    <div
                        onClick={() => setSelected("employee")}
                        className={`cursor-pointer border rounded-xl p-4 flex flex-col items-center gap-3 hover:border-primary transition 
                        ${selected === "employee" && "border-primary shadow-md"}`}
                    >
                        <User size={32} />
                        <h3 className="font-semibold text-lg">Ishchi</h3>
                        <p className="text-sm text-gray-500 text-center">
                            Ishga kirish uchun ariza topshirish
                        </p>
                    </div>

                    {/* Employer */}
                    <div
                        onClick={() => setSelected("employer")}
                        className={`cursor-pointer border rounded-xl p-4 flex flex-col items-center gap-3 hover:border-primary transition 
                        ${selected === "employer" && "border-primary shadow-md"}`}
                    >
                        <Briefcase size={32} />
                        <h3 className="font-semibold text-lg">Ish beruvchi</h3>
                        <p className="text-sm text-gray-500 text-center">
                            Xodimlarni boshqarish uchun kirish
                        </p>
                    </div>

                </div>

                <button
                    onClick={handleContinue}
                    disabled={!selected}
                    className={`mt-6 w-full h-[42px] font-semibold rounded-lg text-white transition ${
                        selected
                            ? "bg-primary hover:bg-primary/90"
                            : "bg-gray-400 cursor-not-allowed"
                    }`}
                >
                    Davom etish
                </button>
            </Modal>

            {/* Keyingi modal */}
            <RegisterFormModal
                open={formOpen}
                setOpen={setFormOpen}
                role={selected}
            />
        </>
    )
}
function RegisterFormModal({ open, setOpen, role }: any) {
    const [fullname, setFullname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [specialty, setSpecialty] = useState<string | null>(null)

    const specialties = [
        { value: "ofitsant", label: "Ofitsiant" },
        { value: "oshpaz", label: "Oshpaz" },
        { value: "taksi", label: "Taksi haydovchi" },
        { value: "kuryer", label: "Kuryer" },
    ]

    const onClick = () => {
        setOpen(false)
        setFullname("")
        setEmail("")
        setPassword("")
        setSpecialty("")
        console.log(fullname , email , password , specialty , role)
    }
    return (
        <Modal
            open={open}
            onCancel={() => setOpen(false)}
            footer={null}
            centered
        >
            <h2 className="text-xl font-bold mb-4">
                {role === "employee"
                    ? "Ishchi uchun ro‘yxatdan o‘tish"
                    : "Ish beruvchi uchun ro‘yxatdan o‘tish"}
            </h2>

            <div className="flex flex-col gap-3">

                <input
                    className="border rounded-lg px-3 h-[40px]"
                    placeholder="To‘liq ism"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                />

                <input
                    className="border rounded-lg px-3 h-[40px]"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    className="border rounded-lg px-3 h-[40px]"
                    placeholder="Parol"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                {/* Mutaxassislik faqat employee */}
                {role === "employee" && (
                    <Select
                        placeholder="Mutaxassislikni tanlang"
                        options={specialties}
                        onChange={(value) => setSpecialty(value)}
                        className="w-full"
                        size="large"
                    />
                )}

                <button onClick={onClick} className="mt-3 bg-primary text-white h-[42px] rounded-lg hover:bg-primary/90">
                    Ro‘yxatdan o‘tish
                </button>
            </div>
        </Modal>
    )
}