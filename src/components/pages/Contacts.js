import { faTelegramPlane } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Contacts extends Component {
  render() {
    return (
      <section className="my-5 py-5">
        <div className="container">
          <div className="well well-sm">
            <h3>
              <strong>Our Location</strong>
            </h3>
          </div>
          <div className="row">
            <div className="col-md-7">
              <iframe
                title="AVJ"
                src="https://www.google.com/maps/d/u/0/embed?mid=12CGqUgRXn2-OFAYXlDnI8Q-Y0R2BTOPI"
                style={{
                  border: "0",
                  width: "100%",
                  height: "315px",
                  frameborder: "0",
                }}
                allowFullScreen
              ></iframe>
            </div>
            <div className="col-md-5">
              <h4>
                <strong>Contact Us</strong>
                <form>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Phone"
                    />
                  </div>
                  <textarea
                    className="form-control"
                    cols="30"
                    rows="3"
                    placeholder="Message"
                  />
                  <Link className="btn btn-outline-primary text-uppercase mt-2">
                    
                    <FontAwesomeIcon icon={faTelegramPlane}  />
                    &nbsp; Send
                  </Link>
                </form>
              </h4>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
