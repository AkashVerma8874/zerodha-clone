import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";


function Navbar() {
  const navigate = useNavigate();
  const [cookies, , removeCookie] = useCookies(["token"]);
  const handleLogout = () => {
    removeCookie("token");
    navigate("/login");
  };
  return (
    <nav
      class="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#fff" }}
    >
      <div class="container p-2">
        <Link class="navbar-brand" to="/">
          <img
            src="media/images/logo.svg"
            alt="logo"
            style={{ width: "25%" }}
          />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <form class="d-flex" role="search">
            <ul class="navbar-nav">
                {!cookies.token ? (
                  <>
                    <li className="nav-item">
                      <Link className="nav-link text-muted" to="/signup">
                        Signup
                      </Link>
                    </li>
                  </>
                ) : (
                  <li className="nav-item">
                    <button
                      className="btn btn-outline-danger ms-3"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </li>
                )}

                
              <li class="nav-item">
                <Link class="nav-link active text-muted" aria-current="page" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active text-muted" aria-current="page" to="/product">
                  Products
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active text-muted" aria-current="page" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active text-muted" aria-current="page" to="/support">
                  Support
                </Link>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
