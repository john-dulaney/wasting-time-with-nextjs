import Link from "next/link";

export default () => (
    <nav>
        <Link href="/">
            <a>Home</a>
        </Link>
        <Link href="/about">
            <a>About</a>
        </Link>
        <Link href="/">
            <a>Projects</a>
        </Link>
        <Link href="/">
            <a>Contact</a>
        </Link>
        
    <style jsx>{`
      nav {
        Background-color: black;
        font-color: White;
      }
    `}</style>
    </nav>
);