import React from "react"
import Header from "./header"
import Footer from "./footer"
const Layout = ({ children }) => {
  return (
    <div
   
      /*style={{
        width: "101%",
        height: "101%",
        marginTop: "-8px",
        marginLeft: "-8px",
        fontFamily: "Source Code Pro",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}*/
    >
      <Header></Header>
      {children}
      <Footer></Footer>
    </div>
  )
}

export default Layout
