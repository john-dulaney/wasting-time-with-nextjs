import Link from "next/link";
import Link from "../components/Body";


export default () => (
  <main>
    <p>Welcome to Next.js!</p>
    <Body />
    <Link href="/john">
      <a>See John.js</a>
    </Link>
    </main>
  )