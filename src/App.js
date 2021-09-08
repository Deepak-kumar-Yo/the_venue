import './App.css';
import logo from './logo.png';
import photo from './photo.jpg';
import { waitForDomChange } from '@testing-library/react';

function App() {
  return (
            <div>
              <meta charSet="UTF-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <title>Document</title>
              <link rel="preconnect" href="https://fonts.gstatic.com" />
              <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap" rel="stylesheet" /> 
              <link rel="stylesheet" href="style.css" />
              <div className="container">
                <div className="form">
                  <div className="heading">
                    <img src={logo} className="logo" alt="Bareilly college logo" />
                    <h1>Sign Up</h1>
                  </div>
                  <div className="wrap">
                    <div className="f1">
                      <label>First Name</label>
                      <input type="text" />
                      <span className="focus-input" />
                    </div>
                    <div className="f2">
                      <label>Last Name</label>
                      <input type="text" />
                      <span className="focus-input" />
                    </div>
                  </div>
                  <div className="wrap2">
                    <label>Username</label>
                    <input type="text" />
                    <span className="focus-input2" />
                  </div>
                  <div className="wrap2">
                    <label>Email</label>
                    <input type="text" />
                    <span className="focus-input2" />
                  </div>
                  <div className="wrap2">
                    <label>Phone Number</label>
                    <input type="number" />
                    <span className="focus-input2" />
                  </div>
                  <button className="btn">Register</button>
                </div>
                <div className="image">
                  <img src={photo} className="image" alt="" />
                </div>
              </div>
            </div>
  );
}

export default App;
