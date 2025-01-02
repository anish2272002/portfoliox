"use client"
import { useState } from "react";
import { certificationData } from "@/app/data";

const Certificate=(props)=>{
    const [showCertificate,setShowCertificate]=useState(false)
    return(
        <>
        <div className="rounded p-3 my-2 certibox" onClick={()=>setShowCertificate(!showCertificate)}>
            {props.title}
        </div>
        {showCertificate && 
        <div className="certioverlay">
            <div>
                <button onClick={()=>setShowCertificate(false)} type="button" class="btn btn-dark"><i class="fa-solid fa-xmark"></i></button>
                <img src={`assets/certification/${props.img}`} alt={props.title} class="img-fluid rounded" style={{"width":"100%"}}/>
            </div>
        </div>
        }
        </>
    );
}

const Certifications=()=>{
    return (
        <>
        <a name="certificate"></a>
        <div className="cont" style={{"backgroundColor":"#137afd","color":"#fff"}}>
            <h1>CERTIFICATIONS</h1>
            <hr style={{"border":"3px solid #400139","width":"5%","opacity":"1","borderRadius":"2rem"}}/>
            <br/><span className="text-center">
                Here you will find a few certifications that I have completed till now.
            </span><br/>
            <div className="row w-100" style={{"color":"rgba(255,255,255,0.8)","fontSize":"1rem","justifyContent":"center"}}>
                {certificationData.map((data)=>
                    <Certificate key={certificationData.indexOf(data)} title={data.title} img={data.img}/>
                )}
            </div>
        </div>
        </>
    );
}

export default Certifications;