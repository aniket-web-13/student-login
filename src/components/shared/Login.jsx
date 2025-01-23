import React, { useState } from "react";

function StudentLogin() {
  const [isSignUp, setIsSignUp] = useState(false); // To toggle between Login and SignUp

  // Toggle function
  const toggleForm = () => setIsSignUp(!isSignUp);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="card shadow-sm p-4">
            <h3 className="text-center mb-4">{isSignUp ? "Sign Up" : "Login"}</h3>

            <form>
              {/* Email Input */}
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Password Input */}
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter your password"
                  required
                />
              </div>

              {/* Confirm Password (for SignUp only) */}
              {isSignUp && (
                <div className="mb-3">
                  <label className="form-label">Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Re-enter your password"
                    required
                  />
                </div>
              )}

              {/* Submit Button */}
              <button type="submit" className="btn btn-primary w-100">
                {isSignUp ? "Sign Up" : "Login"}
              </button>
            </form>

            {/* Toggle between Login and SignUp */}
            <p className="text-center mt-3">
              {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
              <button
                className="btn btn-link p-0 text-primary"
                style={{ textDecoration: "none" }}
                onClick={toggleForm}
              >
                {isSignUp ? "Login" : "Sign Up"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentLogin;