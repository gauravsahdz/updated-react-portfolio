import React, { Component } from "react";
import Badge from "react-bootstrap/Badge";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedExperinece: null,
    };
  }

  render() {
    const experiences = this.props.experiences;

    var work = experiences.map(function (work, i) {
      const mainTechnologies = work.technologies;

      var mainTech = mainTechnologies.map((technology, i) => {
        return (
          <Badge pill className="main-badge mr-2 mb-2" key={i}>
            {technology}
          </Badge>
        );
      });
      return (
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={work.startDate + " - " + work.endDate}
          iconStyle={{
            background: "#AE944F",
            color: "#fff",
            textAlign: "center",
          }}
          icon={<i className="fab fa-angular experience-icon"></i>}
          key={i}
        >
          <div style={{ textAlign: "left", marginBottom: "4px" }}>
            {mainTech}
          </div>

          <h3
            className="vertical-timeline-element-title"
            style={{ textAlign: "left" }}
          >
            {work.position}
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
            style={{ textAlign: "left" }}
          >
            {work.company}
          </h4>
        </VerticalTimelineElement>
      );
    });

    return (
      <section id="resume" className="pb-5">
        <div className="col-md-12 mx-auto">
          <div className="col-md-12">
            <h1 className="section-title" style={{ color: "black" }}>
              <span className="text-black" style={{ textAlign: "center" }}>
                Experience
              </span>
            </h1>
          </div>
        </div>
        <div className="col-md-8 mx-auto">
          <VerticalTimeline>
            {work}
            <VerticalTimelineElement
              iconStyle={{
                background: "#AE944F",
                color: "#fff",
                textAlign: "center",
              }}
              icon={
                <i className="fas fa-hourglass-start mx-auto experience-icon"></i>
              }
            />
          </VerticalTimeline>
        </div>
      </section>
    );
  }
}

export default Experience;
