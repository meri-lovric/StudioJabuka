import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Content from "../components/content"
import Welcome from "../components/welcome"
import Projects from "../components/projects"
import Navigation from "../components/navigation"
import 'bootstrap/dist/css/bootstrap.min.css'
const IndexPage = () => (
  <Layout data-spy="scroll" data-target=".navbar" data-offset="50">
    <Content id="section1" class="container-fluid"></Content>
    <Welcome></Welcome>
    <Projects></Projects>
    <Navigation ></Navigation>
  </Layout>
)

export default IndexPage
