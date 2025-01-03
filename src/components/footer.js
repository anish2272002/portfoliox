const Footer=()=>{
    return (
        <footer>
            <div className="row">
                <div className="col-md-8 mt-4">
                    <h3>ANISH KUMAR</h3>
                    <span style={{"opacity":"0.8","marginTop":"1.5rem","fontWeight":"100"}}>
                        Software Engineer specializing in web development and cloud deployments.<br/>
                        Focused on AI, Computer Vision, and LLMs to create intelligent, scalable solutions.
                    </span>
                </div>
                <div className="col-md-4 mt-4">
                    <h3>SOCIAL</h3>
                    <span style={{"opacity":"0.8","marginTop":"1.5rem","fontSize":"1.5rem"}}>
                        <a href="https://www.linkedin.com/in/anish227"><i className="fa-brands fa-linkedin" aria-hidden="true"></i></a>&nbsp;
                        <a href="https://github.com/anish2272002"><i className="fa-brands fa-github" aria-hidden="true"></i></a>&nbsp;
                        <a href="https://www.instagram.com/anish__72002"><i className="fa-brands fa-instagram" aria-hidden="true"></i></a>&nbsp;
                        <a href="mailto:anish2272002@gmail.com"><i className="fa-solid fa-envelope" aria-hidden="true"></i></a>&nbsp;
                    </span>
                </div>
            </div>
            <hr style={{"border":"0.5px solid white","opacity":"0.8"}}/>
            <div style={{"width":"100%","textAlign":"center","fontSize":"0.8rem","opacity":"0.8"}}>Made By <strong style={{"opacity":"1"}}><a href="https://anishkumar.pages.dev">Anish Kumar</a></strong></div>
        </footer>
    );
}
export default Footer;