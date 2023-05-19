import React, { Component } from 'react'

class Services extends Component {

    render() {
        if (this.props.resumeServices && this.props.resumeBasicInfo) {
            var sectionName = this.props.resumeBasicInfo.section_name.services;
            var services = this.props.resumeServices.map(function (services, i) {
                return (
                    <div
                        className="col-sm-12 col-md-6 col-lg-4"
                        key={services.title}
                        style={{ cursor: 'pointer' }}
                    >
                        <span className="portfolio-item d-block">
                            <div className="foto">
                                <div>
                                    <img
                                        src={services.image}
                                        alt="serviceImages"
                                        height="230"
                                        style={{ marginBottom: 5 }}
                                    />
                                    <span className="service-desc">{services.description}</span>
                                    <br />
                                    <p className="service-title-settings mt-3">
                                        {services.title}
                                    </p>
                                </div>
                            </div>
                        </span>
                    </div>
                );
            });
        }

        return (
            <section id="service">
                <div className="col-md-12">
                    <h1 className="section-title" style={{ color: 'black' }}>
                        <span>{sectionName}</span>
                    </h1>
                    <div className="col-md-12 mx-auto">
                        <div className="row mx-auto">{services}</div>
                    </div>
                </div>
            </section>

        );
    }
}

export default Services;