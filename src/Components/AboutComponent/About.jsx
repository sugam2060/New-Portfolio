import './About.css'
import { useState } from 'react'

function About(){

    let [tablink,setTabLink] = useState('skills')


    function handleClick(value){
        setTabLink(value)
    }
    return(
        <>
            <div id="about">
                <div className="container">
                    <img src="myPhoto.jpg" alt="pp" />
                    <div className="right-col">
                        <h2>About me</h2>
                        <p>Hi my name is Sugam Pudasain. I am a full-stack web developer from Nepal. My tech stacks are:<span> NodeJS , Express JS , MongoDB , ReactJS , Javascript , HTML , CSS.</span></p>
                        <div className="tabs">
                            <div className="tab-val">
                                <p className={`tab-link ${tablink==='skills'?'active-link':'tab-link'}`} onClick={()=>{handleClick('skills')}}>Skills</p>
                                <p className={`tab-link ${tablink==='project'?'active-link':'tab-link'}`} onClick={()=>{handleClick('project')}}>Project</p>
                                <p className={`tab-link ${tablink==='education'?'active-link':'tab-link'}`} onClick={()=>{handleClick('education')}}>Education</p>
                            </div>
                            <div className={`tab-content ${tablink==='skills'?'active-content':'tab-content'}`}>
                                <ul>
                                    <li>- MongoDB</li>
                                    <li>- ExpressJS</li>
                                    <li>- ReactJS</li>
                                    <li>- NodeJS</li>
                                    <li>- SQL</li>
                                    <li>- HTML</li>
                                    <li>- CSS</li>
                                </ul>
                            </div>
                            <div className={`tab-content ${tablink==='project'?'active-content':'tab-content'}`}>
                                <ul>
                                    <li>- Project-1</li>
                                    <li>- project-2</li>
                                    <li>- Project-3</li>
                                    
                                </ul>
                            </div>
                            <div className={`tab-content ${tablink==='education'?'active-content':'tab-content'}`}>
                                <ul>
                                    <li>- Kalinga Institute of Industrial Technology<span> (B.tech CSE)</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About