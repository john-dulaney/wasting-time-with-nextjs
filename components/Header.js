import Link from "next/link";

export default () => (
    <nav>
        <ul id="navList">
            <li class="listItem">
                <Link href="/" class="navItem">
                    <a>Home</a>
                </Link>
            </li>
            <li class="listItem">
                <Link href="/about" class="navItem">
                    <a>About</a>
                </Link>
            </li>
            <li class="listItem">
                <Link href="/projects" class="navItem">
                    <a>Projects</a>
                </Link>
            </li>
            <li class="listItem">
                <Link href="/contact" class="navItem">
                    <a>Contact</a>
                </Link>
            </li>
        </ul>
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

    .listItem {
        margin-right: 20px;
        list-style: none;
        float: left;
    }

    .listItem a {
        color: black;
        text-decoration: none;
    }
    `}</style>
    </nav>
);