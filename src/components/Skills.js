import React, { Component } from "react";

import client from "../client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skill: [],
    };
  }

  render() {
    const skillsData = this.props.skill;
    if (this.props.skill) {
      var skills = skillsData.map(function (skill, i) {
        return (
          <li className="list-inline-item mx-3" key={i}>
            <span>
              <div className="text-center skills-tile">
                <img
                  src={urlFor(skill.logo).url()}
                  alt="Avatar placeholder"
                  style={{ height: "50px", width: "50px" }}
                />
                <p
                  className="text-center"
                  style={{ fontSize: "80%", marginTop: "4px" }}
                >
                  {skill.title}
                </p>
              </div>
            </span>
          </li>
        );
      });
    }

    return (
      <section id="skills">
        <div className="col-md-12">
          <div className="col-md-12">
            <h1 className="section-title">
              <span className="text-white">Skills</span>
            </h1>
          </div>
          <div className="col-md-12 text-center">
            <ul className="list-inline mx-auto skill-icon">{skills}</ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
