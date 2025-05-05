"use client"
import { useState} from "react";

const Experience = ()=>{
    const arr = [
        {
            'title':'CLUSTERING',
            'video':'aiml1.mp4',
            'description':'Processed historical data to build a <strong>corpus</strong> and encoded sentences using a sentence transformer. Generated clusters based on sentence similarity and <strong>named clusters</strong> by the most frequent words. Displayed the clustering results for analysis. Implemented a search feature to find related records through sentence similarity, enhancing data retrieval.',
        },
        {
            'title':'SHACK',
            'img':'Shack1.png',
            'description':'Built a frontend for an internal tool to store links, information, and credentials. Designed a <strong>responsive</strong>, user-friendly <strong>UI</strong> for easy updates and access. Later integrated in-page dashboards to monitor key metrics and improve usability.',
        },
        {
            'title':'STATISTICS',
            'img':'Screenshot_2024-12-29_072006.png',
            'description':'Cleaned and analyzed historical data to identify relevant information for measuring performance and trends. Extracted <strong>key insights</strong> to support data-driven <strong>decision-making</strong> and trend analysis.',
        },
        {
            'title':'GOOGLE EXTENSION',
            'img':'Screenshot_2024-12-29_082818.png',
            'description':'Created a browser extension to upload, clean, convert, and display data. The extension automatically processes data and presents it in a <strong>user-friendly</strong> format. Integrated notification <strong>alerts</strong> to keep users informed when necessary.',
        }]
    const [show,setShow]=useState(false)
    return (
        <>
        <a name="experience"></a>
        <div className="cont" style={{'background':'#5a00a6'}}>
            <h1 style={{'color':'#fff'}}>EXPERIENCE</h1>
            <hr style={{"border":"3px solid #d8ffd6","width":"5%","opacity":"1","borderRadius":"2rem"}}/><br/>
            
            <span className="text-center text-white">
                Here you'll find an overview of my professional roles, projects, and contributions in programming and technology. <br/>
                Each experience has helped me refine my skills and grow as a developer.
            </span><br/>

            <div className="row w-100" style={{"color":"rgba(255,255,255,0.8)","fontSize":"1rem"}}>
                <h3>SYNAMEDIA</h3>
                <div className="col-lg-6 col-md-12 my-3">
                    <video preload="none" poster="assets/experience/back.png" controls autoPlay controlsList="nodownload noremoteplayback" loop muted className="img-fluid" style={{"maxHeight":"60vh","borderRadius":"0.8rem"}}>
                        <source src="assets/experience/synamedia/manoranjan.mp4" type="video/mp4"/>
                    </video>
                </div>
                <div className="col-lg-6 col-md-12 my-3">
                    <h4>Manoranjan</h4>
                    <p><span>
                    Built a scalable chunk-based media streaming system supporting both live (SRT) and VOD inputs. Developed a segmenter to split incoming streams into discrete video, audio, and subtitle chunks. Designed a Redis-queued pipeline where each chunk is transcoded to <strong>multiple resolutions</strong> using FFmpeg, and packaged into CMAF-compliant HLS and DASH formats using Shaka Packager. Ensured seamless <strong>multi-language</strong> support and future DRM integration. Planned for efficient cloud distribution using MSO storage, CDN integration, and shield layers.
                    </span></p>
                    <div className="row">
                            <picture style={{"maxWidth":"100%"}}>
                                <source media="(max-width:720px)" srcSet="assets/experience/synamedia/marchitecture.png"/>
                                <img src="assets/experience/synamedia/marchitecture.png" alt="Manoranjan" className="img-fluid" style={{"borderRadius":"0.8rem"}}/>
                            </picture>
                    </div>
                </div>

                <div className="col-lg-6 col-md-12 my-3">
                    <video preload="none" poster="assets/experience/back.png" controls autoPlay controlsList="nodownload noremoteplayback" loop muted className="img-fluid" style={{"maxHeight":"60vh","borderRadius":"0.8rem"}}>
                        <source src="assets/experience/synamedia/Recording_2024-12-29_125416x4.mp4" type="video/mp4"/>
                    </video>
                </div>
                <div className="col-lg-6 col-md-12 my-3">
                    <h4>VALET</h4>
                    <p><span>
                        Developed a classifier to categorize case types and hosted an <strong>LLM</strong> on a local server for enhanced security. Designed an agent workflow using Langgraph, enabling dynamic user interactions to gather necessary details. Integrated the agent with a <strong>REST API</strong> and a persistent database for request processing. The API acts as a central controller, interacting with internal portals to fulfill requests. Containerized and orchestrated the API, automating deployment via <strong>CI/CD</strong> pipelines to ensure faster, more reliable updates.
                    </span></p>
                    <div className="row">
                            <video controls autoPlay controlsList="nodownload noremoteplayback" loop muted className="img-fluid" style={{"maxWidth":"50%","borderRadius":"1.2rem"}}>
                                <source src="assets/experience/synamedia/Recording_2024-12-29_124256x4.mp4" type="video/mp4"/>
                            </video>
                            <picture style={{"maxWidth":"50%"}}>
                                <source media="(max-width:720px)" srcSet="assets/experience/synamedia/vSNOW.png"/>
                                <img src="assets/experience/synamedia/vSNOW.png" alt="VALET" className="img-fluid" style={{"borderRadius":"0.8rem"}}/>
                            </picture>
                    </div>
                </div>

                <div className="col-lg-6 col-md-12 my-3">
                    <video preload="none" poster="assets/experience/back.png" controls autoPlay controlsList="nodownload noremoteplayback" loop muted className="img-fluid" style={{"maxHeight":"60vh","borderRadius":"0.8rem"}}>
                        <source src="assets/experience/synamedia/Recording_2024-12-29_115324x4.mp4" type="video/mp4"/>
                    </video>
                </div>
                <div className="col-lg-6 col-md-12 my-3">
                    <h4>ANI</h4>
                    <p><span>
                    Built a knowledge base from cleaned historical snow data and manuals, generating embeddings using the SBERT model. Stored embeddings in a <strong>FAISS</strong> vector store for efficient retrieval. Prepared training data for fine-tuning the <strong>Llama2</strong> model with transfer learning. Enabled user interaction through Chainlit and implemented a <strong>RAG</strong> architecture for efficient query processing.
                    </span></p>
                    <div className="row">
                        <picture style={{"maxWidth":"50%"}}>
                            <source media="(max-width:720px)" srcSet="assets/experience/synamedia/architecture.jpg"/>
                            <img src="assets/experience/synamedia/architecture.jpg" alt="ANI" className="img-fluid" style={{"borderRadius":"0.8rem"}}/>
                        </picture>
                        <picture style={{"maxWidth":"50%"}}>
                            <source media="(max-width:720px)" srcSet="assets/experience/synamedia/IMG-20240917-WA0005.jpg"/>
                            <img src="assets/experience/synamedia/IMG-20240917-WA0005.jpg" alt="ANI" className="img-fluid" style={{"borderRadius":"0.8rem"}}/>
                        </picture>
                    </div>
                </div>

                <span className="text-center my-2">
                In addition to the core development work, I also gained expertise in media technologies and their integration within cloud infrastructure. <br/>
                This included working with AWS infrastructure to support media workflows, optimizing content delivery through CDNs, <br/>
                implementing transcoding and scrambling for secure content distribution, and managing origin servers for efficient media streaming and delivery.
                </span><br/>

                {show && arr.map((item)=>(
                    <>
                    <div className="col-lg-3 col-md-6 my-3">
                        {item.video && 
                        <video preload="none" poster="assets/experience/back.png" controls autoPlay controlsList="nodownload noremoteplayback" loop muted className="img-fluid" style={{"maxHeight":"60vh","borderRadius":"0.8rem"}}>
                            <source src={`assets/experience/synamedia/${item.video}`} type="video/mp4"/>
                        </video>}
                        {item.img &&
                        <picture style={{"maxWidth":"50%"}}>
                            <source media="(max-width:720px)" srcSet={`assets/experience/synamedia/${item.img}`}/>
                            <img src={`assets/experience/synamedia/${item.img}`} alt={item.title} className="img-fluid" style={{"borderRadius":"0.8rem"}}/>
                        </picture>
                        }
                    </div>
                    <div className="col-lg-3 col-md-6 my-3">
                        <h4>{item.title}</h4>
                        <p><span dangerouslySetInnerHTML={{__html:item.description}}>
                        </span></p>
                    </div>
                    </>
                ))}

                <div className="text-center">
                    <button onClick={()=>setShow(!show)} type="button" className="btn btn-outline-success">
                        <i className={"fa-solid fa-circle-chevron-"+(show?"up":"down")} aria-hidden="true"></i>
                        &nbsp;
                        {show?<span>Less</span>:<span>More</span>}
                    </button>
                </div>

                <hr className="my-3"/>
                <h3>On Demand Experts</h3>
                <div className="col-lg-6 col-md-12 my-3">
                    <video preload="none" poster="assets/experience/back.png" controls autoPlay controlsList="nodownload noremoteplayback" loop muted className="img-fluid" style={{"maxHeight":"60vh","borderRadius":"0.8rem"}}>
                        <source src="assets/experience/referqik/referqik-demo-4.mp4" type="video/mp4"/>
                    </video>
                </div>
                <div className="col-lg-6 col-md-12 my-3">
                    <h4>referqik</h4>
                    <p><span>
                    Prepared a comprehensive design document outlining the app's architecture and functionality. Created a detailed UI prototype using <strong>Figma</strong>, ensuring an intuitive and responsive user experience. Developed a full-stack web application leveraging <strong>AWS Amplify</strong> for backend services, <strong>NextJS</strong> for frontend development, and integrated Facebook Graph API with <strong>GraphQL</strong> for dynamic data retrieval. Focused on implementing SEO best practices to enhance search engine ranking and improve overall discoverability.
                    </span></p>
                    <div className="row">
                        <picture style={{"maxWidth":"50%"}}>
                            <source media="(max-width:720px)" srcSet="assets/experience/referqik/referqik.jpeg"/>
                            <img src="assets/experience/referqik/referqik.jpeg" alt="referqik" className="img-fluid" style={{"borderRadius":"0.8rem"}}/>
                        </picture>
                        <picture style={{"maxWidth":"50%"}}>
                            <source media="(max-width:720px)" srcSet="assets/experience/referqik/cropped.jpg"/>
                            <img src="assets/experience/referqik/cropped.jpg" alt="referqik" className="img-fluid" style={{"borderRadius":"0.8rem"}}/>
                        </picture>
                    </div>
                </div>

                <hr className="my-3"/>
                <h3>SAMSUNG PRISM</h3>
                <div className="col-lg-6 col-md-12 my-3">
                    <video preload="none" poster="assets/experience/back.png" controls autoPlay controlsList="nodownload noremoteplayback" loop muted className="img-fluid" style={{"maxHeight":"60vh","borderRadius":"0.8rem"}}>
                        <source src="assets/experience/samsung/pitfig.mp4" type="video/mp4"/>
                    </video>
                </div>
                <div className="col-lg-6 col-md-12 my-3">
                    <h4>PitFig</h4>
                    <p><span>
                    Collected and preprocessed the training dataset for pothole detection, ensuring high-quality data for model accuracy. Designed and implemented an <strong>algorithm</strong> to count the number of potholes in video footage, ensuring no repetition. Built and trained a <strong>machine learning</strong> model to effectively identify potholes from video data. Developed a user-friendly <strong>Android</strong> app to deploy the model, enabling real-time pothole detection and reporting directly from mobile devices.
                    </span></p>
                    <div className="row">
                        <picture style={{"maxWidth":"50%"}}>
                            <source media="(max-width:720px)" srcSet="assets/experience/samsung/Camera.jpg"/>
                            <img src="assets/experience/samsung/Camera.jpg" alt="pitfig" className="img-fluid" style={{"borderRadius":"0.8rem"}}/>
                        </picture>
                        <picture style={{"maxWidth":"50%"}}>
                            <source media="(max-width:720px)" srcSet="assets/experience/samsung/IMG-20240526-WA0001.jpg"/>
                            <img src="assets/experience/samsung/IMG-20240526-WA0001.jpg" alt="pitfig" className="img-fluid" style={{"borderRadius":"0.8rem"}}/>
                        </picture>
                    </div>
                </div>

                <hr className="my-3"/>
                <h3>B.N.M Institute of Technology</h3>
                <div className="col-lg-6 col-md-12 my-3">
                    <video preload="none" poster="assets/experience/back.png" controls autoPlay controlsList="nodownload noremoteplayback" loop muted className="img-fluid" style={{"maxHeight":"60vh","borderRadius":"0.8rem"}}>
                        <source src="assets/experience/bnm/weather.mp4" type="video/mp4"/>
                    </video>
                </div>
                <div className="col-lg-6 col-md-12 my-3">
                    <h4>WEATHER</h4>
                    <p><span>
                    Developed a <strong>weather prediction</strong> system that fetches and cleans historical data from the OpenWeatherMap API. Trained <strong>Random Forest</strong> and Gradient Boosting classifiers once on this data. Hosted a REST API with persistent storage as a mediator. The SPA collects geolocation info, fetches recent environmental data, and predicts the next 24 hours using an <strong>ARMA</strong> model. The predicted variables are classified to determine weather conditions like sunny or cloudy.
                    </span></p>
                    <div className="row">
                        <picture style={{"maxWidth":"50%"}}>
                            <source media="(max-width:720px)" srcSet="assets/experience/bnm/we3.jpg"/>
                            <img src="assets/experience/bnm/we3.jpg" alt="weather" className="img-fluid" style={{"borderRadius":"0.8rem"}}/>
                        </picture>
                        <picture style={{"maxWidth":"50%"}}>
                            <source media="(max-width:720px)" srcSet="assets/experience/bnm/we2.png"/>
                            <img src="assets/experience/bnm/we2.png" alt="weather" className="img-fluid" style={{"borderRadius":"0.8rem"}}/>
                        </picture>
                    </div>
                </div>

                <div className="col-lg-6 col-md-12 my-3">
                    <video preload="none" poster="assets/experience/back.png" controls autoPlay controlsList="nodownload noremoteplayback" loop muted className="img-fluid" style={{"maxHeight":"60vh","borderRadius":"0.8rem"}}>
                        <source src="assets/experience/bnm/record.mp4" type="video/mp4"/>
                    </video>
                </div>
                <div className="col-lg-6 col-md-12 my-3">
                    <h4>TechIT</h4>
                    <p><span>
                    Developed and launched the official club website for B.N.M. Institute of Technology, with a strong focus on <strong>digital marketing</strong> to enhance visibility and engagement. Leveraged <strong>AWS CloudFront CDN</strong> for fast and reliable content delivery, ensuring a seamless user experience. Implemented key features including event scheduling, gallery management, FAQ section, and a secure member login system for personalized access. Utilized <strong>Jira</strong> for agile development, enabling efficient project management, regular sprint reviews, and timely delivery of features.
                    </span></p>
                    <div className="row">
                        <picture style={{"maxWidth":"50%"}}>
                            <source media="(max-width:720px)" srcSet="assets/experience/bnm/techitlogin.jpg"/>
                            <img src="assets/experience/bnm/techitlogin.jpg" alt="techit" className="img-fluid" style={{"borderRadius":"0.8rem"}}/>
                        </picture>
                        <picture style={{"maxWidth":"50%"}}>
                            <source media="(max-width:720px)" srcSet="assets/experience/bnm/IMG-20240523-WA0057.jpg"/>
                            <img src="assets/experience/bnm/IMG-20240523-WA0057.jpg" alt="tecchit" className="img-fluid" style={{"borderRadius":"0.8rem"}}/>
                        </picture>
                    </div>
                </div>

            </div>
        </div>
        </>
    );
}

export default Experience;