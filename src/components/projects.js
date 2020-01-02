import React from "react"
import "../styles/description.scss"
import "bootstrap/dist/css/bootstrap.min.css"
import "mdbootstrap/css/bootstrap.min.css"
import "mdbootstrap/css/mdb.min.css"

import { useStaticQuery, graphql } from "gatsby"
import ReactWOW from "react-wow"
const Projects = () => {
  return (
    <section
      id="section3"
      class="text-center py-5"
      style={{ backgroundColor: " #eee", height: "100vh" }}
    >
      <div class="container">
        <h2 class="h1-responsive font-weight-bold mb-5">Our newest projects</h2>
        <p class="grey-text w-responsive mx-auto mb-5">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit est laborum.
        </p>

        <div class="row text-center">
          <div class="col-lg-4 col-md-12 mb-lg-0 mb-4">
            <div class="view overlay rounded z-depth-1">
              <img
                src="https://mdbootstrap.com/img/Photos/Others/images/58.jpg"
                class="img-fluid"
                alt="Sample project image"
              ></img>
              <a>
                <div class="mask rgba-white-slight"></div>
              </a>
            </div>
            <div class="card-body pb-0">
              <h4 class="font-weight-bold my-3">Title of the news</h4>
              <p class="grey-text">
                Temporibus autem quibusdam et aut officiis debitis aut rerum
                necessitatibus saepe eveniet ut et voluptates repudiandae.
              </p>
              <a class="btn btn-purple btn-sm">
                 View project
              </a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 mb-md-0 mb-4">
            <div class="view overlay rounded z-depth-1">
              <img
                src="https://mdbootstrap.com/img/Photos/Others/project4.jpg"
                class="img-fluid"
                alt="Sample project image"
              ></img>
              <a>
                <div class="mask rgba-white-slight"></div>
              </a>
            </div>
            <div class="card-body pb-0">
              <h4 class="font-weight-bold my-3">Title of the news</h4>
              <p class="grey-text">
                Temporibus autem quibusdam et aut officiis debitis aut rerum
                necessitatibus saepe eveniet ut et voluptates repudiandae.
              </p>
              <a class="btn btn-purple btn-sm">
                 View project
              </a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="view overlay rounded z-depth-1">
              <img
                src="https://mdbootstrap.com/img/Photos/Others/images/88.jpg"
                class="img-fluid"
                alt="Sample project image"
              ></img>
              <a>
                <div class="mask rgba-white-slight"></div>
              </a>
            </div>
            <div class="card-body pb-0">
              <h4 class="font-weight-bold my-3">Title of the news</h4>
              <p class="grey-text">
                Temporibus autem quibusdam et aut officiis debitis aut rerum
                necessitatibus saepe eveniet ut et voluptates repudiandae.
              </p>
              <a class="btn btn-purple btn-sm">
                 View project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Projects
