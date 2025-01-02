
const Landing=()=>{
    return (
        <div className="landing-container">
            <h1 className="landing-title zoom-out-class">Hi, I am Anish Kumar</h1><br/>
            <span>
                A Software Engineer specializing in web development, cloud technologies, and automated deployments.<br/> 
                Focused on AI, Computer Vision, and exploring LLMs to build intelligent and scalable solutions.<br/><br/>
                <i>"Keep your face always toward the sunshine, shadows will fall behind you." - Walt Whitman</i><br/><br/>
            </span>
            <div>
                <a href="#experience" className="button-wrap rounded"><button className="btn rounded text-white">EXPERIENCE</button></a>&nbsp;
                <a href="#projects" className="button-wrap rounded"><button className="btn rounded text-white">PROJECTS</button></a>
            </div>
            <div className="landing-social fade-right-class">
                <span style={{'display':'flex','flexDirection':'column','justifyContent':'space-between','height':'220px'}}>
                    <a href="https://www.linkedin.com/in/anish227"><i className="fa-brands fa-linkedin" aria-hidden></i></a>
                    <a href="https://github.com/anish2272002"><i className="fa-brands fa-github" aria-hidden></i></a>
                    <a href="https://www.instagram.com/anish__72002"><i className="fa-brands fa-instagram" aria-hidden></i></a>
                    <a href="mailto:anish2272002@gmail.com"><i className="fa-solid fa-envelope" aria-hidden></i></a>
                </span>
            </div>
            <div className="scroll-downs">
                <div className="mousey">
                <div className="scroller"></div>
                </div>
            </div>
            <div className="bird bird-animation-class">
                <img src="/assets/birdo.gif" style={{"height":"100px","width":"100px"}} alt="bird"/>
            </div>
        </div>
    );
}

export default Landing;