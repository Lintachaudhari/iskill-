import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Slider from "../components/slider/slider"
import "../scss/main.scss"
import ReasonsToIskyll from "../components/home/Reasons-to-Iskyll"
import BuildYourTeam from "../components/home/Build-your-team"
import NewIdeas from "../components/home/New-ideas"
import Platform from "../components/home/Platform"
import OurCustomers from "../components/home/Our-customers"
import Testimonials from "../components/home/testimonials"

export default props => (
  <Layout>
    <SEO title="Home" />
    <Slider />
    <ReasonsToIskyll />
    <Platform />
    <OurCustomers />
    <BuildYourTeam />
    <NewIdeas />
    <Testimonials/>
  </Layout>
)
