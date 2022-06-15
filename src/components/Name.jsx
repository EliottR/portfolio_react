import React from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useEffect, useRef } from "react"
import { useLocation, useHistory } from "react-router-dom"

gsap.registerPlugin(ScrollTrigger)

const Name = () => {
  const location = useLocation()
  const history = useHistory();

  const nameContainerRef = useRef(null)
  const nameRef = useRef(null)
  const firstnameRef = useRef(null)
  const surnameRef = useRef(null)

  useEffect(() => {
    const nameContainer = nameContainerRef.current
    const container = nameRef.current
    const child1 = firstnameRef.current
    const child2 = surnameRef.current

    if (location.pathname === "/") {
      gsap.to(nameContainer, {
        scrollTrigger: {
          trigger: nameContainer,
          start: 0,
          scrub: 2,
          onLeave: function(self) {
            self.disable()
            self.animation.progress(1)
          }
        },
        fontSize: "2rem",
        marginTop: "4.5rem",
        y: 0,
        top: 0,
      })

      gsap.to(container, {
        scrollTrigger: {
          trigger: container,
          start: 0,
          scrub: 0.8,
          onLeave: function(self) {
            self.disable()
            self.animation.progress(1)
          }
        },
        fontSize: "2rem",
      })

      gsap.to(child1, {
        scrollTrigger: {
          trigger: child1,
          start: 0,
          scrub: 0.8,
          onLeave: function(self) {
            self.disable()
            self.animation.progress(1)
          }
        },
        marginLeft: 0,
      })

      gsap.to(child2, {
        scrollTrigger: {
          trigger: child2,
          start: 0,
          scrub: 0.8,
          onLeave: function(self) {
            self.disable()
            self.animation.progress(1)
          }
        },
        yPercent: -100,
        xPercent: 50,
      })
    } else {
      gsap.set(nameContainer, {
        fontSize: "2rem",
        marginTop: "4.5rem",
        y: 0,
        top: 0,
      })

      gsap.set(container, {
        fontSize: "2rem",
      })

      gsap.set(child1, {
        marginLeft: 0,
      })

      gsap.set(child2, {
        yPercent: -100,
        xPercent: 50,
      })
    }
  }, [location.pathname])
  
  const handleClick = () => {
    history.push("/");
  }

  return (
    <div className="nameContainer" ref={nameContainerRef} onClick={handleClick}>
      <div className="nameContainer_content" ref={nameRef}>
        <div className="nameContainer_content_firstname" ref={firstnameRef}>
          eliott{" "}
        </div>
        <span className="nameContainer_content_surname" ref={surnameRef}>
          raheriarisoa
        </span>
      </div>
    </div>
  )
}

export default Name
