import Link from "next/link";

export default function Header() {
    return (
        <>
            <header id="site-header" className="fixed-top bg-white">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <Link href="/" className="navbar-brand"><i className="fas fa-solid fa-image"></i>Photo Post</Link>
                        <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon fa icon-expand fa-bars"></span>
                            <span className="navbar-toggler-icon fa icon-close fa-times"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarScroll">
                            <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll">
                                <li className="nav-item">
                                    <Link href="/" className="nav-link" aria-current="page">Home</Link>
                                </li>
                                <li >
                                    <Link href="/photo/review" className="nav-link" aria-current="page">Review Photo</Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/photo/upload" className="nav-link" aria-current="page">Upload Photo</Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/individual/login" className="nav-link">LogIn</Link>
                                </li>
                                <li className="nav-item">
                                    <Link  href="/" className="nav-link">Logout</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
}