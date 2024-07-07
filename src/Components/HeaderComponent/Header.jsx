import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub,faLinkedin,faXTwitter,faInstagram,faFacebook} from '@fortawesome/free-brands-svg-icons'
function Header(){
    return(
        <>
        <header id='main'>
            <Head></Head>
            <div className='main'>
            <Social></Social>
            <div className="introduction">
            <Intro></Intro>
            <Design></Design>
            </div>
            </div>
        </header>
            
        </>
    )
}


function Head(){
    return (
        <>
        <div className="head">
            <a href="https://sugampudasain.netlify.app/" target='blank'><h1>SUGAM.net</h1></a>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#portfolio">Projects</a></li>
                    <li><a href="#skill">Skills</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
        </>
    )
}


function Intro(){
    return(
        <>
        <div className="intro">
            <img src="gamer.png" alt="pp" />
            <div className="intro-1">
                <p>Hi, I'm <br></br><span>Sugam Pudasain</span></p>
                <p className='role'>Full Stack Developer</p>
            </div>
        </div>
        </>
    )
}

function Social(){
    return(
        <>
        <div className="social">
            <a href="https://github.com/sugam2060" target='blank'><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
            <a href="https://x.com/sugampudasain" target='blank'><FontAwesomeIcon icon={faXTwitter}></FontAwesomeIcon></a>
            <a href="https://www.instagram.com/sugam_pudasaini/" target='blank'><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>
            <a href="https://www.facebook.com/sugam.pudasaini.52" target='blank'><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a>
            <a href="https://www.linkedin.com/in/sugam-pudasain-843912247/" target='blank'><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a>
        </div>
        </>
    )
}


function Design(){

    return(<>
    <div className="design">
        <div className="div-1"></div>
        <div className="div-2"></div>
    </div>
    </>)
}

export default Header