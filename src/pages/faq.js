import Layout from "../components/layout"
import "bootstrap/dist/css/bootstrap.min.css"
import Comments from "remark-ninja-react"
import React from "react"
import QuestionsAccordion from "../components/questions"

const QuestionsPage = () => (
  <Layout>
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
    <h2 className="h1-responsive font-weight-bold text-center my-5">
      Imate li komentar?
    </h2>

    <Comments
      siteId="0a8e758d-d437-4231-a271-ea43ee0b9c25"
      threadSlug="komentari"
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
        p {
          font-size: 1.2em;
        }
      `}
    </style>
  </Layout>
)

export default QuestionsPage
