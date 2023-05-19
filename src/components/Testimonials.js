import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

class Testimonials extends Component {
    render() {
        if (this.props.resumeTestimonials && this.props.resumeBasicInfo) {
            var sectionName = this.props.resumeBasicInfo.section_name.testimonials;
            var testimonials = this.props.resumeTestimonials.map(function (testimonial, i) {
                return (
                    <Carousel.Item key={i}>
                        <div className="testimonial-item">
                            <img src={testimonial.image} className="profile-image" alt={testimonial.name} />
                            <h3 className="testimonial-name">{testimonial.name}</h3>
                            <p className="testimonial-description">{testimonial.description}</p>
                        </div>
                    </Carousel.Item>
                );
            });
        }

        return (
            <section id="testimonial">
                <div className="col-md-12 p-4">
                    <h1 className="section-title" style={{ color: 'black' }}>
                        <span>{sectionName}</span>
                    </h1>
                    <div className="col-md-12 mx-auto">
                        <Carousel>{testimonials}</Carousel>
                    </div>
                </div>
            </section>
        );
    }
}

export default Testimonials;
