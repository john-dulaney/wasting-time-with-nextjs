import { Component } from "react";
import AboutBody from "../components/AboutBody";
import Header from "../components/Header";
import Error from "../components/Error";
import fetch from "isomorphic-unfetch"

class AboutPage extends Component {
  static getInitialProps() {
    const isServer = typeof window === "undefined";
    return { isServer };
  }


  render() {
    return (
      <main>
        {this.props.isServer ? <Header /> : <Error />}
        <section>
          <p>
            {" "}
            {this.props.isServer ? <AboutBody /> : <Error />}
          </p>
        </section>
      </main>
    );
  }
}

export default AboutPage;