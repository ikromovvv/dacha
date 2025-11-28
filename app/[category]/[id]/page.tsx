"use client"

import Header from "@/components/header"
import {useParams} from "next/navigation";
import {MovieDetail} from "@/app/[category]/[id]/movie-detail";



export default function ProfilePage() {


    const { id} = useParams()
    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Header */}
            {/*<Header />*/}

            {/* Main Content */}
                <MovieDetail id={id}/>
        </div>
    )
}
