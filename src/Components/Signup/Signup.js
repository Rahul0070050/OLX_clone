import React from 'react';

import Logo from '../../olx-logo.png';
import './Signup.css';

export default function Signup() {
  const [userData, setUserData] = useState({ username: '', email: '', phone: 0, password: '' })

  function handleOnChange(e) {
    setUserData((data) => {
      return { ...data, [e.target.name]: e.target.value }

    })
  }
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            onChange={(e) => handleOnChange(e)}
            className="input"
            type="text"
            id="fname"
            name="username"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            onChange={(e) => handleOnChange(e)}
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            onChange={(e) => handleOnChange(e)}
            className="input"
            type="number"
            id="lname"
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            onChange={(e) => handleOnChange(e)}
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
}
