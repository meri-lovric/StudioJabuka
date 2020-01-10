import React from "react";
import { navigateTo } from "gatsby-link";
import Recaptcha from "react-google-recaptcha";
import { MDBIcon } from "mdbreact";
const RECAPTCHA_KEY = process.env.SITE_RECAPTCHA_KEY;

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleRecaptcha = value => {
    this.setState({ "g-recaptcha-response": value });
  };
  

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigateTo(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  render() {
    return (
      <div>
      <form
      name="contact"
      method="post"
      action="/thanks/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={this.handleSubmit}
    >
      {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
      <input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <label>
          Don’t fill this out:{" "}
          <input name="bot-field" onChange={this.handleChange} />
        </label>
      </p>
      <p class = "text-center">
        <label>
          <MDBIcon icon="user-alt" style = {{marginRight: "8px"}} />
          <input type="text" name="name" onChange={this.handleChange} placeholder="Enter your name" />
        </label>
      </p>
      <p class = "text-center">
        <label>
          <MDBIcon icon="envelope" style = {{marginRight: "8px"}}/>
          <input type="email" name="email" onChange={this.handleChange} placeholder="Enter email"/>
        </label>
      </p>
      <p class = "text-center">
        <label>
          <textarea name="message" onChange={this.handleChange}  style = {{marginLeft: "24px"}}/>
        </label>
      </p>
      <p class = "text-center">
        <button type="submit" class="btn">Send</button>
      </p>
    </form>
    <style jsx>{`
        .fa {
          font-size: 1.5em;
        }
        input, textarea {
          width: 15em;
        }
        .btn{
          background-color: #00c851;
          border-radius: 10px;
        }
      `}</style>
  </div>
);
}
}