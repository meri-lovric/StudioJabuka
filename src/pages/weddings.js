import React from "react"
import Layout from "../components/layout"
import Pricing from "../components/pricing"
import { Link } from "gatsby"

const WeddingsPage = () => {
  return (
    <Layout>
       <h2
          className="h1-responsive font-weight-bold text-center my-5"
          style={{ color: "#00c851" }}
        >
          Vjenčanja
        </h2>
      <Pricing></Pricing>
    </Layout>
  )
}
export default WeddingsPage
