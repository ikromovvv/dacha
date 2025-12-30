"use client"

import { Calendar, Clock, Star, User, Phone, Mail } from "lucide-react"
import { Employee } from "@/store/slices/employeesSlice"
import {useRouter} from "next/navigation";
import { Image } from 'antd'
export default function EmployeeInfo({ emp }: any) {

  const router = useRouter();

  return (
      <div className="container mx-auto ">

        <div onClick={() => router.back()} className={"w-fit cursor-pointer border-2 mb-[15px] px-2 py-1 rounded-[7px] flex gap-1 items-center active:scale-95 "}>
          Ortga
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Photo */}
          <div className="md:col-span-1">
             {/*@ts-ignore*/}
            <Image.PreviewGroup items={emp?.photos?.map(photo => photo.image)}>

            <Image
                  alt="webp image"
                  width={"100%"}
                  src={emp?.photos[0]?.image}
              />
            </Image.PreviewGroup>
          </div>

          {/* Right Column - Details */}
          <div className="md:col-span-2 space-y-5">
            {/* Name and Role */}
            <div>
              <h1 className="text-3xl font-bold mb-1">{emp?.first_name} {emp?.last_name}</h1>
              <p className="text-accent font-semibold text-[18px]">{emp?.role?.display_name}</p>
            </div>

            {/* Experience, Rating, Shift */}
            {/*<div className="flex flex-wrap gap-6 text-lg">*/}
            {/*  <div className="flex items-center gap-2">*/}
            {/*    <Star size={20} className="text-yellow-400" />*/}
            {/*    <span className="font-semibold">{emp.rating}/10</span>*/}
            {/*  </div>*/}
            {/*  <div className="flex items-center gap-2">*/}
            {/*    <Calendar size={20} className="text-primary" />*/}
            {/*    <span className="font-semibold">{emp.email} email</span>*/}
            {/*  </div>*/}
            {/*  <div className="flex items-center gap-2">*/}
            {/*    <Clock size={20} className="text-primary" />*/}
            {/*    <span className="font-semibold">{emp.address}</span>*/}
            {/*  </div>*/}
            {/*</div>*/}

            {/* Description */}

            <div>
              <h3 className="text-[18px] font-bold mb-2 flex items-center gap-2">
                <Phone size={20} />
                Telefon
              </h3>
              <a href={`tel:${emp.phone_number}`} className="text-lg">{emp?.phone_number}</a>
            </div>

            <div>
              <h2 className="text-[18px] font-bold mb-3">Role</h2>
              <p className="text-[16px] text-muted-foreground leading-relaxed">{emp?.role?.display_name}</p>
            </div>


            {/*<div>*/}
            {/*  <h2 className="text-[18px] font-bold">Status</h2>*/}
            {/*  <p className="text-[16px] text-muted-foreground leading-relaxed">{emp.status ? "online" : "offline"}</p>*/}
            {/*</div>*/}

            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-[18px] font-bold mb-2 flex items-center gap-2">
                  <Mail size={20} />
                  Email
                </h3>
                <p className="text-lg">{emp?.email}</p>
              </div>
              {/*<div>*/}
              {/*  <h3 className="text-[18px] font-bold mb-2 flex items-center gap-2">*/}
              {/*    <Phone size={20} />*/}
              {/*    Telefon*/}
              {/*  </h3>*/}
              {/*  <a href={`tel:${emp.phone_number}`} className="text-lg">{emp?.phone_number}</a>*/}
              {/*</div>*/}
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
