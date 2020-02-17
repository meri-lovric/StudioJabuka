import React from "react"
import IdentityModal, {
  useIdentityContext,
  IdentityContextProvider,
} from "react-netlify-identity-widget"
import "../../node_modules/react-netlify-identity-widget/styles.css"
import {MDBIcon, MDBBtn} from "mdbreact"

function Authentication() {
  const url = "https://studiojabuka.netlify.com/" // supply the url of your Netlify site instance. VERY IMPORTANT. no point putting in env var since this is public anyway
  return (
    <IdentityContextProvider url={url} aria-label="identityContextProvider">
      <AuthStatusView aria-label="authStatusView"/>
    </IdentityContextProvider>
  )
}
export default Authentication

function AuthStatusView() {
  const identity = useIdentityContext()
  const [dialog, setDialog] = React.useState(false)
  const name =
    (identity &&
      identity.user &&
      identity.user.user_metadata &&
      identity.user.user_metadata.name) ||
    "NoName"
  const isLoggedIn = identity && identity.isLoggedIn
  return (
    <div>
      <div>
      <MDBBtn className ="loginButton" role="button" color="success" tag="a" aria-label="loginButton" onClick={() => setDialog(true)}>
          {isLoggedIn ? `Hello ${name}, Log out here!` : 'Login'}</MDBBtn>
      </div>
      <IdentityModal
        showDialog={dialog}
        onCloseDialog={() => setDialog(false)}
        onLogin={user => console.log("hello ", user.user_metadata)}
        onSignup={user => console.log("welcome ", user.user_metadata)}
        onLogout={() => console.log("bye ", name)}
        aria-label="identityModal"
      />
      <style>{`
      #header-nav > div > div:nth-child(2) > li:nth-child(2) > div > div > a {
        box-shadow: none;
      }
      body > reach-portal > div:nth-child(3) > div > div {
        z-index: 999;
      }
      body > reach-portal > div:nth-child(3) > div > div > div > div > div.providersGroup > button {
        background-color: rgb(0, 200, 81);
        border: none;
      }
      body > reach-portal > div:nth-child(3) > div > div > div {
        border: none;
      }
      .loginButton {
        border-radius:40px;
        font-weight:500;
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);  

      }
      #header-nav > div > div:nth-child(2) > li:nth-child(2) > div > div > a{
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);  

      }
      `}
      </style>
    </div>
  )
}