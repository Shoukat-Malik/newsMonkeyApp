import React, { Component } from "react";

export class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#" onClick={()=>this.props.handleCategoryChange("business")}>
                    buisness
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#" onClick={()=>this.props.handleCategoryChange("entertainment")}>
                    entertainment
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#" onClick={()=>this.props.handleCategoryChange("general")}>
                    general
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#" onClick={()=>this.props.handleCategoryChange("health")}>
                    health
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#" onClick={()=>this.props.handleCategoryChange("science")}>
                    science
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#" onClick={()=>this.props.handleCategoryChange("sports")}>
                    sports
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#" onClick={()=>this.props.handleCategoryChange("technology")}>
                    technology
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
