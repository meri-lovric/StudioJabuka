import Layout from "../components/layout"
import "bootstrap/dist/css/bootstrap.min.css"
import React from "react"
import QuestionsAccordion from "../components/questions"

const QuestionsPage = () => (
  <Layout>
    <div className="grid-wrap">
      <h2
        class="h1-responsive font-weight-bold text-center my-5"
        style={{ color: "#00c851", paddingTop: "3em" }}
      >
        Pitanja i odgovori
      </h2>

      <p className="text-center w-responsive mx-auto mb-4">
        Donosimo vam pregled najčešće postavljanih pitanja o našim uslugama.
      </p>
      <QuestionsAccordion></QuestionsAccordion>

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
          p {
            font-size: 1.2em;
          }
          .grid-wrap {
            background-color: #ffffff;
            background-image: url("https://www.transparenttextures.com/patterns/cubes.png");
            padding-bottom:4em;
          }
        `}
      </style>
    </div>
  </Layout>
)

export default QuestionsPage
