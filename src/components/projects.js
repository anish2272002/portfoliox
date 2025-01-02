import ProjectCard from "./projectCard";
import { projectData } from "@/app/data";

const Projects=()=>{
    return (
        <>
        <a name="projects"></a>
        <div className="cont" style={{"backgroundColor":"white"}}>
            <h1>PROJECTS</h1>
            <hr style={{"border":"3px solid rgb(10, 173, 1)","width":"5%","opacity":"1","borderRadius":"2rem"}}/>
            <br/><span className="text-center">
                Here you will find some of the projects that I have created with brief discription.
            </span><br/>
            <div className="row w-100" style={{"color":"rgba(0,0,0,0.8)","fontSize":"1rem"}}>
                {projectData.map((projectDataItem)=>{
                    return <ProjectCard key={projectData.indexOf(projectDataItem)} data={projectDataItem}/>
                })}
            </div>
        </div>
        </>
    );
}

export default Projects;