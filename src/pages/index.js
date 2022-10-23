import * as React from "react"
import Header from "./header"
import Hero from "./Hero"
// import Layout from "../components/layout"
import Service from "./Service"
import Testomone from "./Testomone"

import Inovation from "./Inovation"
import BestSpeciliest from "./BestSpeciliest"
import NewSection from "./NewSection"
import Footer from "./Footer"
import "../styles/global.css"
export default function Home() {
  return (
    <div className="Holder">
      <div className="">
        <Header />
        <Hero />
        <Service />
        <Inovation />
        <BestSpeciliest />
        <Testomone />
        <NewSection />
        <Footer />
      </div>
    </div>
  )
}
