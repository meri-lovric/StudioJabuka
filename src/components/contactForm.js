import React from "react"
import { navigateTo } from "gatsby-link"
import Recaptcha from "react-google-recaptcha"
import { MDBInput, MDBIcon } from "mdbreact"


const RECAPTCHA_KEY = process.env.SITE_RECAPTCHA_KEY

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleRecaptcha = value => {
    this.setState({ "g-recaptcha-response": value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(() => navigateTo(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  render() {
    return (
      <div>
        <form
          name="contact-recaptcha"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-recaptcha="true"
          onSubmit={this.handleSubmit}
        >
          <noscript>
            <p>This form won’t work with Javascript disabled</p>
          </noscript>
          <p>
            <MDBInput
              icon="user"
              label="Your name"
              iconClass="grey-text"
              type="text"
              id="form-name"
              name="name"
              onChange={this.handleChange}
            />
          </p>
          <p>
            <MDBInput
              icon="envelope"
              label="Your email"
              iconClass="grey-text"
              type="email"
              name="email"
              onChange={this.handleChange}
            />
          </p>
          <p>
            <MDBInput
              icon="pen-square"
              label="Your message"
              iconClass="grey-text"
              type="textarea"
              id="form-text"
              onChange={this.handleChange}
            />
          </p>
          <p>
            <Recaptcha
              ref="recaptcha"
              sitekey={RECAPTCHA_KEY}
              onChange={this.handleRecaptcha}
            />
          </p>
          <div className="text-center">
            <button
              type="submit"
              style={{ fontSize: "1.5em", borderRadius: "10px", backgroundColor: "#00c851" }}
            >
              Send
            </button>
          </div>
        </form>
        <style jsx>{`
          p {
            margin: 0 3em;
            padding: 1em;
          }
        
        `}</style>
      </div>
    )
  }
}
