import React from 'react'
import './login.css'
function login() {
    return (
        <div className="login">
        <div className="login__box">
          <p>
            <strong>Login</strong>
            <br />
          </p>
          <label for="account">
            <small>Email or phone number</small>
          </label>
          <input type="text" id="account" />
          <button>Continue</button>
          <small>
            By continuing, you agree to Amazon's Conditions of Use and Privacy
            Notice.
          </small>
        </div>
      </div>
    )
}

export default login
