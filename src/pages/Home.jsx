import React from "react"
// import { motion } from "framer-motion"
import Name from "../components/Name"
import { Portrait } from '../components/Portrait';

const Home = () => {
  return (
    <>
    <Name />
    <div className="home">
      <Portrait />
    </div>
    </>
  )
}

export default Home
