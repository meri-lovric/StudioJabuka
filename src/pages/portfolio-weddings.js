import React from "react"
import Layout from "../components/layout"
import Search from "../components/search"
import Portfolio from "../components/portfolioWeddingsLayout"
import "bootstrap/dist/css/bootstrap.min.css"
const PortfolioPage = () => {
  const data = "Vjenčanja";
  return(
  <Layout >
    <div style={{display:"grid", justifyContent:"center",  marginTop:"15vh", width:"75vw", marginLeft: "auto", marginRight:"auto"}} >
      <Search >{data}</Search>
      <Portfolio ></Portfolio>
    </div>
    
  </Layout>
)
  }
export default PortfolioPage
