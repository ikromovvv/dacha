"use client"

import { useSelector } from "react-redux"
import type { RootState } from "@/store/store"
import MoviePlayer from "@/components/movie-player"
import MovieInfo from "@/components/movie-info"
import { ArrowLeft } from "lucide-react"
import MovieGrid from "@/components/movie-grid";

export const MovieDetail = ({id} : any) => {

    const { employees } = useSelector((state: RootState) => state.employees);

    const emp = employees.find((e) => e.id === String(id));

    if (!emp) {
        return (
            <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-3xl font-bold mb-4">Movie not found</h1>
                    <button
                        // onClick={() => navigate("/")}
                        className="inline-flex items-center gap-2 px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
                    >
                        <ArrowLeft size={20} />
                        Back to Home
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-background text-foreground">
            <MovieInfo emp={emp} />

            {/*<div className="sm:w-[80%] w-[90%] mx-auto mb-12">*/}
            {/*    <MoviePlayer videoUrl={movie.videoUrl} title={movie.title} />*/}
            {/*</div>*/}

            <div className="container mx-auto sm:px-4 px-1 sm:py-8 py-4">
                <h2 className="text-2xl font-bold mb-4">Boshqalar : </h2>
                <MovieGrid  />
            </div>
        </div>
    )
}
