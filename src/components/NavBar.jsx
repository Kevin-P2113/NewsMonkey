import React from "react";

export default function NavBar(props) {
  function handleCategory(category) {
    props.setCategory(category);
  }

  function handleCountry(country) {
    props.setCountry(country);
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            NewsMonkey
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Country ({props.country})
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => {
                        handleCountry("in");
                      }}
                    >
                      India
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => {
                        handleCountry("us");
                      }}
                    >
                      USA
                    </button>
                  </li>
                  {/* <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li> */}
                </ul>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link active"
                  aria-current="page"
                  onClick={() => {
                    handleCategory("business");
                  }}
                >
                  Business
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link active"
                  aria-current="page"
                  onClick={() => {
                    handleCategory("technology");
                  }}
                >
                  Technology
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link active"
                  aria-current="page"
                  onClick={() => {
                    handleCategory("general");
                  }}
                >
                  General
                </button>
              </li>{" "}
              <li className="nav-item">
                <button
                  className="nav-link active"
                  aria-current="page"
                  onClick={() => {
                    handleCategory("health");
                  }}
                >
                  Health
                </button>
              </li>{" "}
              <li className="nav-item">
                <button
                  className="nav-link active"
                  aria-current="page"
                  onClick={() => {
                    handleCategory("science");
                  }}
                >
                  Science
                </button>
              </li>{" "}
              <li className="nav-item">
                <button
                  className="nav-link active"
                  aria-current="page"
                  onClick={() => {
                    handleCategory("sports");
                  }}
                >
                  Sports
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link active"
                  aria-current="page"
                  onClick={() => {
                    handleCategory("entertainment");
                  }}
                >
                  Entertainment
                </button>
              </li>
            </ul>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggleMode}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                {props.mode == "dark" ? "Light" : "Dark"} Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
