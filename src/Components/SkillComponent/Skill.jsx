import './Skill.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNode , faReact,  faJs } from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'


function Skill(){
    return(
        <>
        <div id="skill">
        <div className="skill-header">
        <h2>Skills</h2>
        <div className="skill-content">
            <Skillset val='Nodejs' icon={faNode}></Skillset>
            <Skillset val='ReactJS' icon={faReact}></Skillset>
            <Skillset val='ExpressJS' icon={faJs}></Skillset>
            <Skillset val='MongoDB' icon={faDatabase}></Skillset>
        </div>
        </div>
        {/* <a href="#">see more</a> */}
        </div>
        </>
    )
}

function Skillset(props){
    return(
        <>
        <div className="container">
            <FontAwesomeIcon className='icons' icon={props.icon}></FontAwesomeIcon>
            <p>{props.val}</p>
        </div>
        </>
    )
}
export default Skill