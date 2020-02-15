import React from "react"
import Layout from "../components/layout"
import Content from "../components/content"
import Welcome from "../components/welcome"
import Projects from "../components/projects"
import Navigation from "../components/navigation"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "bootstrap-css-only/css/bootstrap.min.css"
import "mdbreact/dist/css/mdb.css"
const IndexPage = () => (
  <Layout data-spy="scroll" data-target=".navbar" data-offset="50">
    <Content id="section1" class="container-fluid"></Content>
    <Welcome></Welcome>
    <Projects></Projects>
    <Navigation></Navigation>
    <style>{`
    * {
        font-display: swap;
    }`}
    </style>
  </Layout>
)

export default IndexPage
