import React, { Component } from "react";

// STYLE
import "./SignIn.scss";

export class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState(() => {
      return {
        [name]: value
      };
    });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <input
            name="email"
            type="email"
            value={this.state.email}
            required
            onChange={this.handleChange}
          />
          <label>Email</label>
          <input
            name="password"
            type="password"
            value={this.state.password}
            required
            onChange={this.handleChange}
          />
          <label>Password</label>
          <button>Submit Form</button>
        </form>
      </div>
    );
  }
}

export default SignIn;
