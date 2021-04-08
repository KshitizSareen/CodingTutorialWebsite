import React, { Component } from "react";

class Footer extends Component {
  render() {
    if (!this.props.data) return null;

    const networks = this.props.data.social.map(function(network) {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });

    return (
      <section id="footer">
      <footer>
        <div className="row">
          <div className="twelve columns">
          <p style={{color: 'white',alignSelf: 'center',fontSize: 20}}>Phone Number: +256706121515</p>
            <ul className="social-links">{networks}</ul>
          </div>
          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
      </section>
    );
  }
}

export default Footer;
