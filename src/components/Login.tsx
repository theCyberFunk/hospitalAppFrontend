import Navbar from "./partials/Navbar";

export default function Login() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="main">
        <div className="box">
          <div className="head">
            <h4>Login</h4>
          </div>
          {/* <form action="/login" method="POST"> */}
          {/* <input type="text"  name="username" placeholder="Enter Username"> */}
          {/* <input type="password" name="password" placeholder="Enter Password"> */}
          <button>
            L O G I N<i className="fas fa-arrow-right"></i>
          </button>
          <p>
            Not registered? <a href="/signup">Sign Up</a>
          </p>
          {/* </form> */}
        </div>

        <div className="footer">
          <p>All Rights Reserved. © tvastra 2020</p>
        </div>
      </div>
    </div>
  );
}
