import { useState, useEffect } from "react"
import "./style.css"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

// components
import BackgroundLines from "../BackgroundLines"
import ParaWriting from "../ParaWriting"
import ScrambleText from "../ScrambleText"
import ResumeCard from "../ResumeCard"

// assets
import ProfilePic from "../../assets/Images/Profile.jpg"
import Icon from "../Icon"
import githubIcon from "../../assets/Icon/github.svg"
import linkedinIcon from "../../assets/Icon/linkedin.svg"
import fileIcon from "../../assets/Icon/file.svg"

// jsons
import experienceList from "../../constants/experienceList.json"

export default function Resume() {
  const controls = useAnimation()
  const [ref, inView] = useInView()
  const [hasAnimated, setHasAnimated] = useState(false)

  const handleComplete = () => {
    setHasAnimated(true)
  }

  useEffect(() => {
    if (inView && !hasAnimated) {
      controls.start("visible")
    }
  }, [inView, controls])

  const opacityVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  const blurVariants = {
    hidden: { opacity: 0, filter: "blur(10px)" },
    visible: { opacity: 1, filter: "blur(0px)" },
  }

  return (
    <section ref={ref} className="resume" id="services">
      <BackgroundLines />

      <div className="resume--grid">
        <div className="resume--grid--detail">
          <div className="resume--grid--detail--pic">
            <img src={ProfilePic} alt="" />
          </div>
          <div className="resume--grid--detail--data">
            <div className="resume--grid--detail--data--name">
              <h2>
                <ParaWriting stagger={0.08} text={"Khosro Shariatzadeh"} />
              </h2>
              <h4>
                <ScrambleText delay={0}>Software Engineer</ScrambleText>
              </h4>
              <motion.div initial="hidden" animate={controls} variants={blurVariants} transition={{ duration: 1, delay: 0.5 }} onAnimationComplete={() => handleComplete()} className="resume--grid--detail--data--name--icons">
                <a href="https://github.com/Khosroshariat" target="_blank" rel="noreferrer">
                  <Icon img={githubIcon} />
                </a>
                <a href="https://www.linkedin.com/in/khosro-sh/" target="_blank" rel="noreferrer">
                  <Icon img={linkedinIcon} />
                </a>
                <a href="/khosroresume.pdf" target="_blank" type="pdf">
                  <Icon img={fileIcon} />
                </a>
              </motion.div>
            </div>


          </div>
        </div>

        <div className="resume--grid--experience">
          <div className="resume--grid--experience--head">
            <p className="theme--detail">
              <ScrambleText delay={0}>A highly motivated software engineer prepared to utilise exceptional software, problem-solving and communication skills to further my programming passion as a website developer.</ScrambleText>
            </p>

            <motion.h3 initial="hidden" animate={controls} variants={opacityVariant} transition={{ duration: 1, delay: 0.5 }} className="theme--text">
              <ScrambleText delay={0.5}>05</ScrambleText> <span className="hash">{"//"}</span> <ScrambleText delay={0.5}>Services</ScrambleText>
            </motion.h3>
          </div>
          <div className="resume--grid--experience--body">
            {experienceList.map((item, index) => {
              return <ResumeCard key={index} experienceList={item} controls={controls} delay={index + 1} />
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
