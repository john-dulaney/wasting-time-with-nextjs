import { Component } from "react";
import AboutBody from "../components/AboutBody";
import Header from "../components/Header";
import Error from "../components/Error"

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
            {" "}
            {this.props.isServer ? <AboutBody /> : <Error />}
          </p>
        </section>
      </main>
    );
  }
}

export default AboutPage;