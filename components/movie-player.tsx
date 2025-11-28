"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react"

export default function MoviePlayer({ videoUrl, title }: { videoUrl: string; title: string }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(1)
  const [isMuted, setIsMuted] = useState(true) // mobile autoplay uchun boshlanish muted
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = isMuted ? 0 : volume
    }
  }, [isMuted, volume])

  const togglePlay = () => {
    if (!videoRef.current) return

    if (isPlaying) {
      videoRef.current.pause()
    } else {
      videoRef.current.play().catch(() => videoRef.current?.play())
    }
    setIsPlaying(!isPlaying)
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number(e.target.value)
    setVolume(newVolume)
    setIsMuted(newVolume === 0)

    if (videoRef.current) {
      videoRef.current.volume = newVolume
    }
  }

  const toggleMute = () => {
    if (!videoRef.current) return

    if (isMuted) {
      videoRef.current.volume = volume
      setIsMuted(false)
    } else {
      videoRef.current.volume = 0
      setIsMuted(true)
    }
  }

  const toggleFullscreen = () => {
    const video = videoRef.current
    if (!video) return

    if (video.requestFullscreen) video.requestFullscreen()
        // iPhone Safari fullscreen fix
    // @ts-ignore
    else if (video.webkitEnterFullscreen) video.webkitEnterFullscreen()
  }

  return (
      <div className="relative w-full bg-black aspect-video group sm:p-[5px]">
        <video
            ref={videoRef}
            src={videoUrl}
            className="w-full h-full"
            onClick={togglePlay}
            onEnded={() => setIsPlaying(false)}
            playsInline
            webkit-playsinline="true"
            muted
            controls={false}
        />

        {/* CONTROLS */}
        <div
            className="
          absolute bottom-0 left-0 right-0
          bg-gradient-to-t from-black/80 to-transparent
          sm:p-4 p-2
          opacity-100              /* mobile doim ko‘rinadi */
          sm:opacity-0             /* desktop hover */
          sm:group-hover:opacity-100
          transition-opacity duration-300
        "
        >
          <div className="flex items-center gap-3">

            {/* Play / Pause */}
            <button onClick={togglePlay} className="sm:p-2 p-1 rounded hover:bg-white/20 transition-colors">
              {isPlaying ? <Pause size={24} className="text-white" /> : <Play size={24} className="text-white" />}
            </button>

            {/* Volume */}
            <div className="flex items-center gap-2">
              <button onClick={toggleMute} className="sm:p-2 p-1 rounded hover:bg-white/20 transition-colors">
                {isMuted ? <VolumeX size={20} className="text-white" /> : <Volume2 size={20} className="text-white" />}
              </button>

              <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="w-24 h-1 bg-white/30 rounded cursor-pointer"
              />
            </div>

            {/* Fullscreen */}
            <button onClick={toggleFullscreen} className="ml-auto sm:p-2 p-1 rounded hover:bg-white/20 transition-colors">
              <Maximize size={20} className="text-white" />
            </button>
          </div>
        </div>
      </div>
  )
}
