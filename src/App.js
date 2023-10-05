import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Whatsapp from "./components/whatsapp";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.scss";

import client from "./client";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      foo: "bar",
      loading: true,
      projects: [],
      about: {},
      skill: [],
    };
  }

  async fetchData() {
    try {
      const [about, skills, projects, services, experiences, testimonials] =
        await Promise.all([
          client.fetch(`*[_type == "aboutMe"]`),
          client.fetch(`*[_type == "skill"]`),
          client.fetch(`*[_type == "project"]`),
          client.fetch(`*[_type == "service"]`),
          client.fetch(`*[_type == "experience"]`),
          client.fetch(`*[_type == "testimonial"]`),
        ]);

      this.setState({
        about,
        skill: skills,
        projects,
        services,
        experiences,
        testimonials,
        loading: false,
      });
    } catch (error) {
      alert(error);
      this.setState({ loading: false });
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const { loading } = this.state;
    return (
      <>
        {loading ? (
          <div className="loading">
            <div className="loader"></div>
          </div>
        ) : (
          <div>
            <Navbar about={this.state.about} />
            <Whatsapp about={this.state.about} />
            <Header about={this.state.about} />
            <div className="col-md-12 mx-auto text-center language">
              <div onClick={() => {}} style={{ display: "none" }}>
                <span
                  className="iconify language-icon mr-5"
                  data-icon="twemoji-flag-for-flag-united-kingdom"
                  data-inline="false"
                ></span>
              </div>
              <div onClick={() => {}} style={{ display: "none" }}>
                <span
                  className="iconify language-icon"
                  data-icon="twemoji-flag-for-flag-poland"
                  data-inline="false"
                ></span>
              </div>
            </div>
            <About about={this.state.about} />
            <Projects projects={this.state.projects} />
            <Skills skill={this.state.skill} />
            <Services services={this.state.services} />
            <Experience experiences={this.state.experiences} />
            <Testimonials testimonials={this.state.testimonials} />
            <Contact about={this.state.about} />
            <Footer about={this.state.about} />
          </div>
        )}
      </>
    );
  }
}

export default App;
