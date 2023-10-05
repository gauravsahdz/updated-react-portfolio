import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import imageUrlBuilder from "@sanity/image-url";
import client from "../client";

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

class Testimonials extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTestimonial: null,
    };
  }

  render() {
    const testimonials = this.props.testimonials;

    var testimonialsList = testimonials.map(function (testimonial, i) {
      return (
        <Carousel.Item key={i}>
          <div className="testimonial-item">
            <img
              src={urlFor(testimonial.image).url()}
              className="profile-image"
              alt={testimonial.clientName}
            />
            <h3 className="testimonial-name">{testimonial.clientName}</h3>
            <p className="testimonial-description">{testimonial.feedback}</p>
          </div>
        </Carousel.Item>
      );
    });

    return (
      <section id="testimonial">
        <div className="col-md-12 p-4">
          <h1 className="section-title" style={{ color: "black" }}>
            <span>Testimonials</span>
          </h1>
          <div className="col-md-12 mx-auto">
            <Carousel>{testimonialsList}</Carousel>
          </div>
        </div>
      </section>
    );
  }
}

export default Testimonials;
