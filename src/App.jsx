import React, { useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from "gsap"
import 'remixicon/fonts/remixicon.css'

const App = () => {

  const [showContent, setShowContent] = useState(false)

  useGSAP(() => {
    const tl = gsap.timeline()
    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "power4.easeInOut",
      transformOrigin: "50% 50%",
    })
      .to(".vi-mask-group", {
        scale: 10,
        duration: 2,
        delay: -1.8,
        ease: "expo.inOut",
        transformOrigin: "50% 50%",
        opacity: 0,
        onUpdate: function () {
          if (this.progress() >= .9) {
            document.querySelector(".svg").remove()
            setShowContent(true)
            this.kill()
          }
        }
      })
  }, [])

  useGSAP(() => {

    if (!showContent) return

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: -1,
      ease: "expo.inOut"
    })

    gsap.to(".sky", {
      scale: 1.2,
      rotate: 0,
      duration: 2,
      delay: -.8,
      ease: "expo.inOut"
    })

    gsap.to(".bg", {
      scale: 1.2,
      rotate: 0,
      duration: 2,
      delay: -.8,
      ease: "expo.inOut"
    })

    gsap.to(".character", {
      scale: 1,
      x: "-50%",
      rotate: 0,
      duration: 2,
      delay: -.8,
      ease: "expo.inOut"
    })

    gsap.set(".text", { xPercent: -50 })

    gsap.to(".text", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: -.8,
      ease: "expo.out"
    })

    const main = document.querySelector(".main")

    const handleMove = (e) => {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40
      gsap.to(".imagesdiv .text", { x: `${xMove * 0.4}%` })
      gsap.to(".sky", { x: xMove })
      gsap.to(".bg", { x: xMove * 1.7 })
    }

    main?.addEventListener("mousemove", handleMove)

    return () => {
      main?.removeEventListener("mousemove", handleMove)
    }
  }, [showContent])

  return (
    <>
      {/* INTRO SVG */}
      <div className="svg fixed inset-0 z-50 flex items-center justify-center bg-black">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>

      {showContent && (
        <div className="main w-full rotate-[-10deg] scale-[1.2] md:scale-[1.4] lg:scale-[1.7]">

          {/* NAVBAR */}
          <div className="absolute top-0 left-0 z-10 w-full px-6 sm:px-10 py-8 sm:py-10">
            <div className="flex gap-6 items-center">
              <div className="flex flex-col gap-1">
                <div className="w-14 h-2 bg-white"></div>
                <div className="w-8 h-2 bg-white"></div>
                <div className="w-5 h-2 bg-white"></div>
              </div>
              <h3 className="text-2xl sm:text-4xl text-white">Rockstar</h3>
            </div>
          </div>

          {/* HERO */}
          <div className="relative w-full h-screen overflow-hidden bg-black">
            <div className="relative imagesdiv w-full h-screen overflow-hidden">
              <img className="absolute sky w-full h-full object-cover scale-[1.5] rotate-[-20deg]" src="sky.png" />
              <img className="absolute bg w-full h-full object-cover scale-[1.8] -rotate-3" src="bg.png" />

              {/* GTA TEXT */}
              <div className="text absolute left-1/2 top-20 sm:top-10 lg:top-0 
                scale-[1.1] sm:scale-[1.25] lg:scale-[1.4] 
                rotate-[-10deg] text-white flex flex-col gap-3 sm:gap-5">

                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl leading-none -ml-5 sm:-ml-10 lg:-ml-20">
                  grand
                </h1>
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl leading-none ml-5 sm:ml-10 lg:ml-20">
                  theft
                </h1>
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl leading-none -ml-5 sm:-ml-10 lg:-ml-20">
                  auto
                </h1>
              </div>

              {/* CHARACTER */}
              <img
                className="character absolute left-1/2 
  top-[20%] sm:top-0 
  -translate-x-1/2
  scale-[1.6] sm:scale-[2.5] lg:scale-[3]
  rotate-[-10deg] sm:rotate-[-20deg]
  -bottom-[90%] sm:-bottom-[140%] lg:-bottom-[150%]"
                src="girlbg.png"
              />
            </div>

            {/* BOTTOM BAR */}
            <div className="absolute bottom-0 left-0 w-full px-6 sm:px-10 py-6 text-white bg-gradient-to-t from-black to-transparent">
              <div className="flex items-center gap-4">
                <i className="ri-arrow-down-line text-3xl sm:text-4xl"></i>
                <h3 className="text-lg sm:text-xl">Scroll Down</h3>
              </div>
            </div>
          </div>

          {/* SECOND SECTION */}
          <div className="w-full h-screen bg-black flex items-center justify-center">
            <div className="cntr flex flex-col lg:flex-row w-full h-[80%] text-white">

              <div className="relative w-full lg:w-1/2 h-[50vh] lg:h-full">
                <img className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2" src="imag.png" />
              </div>

              <div className="w-full lg:w-[40%] px-6 lg:px-0">
                <h1 className="text-4xl sm:text-6xl lg:text-8xl">Still Running,</h1>
                <h1 className="text-4xl sm:text-6xl lg:text-8xl">Not Hunting</h1>
                <p className="mt-6 sm:mt-10">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolores velit.
                </p>
                <button className="mt-8 sm:mt-10 bg-yellow-500 px-8 py-5 text-black text-xl sm:text-2xl">
                  Download Now
                </button>
              </div>

            </div>
          </div>

        </div>
      )}
    </>
  )
}

export default App
