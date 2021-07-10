import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Features from "../components/Features"
import Hero from "../components/Hero"

import Contact from "../components/Contact"
import About from "../components/About"
import Prices from "../components/Prices"
import FAQ from "../components/FAQ"
import FAB from "../components/FAB"

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <Hero />
      <About />
      <Features />
      <Prices />
      <FAQ />
      <FAB />
      <Contact />
    </Layout>
  )
}

export default IndexPage
