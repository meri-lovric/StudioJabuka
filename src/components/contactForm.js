import React from "react";
import { navigateTo } from "gatsby-link";
//import Recaptcha from "react-google-recaptcha";
import { MDBIcon } from "mdbreact";
//const RECAPTCHA_KEY = process.env.SITE_RECAPTCHA_KEY;

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
      <p className = "text-center">
        <label>
          <MDBIcon icon="user-alt" style = {{marginRight: "10px"}} />
          <input type="text" name="name"  onChange={this.handleChange} placeholder="Enter your name" className="form-control"/>
        </label>
      </p>
      <p className= "text-center">
        <label>
          <MDBIcon icon="envelope" style = {{marginRight: "10px"}}/>
          <input type="email" name="email"  onChange={this.handleChange} placeholder="Enter email" className="form-control"/>
        </label>
      </p>
      <p className= "text-center">
        <label>
          <MDBIcon icon="comment-alt" style = {{marginRight: "10px"}}/>
          <textarea name="message" onChange={this.handleChange} placeholder="Enter message" className="form-control md-textarea"/>
        </label>
      </p>
      <p className= "text-center">
        <button type="submit" className="btn btn-success">Send</button>
      </p>
    </form>
    <style>{`
        .fa {
          font-size: 1.5em;
          color: #212529;
        }
        .btn{
          
          border-radius: 10px;
        }
        label {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          margin: 2em;
        }
        .form-control {
          box-shadow: rgba(0, 0, 0, 0.44) 0px 35px 77px -17px;
        }
        
      `}</style>
  </div>
);
}
}