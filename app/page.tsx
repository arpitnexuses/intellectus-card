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
              <Card className="bg-[#0C4562]/90 border-2 border-slate-400/80 p-4 hover:bg-[#0C4562] hover:border-slate-300 hover:scale-95 transition-all duration-300">
                <div className="mb-2">
                  <div className="w-16 h-16 bg-[#0C4562]/60 rounded-lg flex items-center justify-center">
                    <Shield className="w-10 h-10 text-slate-300" />
                  </div>
                </div>

                <h1
                  className="text-3xl font-bold text-white mb-0 text-left"
                  style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)", lineHeight: "1.0" }}
                >
                  For Vision-Led and Early Stage Companies
                </h1>
                <p
                  className="text-slate-300 mb-2 text-base border-b border-white pb-2 text-left -mt-3"
                  style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)", lineHeight: "1.0" }}
                >
                  Aligned with your vision
                </p>

                <div className="space-y-3 mb-4 mt-4">
                  <div className="p-2 bg-[#0C4562]/40 rounded-lg border border-white/30" style={{ boxShadow: "0 4px 12px rgba(0, 0, 0, 0.6), 0 8px 24px rgba(0, 0, 0, 0.4), 0 12px 36px rgba(0, 0, 0, 0.2)" }}>
                    <p
                      className="text-slate-200 leading-relaxed italic text-sm text-center"
                      style={{ textShadow: "0 0 6px rgba(0, 0, 0, 0.8), 0 0 12px rgba(0, 0, 0, 0.6), 0 0 18px rgba(0, 0, 0, 0.4), 1px 1px 3px rgba(0, 0, 0, 0.9)" }}
                    >
                      Aligned with Growth: Structured around achievable milestones, sharing in your success.
                    </p>
                  </div>

                  <div className="p-2 bg-[#0C4562]/40 rounded-lg border border-white/30" style={{ boxShadow: "0 4px 12px rgba(0, 0, 0, 0.6), 0 8px 24px rgba(0, 0, 0, 0.4), 0 12px 36px rgba(0, 0, 0, 0.2)" }}>
                    <p
                      className="text-slate-200 leading-relaxed italic text-sm text-center"
                      style={{ textShadow: "0 0 6px rgba(0, 0, 0, 0.8), 0 0 12px rgba(0, 0, 0, 0.6), 0 0 18px rgba(0, 0, 0, 0.4), 1px 1px 3px rgba(0, 0, 0, 0.9)" }}
                    >
                      Essential Support Only: Minimal operating overhead, while still having access to strategic
                      guidance.
                    </p>
                  </div>
                </div>

                <div className="flex justify-start">
                  <Button
                    className="bg-[#0D81B5] hover:bg-[#0D81B5]/80 text-white px-4 py-1.5 rounded-lg font-medium transition-colors w-fit text-sm"
                    onClick={() => window.open("https://intellectuscapital.com.au/contact-us/", "_blank")}
                  >
                    Discover more
                  </Button>
                </div>
              </Card>
            </div>

            {/* Established Businesses Card */}
            <div className="w-3/5 px-2">
              <Card className="bg-[#0C4562]/90 border-2 border-slate-400/80 p-4 hover:bg-[#0C4562] hover:border-slate-300 hover:scale-95 transition-all duration-300">
                <div className="mb-1">
                  <div className="w-16 h-16 bg-[#0C4562]/60 rounded-lg flex items-center justify-center">
                    <Shield className="w-10 h-10 text-slate-300" />
                  </div>
                </div>

                <h1
                  className="text-3xl font-bold text-white mb-0 text-left"
                  style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)", lineHeight: "1.0" }}
                >
                  For Established Businesses & Financial Sponsors
                </h1>
                <p
                  className="text-slate-300 mb-2 text-base border-b border-white pb-2 text-left -mt-3"
                  style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)", lineHeight: "1.0" }}
                >
                  Structured. Transparent. Results-driven
                </p>

                <div className="space-y-3 mb-4 mt-4">
                  <div className="p-2 bg-[#0C4562]/40 rounded-lg border border-white/30" style={{ boxShadow: "0 4px 12px rgba(0, 0, 0, 0.6), 0 8px 24px rgba(0, 0, 0, 0.4), 0 12px 36px rgba(0, 0, 0, 0.2)" }}>
                    <p
                      className="text-slate-200 leading-relaxed italic text-sm text-center"
                      style={{ textShadow: "0 0 6px rgba(0, 0, 0, 0.8), 0 0 12px rgba(0, 0, 0, 0.6), 0 0 18px rgba(0, 0, 0, 0.4), 1px 1px 3px rgba(0, 0, 0, 0.9)" }}
                    >
                      Performance-Based Fees: Fees structured around milestones to align success with cost efficiency.
                    </p>
                  </div>

                  <div className="p-2 bg-[#0C4562]/40 rounded-lg border border-white/30" style={{ boxShadow: "0 4px 12px rgba(0, 0, 0, 0.6), 0 8px 24px rgba(0, 0, 0, 0.4), 0 12px 36px rgba(0, 0, 0, 0.2)" }}>
                    <p
                      className="text-slate-200 leading-relaxed italic text-sm text-center"
                      style={{ textShadow: "0 0 6px rgba(0, 0, 0, 0.8), 0 0 12px rgba(0, 0, 0, 0.6), 0 0 18px rgba(0, 0, 0, 0.4), 1px 1px 3px rgba(0, 0, 0, 0.9)" }}
                    >
                      Flexible Engagement: Tailored success structures that align with your objectives and timelines.
                    </p>
                  </div>
                </div>

                <div className="flex justify-start">
                  <Button
                    className="bg-[#0D81B5] hover:bg-[#0D81B5]/80 text-white px-4 py-1.5 rounded-lg font-medium transition-colors w-fit text-sm"
                    onClick={() => window.open("https://intellectuscapital.com.au/contact-us/", "_blank")}
                  >
                    Discover more
                  </Button>
                </div>
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
