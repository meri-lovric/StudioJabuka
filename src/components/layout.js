import React from "react"
import Header from "./header"
import Footer from "./footer"
const Layout = ({ children }) => {
  return (
    <div id="layout">
      
      <Header></Header>
      {children}
      <Footer style={{ position: "relative", bottom: "0" }}></Footer>
      <style jsx>{`
        #layout {
          width: 100vw;
          display: grid;
          grid-template-columns: 1fr;
          
        }
        ::-webkit-scrollbar {display:none;}

      `}</style>
    </div>
  )
}

export default Layout
