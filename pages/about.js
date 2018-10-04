import { Component } from "react";
import Link from "next/link";
// import Header from "../components/header";

class AboutPage extends Component {
  static getInitialProps() {
    const isServer = typeof window === "undefined";
    return { isServer };
  }
  render() {
    return (
      <main>
        {/* <Header /> */}
        <section>
          <p>
            {" "}
            <strong>{this.props.isServer ? "I am a server Rendered React component" : "client"}</strong>.
          </p>
          <Link href="/">
            <a>Go to Index.js</a>
          </Link>
        </section>
      </main>
    );
  }
}

export default AboutPage;