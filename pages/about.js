import { Component } from "react";
import AboutBody from "../components/AboutBody";
import Header from "../components/Header";

class AboutPage extends Component {
  static getInitialProps() {
    const isServer = typeof window === "undefined";
    return { isServer };
  }
  render() {
    return (
      <main>
        <Header />
        <section>
          <p>
            {/* {" "} */}
            {this.props.isServer ? <AboutBody /> : "client"}
          </p>
        </section>
      </main>
    );
  }
}

export default AboutPage;