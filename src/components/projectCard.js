const ProjectCard=(props)=>{
    return (
        <>
        <div className="col-lg-3 col-md-6 my-3 text-center">
            <picture>
                <source media="(max-width:720px)" srcSet={`assets/project/${props.data.img}`}/>
                <img src={`assets/project/${props.data.img}`} alt="referqik" className="img-fluid" style={{"maxHeight":"250px","borderRadius":"0.8rem"}}/>
            </picture>
        </div>
        <div className="col-lg-3 col-md-6 my-3">
            <h4>{props.data.title}</h4>
            <p><span dangerouslySetInnerHTML={{__html:props.data.description}}>
            </span></p>
            <p>
            {props.data.github && 
            <a href={props.data.github}><button className="btn text-white" style={{"backgroundColor":"rgb(10, 173, 1)","padding":"0.3rem 0.5rem","display":"inline-block"}}>
                <i className="fa-brands fa-github" aria-hidden></i>&nbsp;&nbsp;GitHub
            </button></a>
            }
            {props.data.website &&
            <a href={props.data.website}><button className="btn text-white btn-dark m-1" style={{"padding":"0.3rem 0.5rem","display":"inline-block"}}>
                <i className="fa-solid fa-globe" aria-hidden></i>&nbsp;&nbsp;Website
            </button></a>}
            </p>
        </div>
        </>
    );
}
export default ProjectCard;