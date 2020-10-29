import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import styled from "styled-components";
import {
  faFacebook,
  faFacebookMessenger,
  faGoogle,
  faReddit,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { InfoConsumer } from "../context";
import Reviews from "../Reviews";

export default class Details extends Component {
  render() {
    return (
      <InfoConsumer>
        {(data) => {
          const {
            headerTitle,
            headerText,
            img,
            title,
            maps,
            description,
          } = data.detailInfo;

          return (
            <React.Fragment>
              <HeaderDetails className="container-fluid align-items-center">
                <h1 className="display-1 font-weight-bold">{headerTitle}</h1>
                <p>{headerText}</p>
                {/* Social Icons */}
                <div className="container mt-5">
                  <div className="row justify-content-center">
                    <div className="col-2">
                      <FontAwesomeIcon
                        icon={faFacebook}
                        style={{
                          fontSize: "1.875rem",
                          color: "var(--mainDark)",
                        }}
                      />
                    </div>
                    <div className="col-2">
                      <FontAwesomeIcon
                        icon={faTwitter}
                        style={{
                          fontSize: "1.875rem",
                          color: "var(--mainDark)",
                        }}
                      />
                    </div>
                    <div className="col-2">
                      <FontAwesomeIcon
                        icon={faGoogle}
                        style={{
                          fontSize: "1.875rem",
                          color: "var(--mainDark)",
                        }}
                      />
                    </div>
                    <div className="col-2">
                      <FontAwesomeIcon
                        icon={faReddit}
                        style={{
                          fontSize: "1.875rem",
                          color: "var(--mainDark)",
                        }}
                      />
                    </div>
                    <div className="col-2">
                      <FontAwesomeIcon
                        icon={faWhatsapp}
                        style={{
                          fontSize: "1.875rem",
                          color: "var(--mainDark)",
                        }}
                      />
                    </div>
                    <div className="col-2">
                      <FontAwesomeIcon
                        icon={faFacebookMessenger}
                        style={{
                          fontSize: "1.875rem",
                          color: "var(--mainDark)",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </HeaderDetails>
              {/* Nav Link */}
              <div className="container">
                <ul className="nav nav-tabs">
                  {/* About Place Link  */}
                  <li className="nav-item">
                    <a
                      href="#aboutPlace"
                      className="nav-link active"
                      role="tab"
                      data-toggle="tab"
                    >
                      About Place
                    </a>
                  </li>

                  {/* Reviews Link  */}
                  <li className="nav-item">
                    <a
                      href="#reviews"
                      className="nav-link"
                      role="tab"
                      data-toggle="tab"
                    >
                      Reviews
                    </a>
                  </li>

                  {/* Map Link  */}
                  <li className="nav-item">
                    <a
                      href="#map"
                      className="nav-link"
                      role="tab"
                      data-toggle="tab"
                    >
                      Map
                    </a>
                  </li>
                </ul>
                {/* Tab Pane  */}
                <div className="tab-content mb-5">
                  {/* About Place Tab  */}
                  <div
                    id="aboutPlace"
                    className="tab-pane in active text-center mt-5"
                    role="tabpanel"
                  >
                    <h2 className="mb-3">{title}</h2>
                    <p>{description}</p>
                    <img
                      className="img-thumbnail img-fluid"
                      src={img}
                      alt={title}
                    />
                  </div>
                  {/* Reviews  */}
                  <div className="tab-pane" id="reviews" role="tabpanel">
                    <Reviews />
                  </div>
                  {/* Map  */}
                  <div className="tab-pane" id="map" role="tabpanel">
                    <iframe
                      src={maps}
                      style={{
                        border: "0",
                        height: "28.125rem",
                        width: "100%",
                        frameborder: "0",
                      }}
                    ></iframe>
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
        }}
      </InfoConsumer>
    );
  }
}

const HeaderDetails = styled.header`
  background: linear-gradient(rgba(109, 109, 109), rgba(255, 255, 255));
  height: 100vh;
  text-transform: uppercase;
  color: var(--mainWhite);
  text-align: center;

  h1 {
    padding-top: 10%;
    color: var(--mainDark);
  }

  h4 {
    color: var(--mainDark);
  }

  p {
    padding-left: 10%;
    padding-right: 10%;
    margin-bottom: 10%;
    color: var(--mainDark);
  }

  .nav-item {
    height: 18.75rem;
  }

  @media (max-width: 760px) {
    h1,
    h4 {
      color: var(--mainWhite);
    }
  }
`;
