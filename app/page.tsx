"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Shield, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 2)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 2) % 2)
  }

  return (
    <main className="container mx-auto px-6 py-10 mt-5">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1
          className="text-4xl md:text-5xl font-bold text-white mb-3 text-balance"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
        >
          What Makes Us Different (vs. Traditional Models)
        </h1>
        <p
          className="text-xl text-slate-200 max-w-4xl mx-auto text-pretty"
          style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}
        >
          Our approach is built on fairness and alignment. We structure engagements so that you invest in outcomes, not
          overheads.
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Arrow Navigation */}
        <button
          onClick={prevSlide}
          className="fixed left-4 top-1/2 -translate-y-1/2 z-10 bg-[#0D81B5] hover:bg-[#0D81B5]/80 text-white p-3 rounded-full transition-colors shadow-lg"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="fixed right-4 top-1/2 -translate-y-1/2 z-10 bg-[#0D81B5] hover:bg-[#0D81B5]/80 text-white p-3 rounded-full transition-colors shadow-lg"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Cards Container */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * 40}%)`,
              width: "160%",
            }}
          >
            {/* Vision-Led Companies Card */}
            <div className="w-3/5 px-2">
              <Card className="bg-[#0C4562]/90 border-2 border-slate-400/80 shadow-2xl shadow-black/50 p-4 hover:bg-[#0C4562] hover:shadow-3xl hover:shadow-black/60 hover:border-slate-300 transition-all duration-300" style={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.1)" }}>
                <div className="mb-1">
                  <div className="w-16 h-16 bg-[#0C4562]/60 rounded-lg flex items-center justify-center">
                    <Shield className="w-10 h-10 text-slate-300" />
                  </div>
                </div>

                <h2
                  className="text-xl font-bold text-white mb-0.5"
                  style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}
                >
                  For Vision-Led and Early Stage Companies
                </h2>
                <p
                  className="text-slate-300 mb-2 text-base border-b border-white pb-2"
                  style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}
                >
                  Aligned with your vision
                </p>

                <div className="space-y-3 mb-4 mt-4">
                  <div className="p-2 bg-[#0C4562]/40 rounded-lg border border-white/30 shadow-lg shadow-black/30" style={{ boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)" }}>
                    <p
                      className="text-slate-200 leading-relaxed italic text-sm"
                      style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}
                    >
                      Aligned with Growth: Structured around achievable milestones, sharing in your success.
                    </p>
                  </div>

                  <div className="p-2 bg-[#0C4562]/40 rounded-lg border border-white/30 shadow-lg shadow-black/30" style={{ boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)" }}>
                    <p
                      className="text-slate-200 leading-relaxed italic text-sm"
                      style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}
                    >
                      Essential Support Only: Minimal operating overhead, while still having access to strategic
                      guidance.
                    </p>
                  </div>
                </div>

                <Button
                  className="bg-[#0D81B5] hover:bg-[#0D81B5]/80 text-white px-4 py-1.5 rounded-lg font-medium transition-colors w-fit text-sm"
                  onClick={() => window.open("https://intellectuscapital.com.au/contact-us/", "_blank")}
                >
                  Discover more
                </Button>
              </Card>
            </div>

            {/* Established Businesses Card */}
            <div className="w-3/5 px-2">
              <Card className="bg-[#0C4562]/90 border-2 border-slate-400/80 shadow-2xl shadow-black/50 p-4 hover:bg-[#0C4562] hover:shadow-3xl hover:shadow-black/60 hover:border-slate-300 transition-all duration-300" style={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.1)" }}>
                <div className="mb-1">
                  <div className="w-16 h-16 bg-[#0C4562]/60 rounded-lg flex items-center justify-center">
                    <Shield className="w-10 h-10 text-slate-300" />
                  </div>
                </div>

                <h2
                  className="text-xl font-bold text-white mb-0.5"
                  style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}
                >
                  For Established Businesses & Financial Sponsors
                </h2>
                <p
                  className="text-slate-300 mb-2 text-base border-b border-white pb-2"
                  style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}
                >
                  Structured. Transparent. Results-driven
                </p>

                <div className="space-y-3 mb-4 mt-4">
                  <div className="p-2 bg-[#0C4562]/40 rounded-lg border border-white/30 shadow-lg shadow-black/30" style={{ boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)" }}>
                    <p
                      className="text-slate-200 leading-relaxed italic text-sm"
                      style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}
                    >
                      Performance-Based Fees: Fees structured around milestones to align success with cost efficiency.
                    </p>
                  </div>

                  <div className="p-2 bg-[#0C4562]/40 rounded-lg border border-white/30 shadow-lg shadow-black/30" style={{ boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)" }}>
                    <p
                      className="text-slate-200 leading-relaxed italic text-sm"
                      style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}
                    >
                      Flexible Engagement: Tailored success structures that align with your objectives and timelines.
                    </p>
                  </div>
                </div>

                <Button
                  className="bg-[#0D81B5] hover:bg-[#0D81B5]/80 text-white px-4 py-1.5 rounded-lg font-medium transition-colors w-fit text-sm"
                  onClick={() => window.open("https://intellectuscapital.com.au/contact-us/", "_blank")}
                >
                  Discover more
                </Button>
              </Card>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          {[0, 1].map((index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentSlide === index ? "bg-[#0D81B5]" : "bg-slate-400"
              }`}
            />
          ))}
        </div>
      </div>
    </main>
  )
}
