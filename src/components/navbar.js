
const NavBar=()=>{
    return (
        <header>
        <nav className="navbar fixed-top navbar-expand-md nav-class">
            <div className="navbar-header me-3 zoom-in-class">
                <a href="">
                    <img src="/assets/me/anish.jpg" style={{"height":"50px","borderRadius":"100%"}} alt="photo"/>
                </a>
            </div>
            <div className="navbar-header zoom-in-class">
                <a href="">
                    <span>ANISH KUMAR</span>
                </a>
            </div>
            <button className="navbar-toggler text-white" data-bs-toggle="collapse" data-bs-target="#mycollapse">
                <i className="fas fa-bars" aria-hidden></i>
            </button>
            <div className="collapse navbar-collapse my-3" style={{"justifyContent":"end"}} id="mycollapse">
                <ul className="navbar-nav">
                    <li className="nav-item"><a className="nav-link" href="#about">
                        ABOUT
                    </a></li>
                    <li className="nav-item"><a className="nav-link" href="#experience">
                        EXPERIENCE
                    </a></li>
                    <li className="nav-item"><a className="nav-link" href="#projects">
                        PROJECTS
                    </a></li>
                    <li className="nav-item"><a className="nav-link" href="#certificate">
                        CERTIFICATIONS
                    </a></li>
                    <li className="nav-item"><a className="nav-link" href="#extra">
                        EXTRA-CURICULAR
                    </a></li>
                </ul>
            </div>
        </nav>
        </header>
    )
}
export default NavBar;