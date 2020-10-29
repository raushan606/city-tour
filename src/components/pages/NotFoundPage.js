import { faEnvelope, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default class NotFoundPage extends Component {
  render() {
    return (
      <ComponentNotFound className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="error-template">
              <h1>Oops!</h1>
              <h2>Error 404!!!</h2>
              <div className="error-details">
                Sorry, an Error occurred. The requested page was not Found!
              </div>
              <div className="error-actions">
                <Link to="/" className="btn btn-outline-primary btn-md">
                  <FontAwesomeIcon icon={faHome} />
                  &nbsp; Back to Main Page
                </Link>{" "}
                <Link
                  className="btn btn-outline-primary disabled btn-md"
                  aria-disabled="true"
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                  &nbsp; Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </ComponentNotFound>
    );
  }
}

const ComponentNotFound = styled.div`
  .error-template {
    padding: 40px 15px;
    text-align: center;
  }

  .error-actions {
    margin-top: 15px;
    margin-bottom: 15px;
  }

  .btn {
    margin-right: 10px;
  }
`;
