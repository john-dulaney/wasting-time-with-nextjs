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
            {this.props.isServer ? <AboutBody /> : "Nav is client side, my about page is server side, if you are seeing this reload. Working on how to make the server call on nav route."}
          </p>
        </section>
      </main>
    );
  }
}

export default AboutPage;