import React from "react"
import "../styles/description.scss"
import "bootstrap/dist/css/bootstrap.min.css"
import "mdbootstrap/css/bootstrap.min.css"
import "mdbootstrap/css/mdb.min.css"
const NavButton = (props) => {
return(
<a
className=" menu-item h1-responsive btn"
href={props.name}

>
{" "}
{props.placeholder}
<style jsx>{`
            .menu-item{
                font-size:1.2em;
                font-weight: bold;
                width:10%;
                heighth:15%;
                background-color:white;

               
            }
           
            
           
`}</style>
</a>)
}
export default NavButton