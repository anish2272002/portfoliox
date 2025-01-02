'use client'
import { skillsArr } from "@/app/data";
import { useRef, useState } from "react";

const About=()=>{
    const [skills,setSkills]=useState(skillsArr);
    const dragItem = useRef();
    const dragOverItem = useRef();
    const handleSort = () => {
        //duplicate items
        let _skills = [...skills];
    
        //remove and save the dragged item content
        const draggedItemContent = _skills.splice(dragItem.current, 1)[0];
    
        //switch the position
        _skills.splice(dragOverItem.current, 0, draggedItemContent);
    
        //reset the position ref
        dragItem.current = null;
        dragOverItem.current = null;
    
        //update the actual array
        setSkills(_skills);
      };
    return (
        <>
        <a name="about"></a>
        <div className="cont">
            <h1>ABOUT ME</h1>
            <hr style={{"border":"3px solid #137afd","width":"5%","opacity":"1","borderRadius":"2rem"}}/><br/>
            <span className="text-center">
                Here you will find more information about me, what I do, <br/>
                and my current skills mostly in terms of programming and technology.
            </span><br/>
            <div className="row w-100">
                <div className="col-md-6 my-3">
                    <h3>Get to know me!</h3>
                    <span style={{"opacity":"0.8"}}>
                        <p>
                            I am an <b>ML Engineer</b> specializing in Computer Vision and Conversational AI, with a passion for researching, building, and deploying machine learning models that solve real-world problems.
                        </p>
                        <p>
                            As a <b>Web Developer</b>, I create dynamic websites and web applications that contribute to the success of the product. You can explore some of my projects in the Projects section.
                        </p>
                        <p>
                            I am open to new job opportunities where I can contribute my skills, learn, and grow. If you have an opportunity that aligns with my experience, feel free to reach out or follow me on
                            <a href="https://www.linkedin.com/in/anish227"><span style={{"fontWeight":"bold","color":"#137afd"}}> Linkedin.</span></a>
                        </p>
                    </span>
                    <a href="mailto:anish2272002@gmail.com"><button className="btn btn-lg rounded text-white" style={{"backgroundColor":"#137afd"}}>CONTACT</button></a>
                </div>
                <div className="col-md-6 my-3 skills">
                    <h3>My Skills</h3>
                        {skills.map((skill,index)=>(
                            <span draggable 
                            className="badge text-dark m-2 p-3" 
                            style={{'cursor':'move'}}
                            onDragStart={(e) => (dragItem.current = index)}
                            onDragEnter={(e) => (dragOverItem.current = index)}
                            onDragEnd={handleSort}
                            onDragOver={(e) => e.preventDefault()} 
                            key={index}>
                                {skill}
                            </span>))
                        }
                </div>
            </div>
        </div>
        </>
    );
}

export default About;