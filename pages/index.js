import Link from "next/link";
import Body from "../components/Body";


export default () => (
  <main>
    <p>Welcome to Next.js!</p>
    <Body />
    <Link href="/john">
      <a>See John.js</a>
    </Link>
    <Link href="/about">
      <a>See Server Rendered React </a>
    </Link>
    </main>
  )