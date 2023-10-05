import React, { Component } from "react";
import client from "../client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}
class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedService: null,
    };
  }

  render() {
    const services = this.props.services;

    var servicesList = services.map(function (service, i) {
      return (
        <div
          className="col-sm-12 col-md-6 col-lg-4"
          key={service.title}
          style={{ cursor: "pointer" }}
        >
          <span className="portfolio-item d-block">
            <div className="foto">
              <div>
                <img
                  src={urlFor(service.thumbnail).url()}
                  alt="serviceImages"
                  height="230"
                  style={{ marginBottom: 5 }}
                />
                <span className="service-desc">{service.description}</span>
                <br />
                <p className="service-title-settings mt-3">{service.title}</p>
              </div>
            </div>
          </span>
        </div>
      );
    });

    return (
      <section id="service">
        <div className="col-md-12">
          <h1 className="section-title" style={{ color: "black" }}>
            <span>Services</span>
          </h1>
          <div className="col-md-12 mx-auto">
            <div className="row mx-auto">{servicesList}</div>
          </div>
        </div>
      </section>
    );
  }
}

export default Services;
