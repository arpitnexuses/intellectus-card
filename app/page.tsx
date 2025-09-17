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
              <Card className="bg-[#0C4562]/90 border border-white/20 p-4 hover:bg-[#0C4562] hover:scale-95 transition-all duration-300" style={{ boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3), 0 4px 16px rgba(0, 0, 0, 0.2), 0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)" }}>
                <div className="mb-2">
                  <div className="w-16 h-16 bg-[#0C4562]/60 rounded-full flex items-center justify-center" style={{ boxShadow: "0 0 8px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)" }}>
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
                  <div className="p-2 bg-[#0C4562]/40 rounded-lg" style={{ boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4), 0 8px 24px rgba(0, 0, 0, 0.2), 0 12px 36px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.15), inset 0 -1px 0 rgba(0, 0, 0, 0.2), inset 1px 0 0 rgba(255, 255, 255, 0.08), inset -1px 0 0 rgba(0, 0, 0, 0.1), 0 0 8px rgba(255, 255, 255, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.2)" }}>
                      <p
                        className="text-slate-200 leading-relaxed text-sm text-center"
                        style={{ textShadow: "0 1px 2px rgba(0, 0, 0, 0.4)" }}
                      >
                        <span className="italic">Aligned with Growth:</span> Structured around achievable milestones, sharing in your success.
                      </p>
                  </div>

                  <div className="p-2 bg-[#0C4562]/40 rounded-lg" style={{ boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4), 0 8px 24px rgba(0, 0, 0, 0.2), 0 12px 36px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.15), inset 0 -1px 0 rgba(0, 0, 0, 0.2), inset 1px 0 0 rgba(255, 255, 255, 0.08), inset -1px 0 0 rgba(0, 0, 0, 0.1), 0 0 8px rgba(255, 255, 255, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.2)" }}>
                      <p
                        className="text-slate-200 leading-relaxed text-sm text-center"
                        style={{ textShadow: "0 1px 2px rgba(0, 0, 0, 0.4)" }}
                      >
                        <span className="italic">Essential Support Only:</span> Minimal operating overhead, while still having access to strategic
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
              <Card className="bg-[#0C4562]/90 border border-white/20 p-4 hover:bg-[#0C4562] hover:scale-95 transition-all duration-300" style={{ boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3), 0 4px 16px rgba(0, 0, 0, 0.2), 0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)" }}>
                <div className="mb-1">
                  <div className="w-16 h-16 bg-[#0C4562]/60 rounded-full flex items-center justify-center" style={{ boxShadow: "0 0 8px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)" }}>
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
                  <div className="p-2 bg-[#0C4562]/40 rounded-lg" style={{ boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4), 0 8px 24px rgba(0, 0, 0, 0.2), 0 12px 36px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.15), inset 0 -1px 0 rgba(0, 0, 0, 0.2), inset 1px 0 0 rgba(255, 255, 255, 0.08), inset -1px 0 0 rgba(0, 0, 0, 0.1), 0 0 8px rgba(255, 255, 255, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.2)" }}>
                      <p
                        className="text-slate-200 leading-relaxed text-sm text-center"
                        style={{ textShadow: "0 1px 2px rgba(0, 0, 0, 0.4)" }}
                      >
                        <span className="italic">Performance-Based Fees:</span> Fees structured around milestones to align success with cost efficiency.
                      </p>
                  </div>

                  <div className="p-2 bg-[#0C4562]/40 rounded-lg" style={{ boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4), 0 8px 24px rgba(0, 0, 0, 0.2), 0 12px 36px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.15), inset 0 -1px 0 rgba(0, 0, 0, 0.2), inset 1px 0 0 rgba(255, 255, 255, 0.08), inset -1px 0 0 rgba(0, 0, 0, 0.1), 0 0 8px rgba(255, 255, 255, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.2)" }}>
                      <p
                        className="text-slate-200 leading-relaxed text-sm text-center"
                        style={{ textShadow: "0 1px 2px rgba(0, 0, 0, 0.4)" }}
                      >
                        <span className="italic">Flexible Engagement:</span> Tailored success structures that align with your objectives and timelines.
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

        {/* Pagination Component */}
        <div className="flex items-center justify-start mt-8 space-x-2">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="w-0 h-0 border-l-0 border-r-[8px] border-t-[6px] border-b-[6px] border-r-[#0D81B5] border-t-transparent border-b-transparent hover:border-r-[#0D81B5]/80 transition-colors"
          />

          {/* Pagination Dots */}
          <div className="flex items-center space-x-2">
            {[0, 1].map((index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all duration-300 ${
                  currentSlide === index 
                    ? "w-6 h-2 bg-gray-800 rounded-full" 
                    : "w-2 h-2 bg-gray-300 rounded-full hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="w-0 h-0 border-l-[8px] border-r-0 border-t-[6px] border-b-[6px] border-l-[#0D81B5] border-t-transparent border-b-transparent hover:border-l-[#0D81B5]/80 transition-colors"
          />
        </div>
      </div>
    </main>
  )
}
