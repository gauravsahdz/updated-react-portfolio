import React, { Component } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";
import client from "../client";

import imageUrlBuilder from "@sanity/image-url";
import { Dropdown } from "react-bootstrap";

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailsModalShow: false,
      selectedProject: null,
      showAllProjects: false, // State to control whether to show all projects or not
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

  // Function to toggle showing all projects
  toggleShowAllProjects = () => {
    this.setState((prevState) => ({
      showAllProjects: !prevState.showAllProjects,
    }));
  };

  render() {
    const { selectedProject, showAllProjects } = this.state;
    const { projects } = this.props;

    // Check if selectedProject is not null, then render project details modal
    const projectDetailsModal = selectedProject && (
      <ProjectDetailsModal
        show={this.state.detailsModalShow}
        onHide={this.detailsModalClose}
        data={selectedProject}
      />
    );

    // Determine which projects to render based on showAllProjects state
    const visibleProjects = showAllProjects ? projects : projects.slice(0, 6);

    return (
      <section id="portfolio">
        <div className="col-md-12">
          <h1 className="section-title" style={{ color: "black" }}>
            <span>Projects</span>
          </h1>
          <div className="col-md-12 mx-auto">
            <div className="row mx-auto">
              {visibleProjects.map((project) => (
                <div
                  className="col-sm-12 col-md-6 col-lg-4"
                  key={project._id}
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
                        <p className="project-title-settings mt-3">
                          {project.title}
                        </p>
                      </div>
                    </div>
                  </span>
                </div>
              ))}
            </div>
          </div>
          {projectDetailsModal}

          <div
            className="col-md-12 mx-auto"
            style={{ textAlign: "center", marginTop: 20 }}
          >
            <Dropdown>
              <Dropdown.Toggle
                variant="success"
                id="dropdown-basic"
                style={{ backgroundColor: "black", borderColor: "black" }}
                size="lg"
                onClick={this.toggleShowAllProjects}
              >
                {showAllProjects ? "Show Less" : "See More"}
              </Dropdown.Toggle>
            </Dropdown>
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
