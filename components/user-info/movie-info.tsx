"use client"

import { Calendar, Clock, Star, User, Phone, Mail } from "lucide-react"
import { Employee } from "@/store/slices/employeesSlice"
import {useRouter} from "next/navigation";

export default function EmployeeInfo({ emp }: { emp: Employee }) {

  const router = useRouter();

  return (
      <div className="container mx-auto ">

        {/*<div onClick={() => router.back()} className={"w-fit cursor-pointer border-2 mb-[15px] px-2 py-1 rounded-[7px] flex gap-1 items-center active:scale-95 "}>*/}
        {/*  Ortga*/}
        {/*</div>*/}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Photo */}
          <div className="md:col-span-1">
            <img
                src={emp.photo || "/placeholder.svg"}
                alt={`${emp.firstName} ${emp.lastName}`}
                className="w-full rounded-lg shadow-2xl"
            />
          </div>

          {/* Right Column - Details */}
          <div className="md:col-span-2 space-y-5">
            {/* Name and Role */}
            <div>
              <h1 className="text-3xl font-bold mb-1">{emp.firstName} {emp.lastName}</h1>
              <p className="text-accent font-semibold text-[18px]">{emp.role}</p>
            </div>

            {/* Experience, Rating, Shift */}
            <div className="flex flex-wrap gap-6 text-lg">
              <div className="flex items-center gap-2">
                <Star size={20} className="text-yellow-400" />
                <span className="font-semibold">{emp.rating}/10</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={20} className="text-primary" />
                <span className="font-semibold">{emp.experience} yil tajriba</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={20} className="text-primary" />
                <span className="font-semibold">{emp.shift}</span>
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-[18px] font-bold mb-3">Ta’rif</h2>
              <p className="text-[16px] text-muted-foreground leading-relaxed">{emp.description}</p>
            </div>
            <div>
              <h2 className="text-[18px] font-bold">Status</h2>
              <p className="text-[16px] text-muted-foreground leading-relaxed">{emp.status ? "online" : "offline"}</p>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-[18px] font-bold mb-2 flex items-center gap-2">
                  <Mail size={20} />
                  Email
                </h3>
                <p className="text-lg">{emp.email}</p>
              </div>
              <div>
                <h3 className="text-[18px] font-bold mb-2 flex items-center gap-2">
                  <Phone size={20} />
                  Telefon
                </h3>
                <p className="text-lg">{emp.phone}</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-5">
              <button className="w-[150px] h-[40px] text-[14px] bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 active:scale-95 transition-all">
                Kontaktga yozish
              </button>

            </div>
          </div>
        </div>
      </div>
  )
}
