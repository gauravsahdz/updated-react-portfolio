import React, { Component } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";
import client from "../client";

import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailsModalShow: false,
      selectedProject: null, // Store the selected project data
    };
  }

  // Function to open the project details modal
  detailsModalShow = (project) => {
    this.setState({ detailsModalShow: true, selectedProject: project });
  };

  // Function to close the project details modal
  detailsModalClose = () => {
    this.setState({ detailsModalShow: false, selectedProject: null });
  };

  render() {
    const { selectedProject } = this.state;

    // Check if selectedProject is not null, then render project details modal
    const projectDetailsModal = selectedProject && (
      <ProjectDetailsModal
        show={this.state.detailsModalShow}
        onHide={this.detailsModalClose}
        data={selectedProject}
      />
    );

    let projects = [];

    if (this.props.projects) {
      projects = this.props.projects.map((project) => (
        <div
          className="col-sm-12 col-md-6 col-lg-4"
          key={project._id} // Use a unique key, like the project's _id
          style={{ cursor: "pointer" }}
        >
          <span className="portfolio-item d-block">
            <div
              className="foto"
              onClick={() => this.detailsModalShow(project)}
            >
              <div>
                <img
                  src={urlFor(project.thumbnail).url()}
                  alt="projectImages"
                  height="230"
                  style={{ marginBottom: 5 }}
                />
                <span className="project-date">{project.date}</span>
                <br />
                <p className="project-title-settings mt-3">{project.title}</p>
              </div>
            </div>
          </span>
        </div>
      ));
    }

    return (
      <section id="portfolio">
        <div className="col-md-12">
          <h1 className="section-title" style={{ color: "black" }}>
            <span>Projects</span>
          </h1>
          <div className="col-md-12 mx-auto">
            <div className="row mx-auto">{projects}</div>
          </div>
          {projectDetailsModal}
        </div>
      </section>
    );
  }
}

export default Projects;
