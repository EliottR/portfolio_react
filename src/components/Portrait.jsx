import React from "react"
import portrait from "../../src/assets/portrait.jpeg"

import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useEffect, useRef } from "react"
import { useLocation } from "react-router-dom"

gsap.registerPlugin(ScrollTrigger)

export const Portrait = () => {
  const location = useLocation()

  const imgRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const img = imgRef.current
    const content = contentRef.current

    if (location.pathname === "/profile") {
      gsap.set(img, {
        filter: "grayscale(0) brightness(1)",
      })

      gsap.set(content, {
        opacity: 1,
      })
    } else if (location.pathname === "/") {
      gsap.defaults({
        ease: "none",
        duration: 2.5,
      })

      let aboutTl = gsap
        .timeline({
          // defaults: {
          //     duration: 1
          // },
          paused: true,
        })
        .to(img, {
          filter: "grayscale(0) brightness(1)",
        })
        .to(content, {
          opacity: 1,
        })

      ScrollTrigger.create({
        // onUpdate: ({progress}) => aboutTl.progress() < progress ? aboutTl.progress(progress) : null,
        animation: aboutTl,
        trigger: ".portrait",
        start: "top 72",
        // end: "bottom top",
        scrub: true,
        pin: true,
        markers: true,

        // once: true,

        onLeave: function (self) {
          self.scroll(self.start) // <-- sets position to start of ScrollTrigger
          self.disable()
          self.animation.progress(1)
        },
      })
    }
  }, [location.pathname])

  return (
    <div className="portrait">
      <div className="portrait_content" ref={contentRef}>
        <p>
          Moi c’est Eliott, je compte 8523 jours à mon actif, ou encore 1217
          semaines et 4 jours, ou pour être plus compréhensible, j’ai 23 ans, 17
          semaines et 3 jours.
        </p>
        <p>
          J’ai toujours été passionné par l’informatique, les nouvelles
          technologies et la musique, et j’ai choisi de me concentrer
          professionnellement sur le domaine du développement web.
        </p>
        <p>
          Vous découvrirez ici mes différents projets, en espérant que cela vous
          plaise : bonne visite.
        </p>
        <p>xoxo</p>
      </div>
      <img
        className="portrait_img"
        src={portrait}
        alt="portrait Eliott"
        ref={imgRef}
      />
    </div>
  )
}
