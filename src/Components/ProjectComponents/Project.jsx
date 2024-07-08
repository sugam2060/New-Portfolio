import './Project.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
function Portfolio(){
    return(
        <>
            <div id="portfolio">
                <div className="container">
                    <h2>Projects</h2>
                    <div className="project-list">
                        <Apps link="testing.png" projectName="project-1"></Apps>
                        <Apps link="testing.png" projectName="project-2"></Apps>
                        <Apps link="testing.png" projectName="project-3"></Apps>
                        <Apps link="testing.png" projectName="project-4"></Apps>
                    </div>
                    <a className="btn" href="#portfolio"><button>See more</button></a>
                </div>
            </div>
        </>
    )
}



function Apps(props){
    return(
        <div className="project">
            <img src={props.link} alt="pic" />
            <div className="layer">
                <h3>{props.projectName}</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, rerum.</p>
                <a href="#"><FontAwesomeIcon className="linkIcon" icon={faLink}></FontAwesomeIcon></a>
            </div>
        </div>
    )
}


export default Portfolio