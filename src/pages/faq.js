import Layout from "../components/layout"
import "bootstrap/dist/css/bootstrap.min.css"
import Comments from "remark-ninja-react"
import React, { Component } from "react"
import {
  MDBContainer,
  MDBCollapse,
  MDBCard,
  MDBCardBody,
  MDBCollapseHeader,
} from "mdbreact"
import QuestionsAccordion from "../components/questions"
import ReactWOW from "react-wow"

const QuestionsPage = () => (
  <Layout>
    <React.Fragment>
      <nav
        class="navbar navbar-dark "
        style={{ backgroundColor: "#00c851", margin: "15vw 10vw 5vw 10vw" }}
      >
        <ReactWOW animation="fadeIn">
          <div className="h1" style={{ color: "white" }}>
            Q&A
          </div>
        </ReactWOW>
      </nav>
    </React.Fragment>
    <p className="text-center w-responsive mx-auto mb-5">
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
      dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <QuestionsAccordion></QuestionsAccordion>
    <h2 className="h1-responsive font-weight-bold text-center my-5">
      Have another question?
    </h2>
    <Comments
      siteId="0a8e758d-d437-4231-a271-ea43ee0b9c25"
      threadSlug="unique-thread-slug"
    />
    <style jsx>
      {`
        .rn-comment-form {
            padding: 0 10vw;
        }
        .rn-comment-list {
            padding: 0 10vw;
        }
        .rn-comment-form input[type="submit"] {
            background-color: #00c851;
        }
        .rn-gravatar img {
            border-radius: 8px;
        }
        h2 {
            color: #00c851;
        }
      `}
    </style>
  </Layout>
)

export default QuestionsPage
