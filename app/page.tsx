"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Shield, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useRef, useEffect } from "react"

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const [mouseStart, setMouseStart] = useState<number | null>(null)
  const [isMouseDown, setIsMouseDown] = useState(false)
  const [lastNavigationTime, setLastNavigationTime] = useState(0)
  const [wheelAccumulator, setWheelAccumulator] = useState(0)
  const [isWheelGesture, setIsWheelGesture] = useState(false)
  const [isNavigating, setIsNavigating] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const nextSlide = () => {
    const now = Date.now()
    if (now - lastNavigationTime < 500 || isNavigating) return // Increased debounce to 500ms + navigation lock
    setLastNavigationTime(now)
    setIsNavigating(true)
    setCurrentSlide((prev) => (prev + 1) % 2)
    
    // Reset gesture state after navigation
    setTimeout(() => {
      setIsWheelGesture(false)
      setWheelAccumulator(0)
    }, 100)
    
    // Reset navigation lock after animation completes
    setTimeout(() => {
      setIsNavigating(false)
    }, 350) // Slightly longer than transition duration
  }

  const prevSlide = () => {
    const now = Date.now()
    if (now - lastNavigationTime < 500 || isNavigating) return // Increased debounce to 500ms + navigation lock
    setLastNavigationTime(now)
    setIsNavigating(true)
    setCurrentSlide((prev) => (prev - 1 + 2) % 2)
    
    // Reset gesture state after navigation
    setTimeout(() => {
      setIsWheelGesture(false)
      setWheelAccumulator(0)
    }, 100)
    
    // Reset navigation lock after animation completes
    setTimeout(() => {
      setIsNavigating(false)
    }, 350) // Slightly longer than transition duration
  }

  // Trackpad/touch navigation
  const minSwipeDistance = 30 // Reduced for better sensitivity
  const [isDragging, setIsDragging] = useState(false)

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
    setIsDragging(true)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd || !isDragging || isNavigating) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    // Only navigate once per gesture
    if (isLeftSwipe) {
      nextSlide()
    } else if (isRightSwipe) {
      prevSlide()
    }
    
    // Reset all touch states
    setIsDragging(false)
    setTouchStart(null)
    setTouchEnd(null)
  }

  // Mouse events for trackpad support
  const onMouseDown = (e: React.MouseEvent) => {
    setIsMouseDown(true)
    setMouseStart(e.clientX)
  }

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown || !mouseStart) return
    // Track mouse movement for potential drag gestures
  }

  const onMouseUp = (e: React.MouseEvent) => {
    if (!isMouseDown || !mouseStart || isNavigating) return
    
    const distance = mouseStart - e.clientX
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    // Only navigate once per gesture
    if (isLeftSwipe) {
      nextSlide()
    } else if (isRightSwipe) {
      prevSlide()
    }
    
    // Reset all mouse states
    setIsMouseDown(false)
    setMouseStart(null)
  }

  // Mouse wheel navigation for trackpad - improved single gesture detection
  const handleWheel = (e: WheelEvent) => {
    const now = Date.now()
    
    // Prevent navigation if already navigating or too soon after last navigation
    if (isNavigating || now - lastNavigationTime < 500) {
      return
    }
    
    // Reset accumulator if too much time has passed (new gesture)
    if (now - lastNavigationTime > 1000) {
      setWheelAccumulator(0)
      setIsWheelGesture(false)
    }
    
    // Only detect horizontal scroll gestures (deltaX) with higher threshold
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 2) {
      e.preventDefault()
      
      // Accumulate deltaX values to detect complete gesture
      const newAccumulator = wheelAccumulator + e.deltaX
      setWheelAccumulator(newAccumulator)
      
      // Only navigate when accumulated value crosses higher threshold (75px)
      if (Math.abs(newAccumulator) > 75 && !isWheelGesture) {
        setIsWheelGesture(true)
        if (newAccumulator > 0) {
          nextSlide()
        } else {
          prevSlide()
        }
        setWheelAccumulator(0) // Reset after navigation
      }
    }
    // Ignore vertical scroll (deltaY) - let page scroll normally
  }

  // Mobile detection and window resize handling
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile() // Check on mount
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Wheel event listener with non-passive option
  useEffect(() => {
    const carouselElement = carouselRef.current
    if (carouselElement) {
      carouselElement.addEventListener('wheel', handleWheel, { passive: false })
      return () => carouselElement.removeEventListener('wheel', handleWheel)
    }
  }, [wheelAccumulator, isWheelGesture, isNavigating, lastNavigationTime])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isNavigating) return // Prevent rapid keyboard navigation
      
      if (e.key === 'ArrowLeft') {
        prevSlide()
      } else if (e.key === 'ArrowRight') {
        nextSlide()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isNavigating])

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
        <div 
          className="overflow-hidden cursor-grab active:cursor-grabbing"
          ref={carouselRef}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
        >
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * (isMobile ? 50 : 40)}%)`,
              width: isMobile ? "200%" : "160%",
            }}
          >
            {/* Vision-Led Companies Card */}
            <div className={`${isMobile ? 'w-1/2' : 'w-3/5'} px-2 flex`}>
              <Card className="bg-[#0C4562]/90 border border-white/20 p-4 hover:bg-[#0C4562] hover:scale-95 transition-all duration-300 flex-1 flex flex-col" style={{ boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3), 0 4px 16px rgba(0, 0, 0, 0.2), 0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)" }}>
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

                <div className="space-y-3 mb-4 mt-4 flex-grow">
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

                <div className="flex justify-start mt-auto">
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
            <div className={`${isMobile ? 'w-1/2' : 'w-3/5'} px-2 flex`}>
              <Card className="bg-[#0C4562]/90 border border-white/20 p-4 hover:bg-[#0C4562] hover:scale-95 transition-all duration-300 flex-1 flex flex-col" style={{ boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3), 0 4px 16px rgba(0, 0, 0, 0.2), 0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)" }}>
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

                <div className="space-y-3 mb-4 mt-4 flex-grow">
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

                <div className="flex justify-start mt-auto">
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
        <div className="flex items-center justify-start mt-8 space-x-4">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="w-0 h-0 border-l-0 border-r-[12px] border-t-[8px] border-b-[8px] border-r-[#0D81B5] border-t-transparent border-b-transparent hover:border-r-[#0D81B5]/80 transition-colors"
          />

          {/* Pagination Dots */}
          <div className="flex items-center space-x-3">
            {[0, 1].map((index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
                className={`transition-all duration-300 ${
                  currentSlide === index 
                    ? "w-8 h-3 bg-gray-800 rounded-full" 
                    : "w-3 h-3 bg-gray-300 rounded-full hover:bg-gray-400"
              }`}
            />
          ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="w-0 h-0 border-l-[12px] border-r-0 border-t-[8px] border-b-[8px] border-l-[#0D81B5] border-t-transparent border-b-transparent hover:border-l-[#0D81B5]/80 transition-colors"
          />
        </div>
      </div>
    </main>
  )
}
