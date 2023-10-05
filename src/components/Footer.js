import React, { Component } from "react";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      about: {},
    };
  }

  render() {
    const about = this.props.about[0];
    if (about) {
      var networks = about.social.map(function (network) {
        return (
          <span key={network.title} className="m-4">
            <a href={network.link} target="_blank" rel="noopener noreferrer">
              <i className={`fab fa-${network.title.toLowerCase()}`}></i>
            </a>
          </span>
        );
      });
    }

    return (
      <footer>
        <div className="col-md-12">
          <div className="social-links">{networks}</div>

          <div className="copyright py-4 text-center">
            <div className="container">
              <small>Copyright &copy; {about ? about.name : "???"}</small>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
