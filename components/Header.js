import Link from "next/link";

export default () => (
    <nav>
        <Link href="/" class="navItem">
            <a>Home</a>
        </Link>
        <Link href="/about" class="navItem">
            <a>About</a>
        </Link>
        <Link href="/projects" class="navItem">
            <a>Projects</a>
        </Link>
        <Link href="/contact" class="navItem">
            <a>Contact</a>
        </Link>
        
    <style jsx>{`
      nav {
        background-color: white;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 80px;
        display: flex;
        align-items: center;
        box-shadow: 0 0 25px 0 black;
    }
    
    nav * {
        display: inline;
    }

    .navItem {
        margin: 20px;
    }

    .navItem a {
        color: black;
        text-decoration: none;
    }
    `}</style>
    </nav>
);