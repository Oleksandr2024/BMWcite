
import {FaTwitter, FaGithub, FaLinkedin, FaFacebook} from "react-icons/fa"
   
export default function Footer(){
    return(
        <div className="footer">
            <a id="profile-link" href="https://github.com/OleksandrMykhnovetskyi" target="_blank"><FaTwitter/></a>
            <a id="profile-link" href="https://github.com/OleksandrMykhnovetskyi" target="_blank"><FaGithub/></a>
            <a id="profile-link" href="https://github.com/OleksandrMykhnovetskyi" target="_blank"><FaLinkedin/></a>
            <a id="profile-link" href="https://github.com/OleksandrMykhnovetskyi" target="_blank"><FaFacebook/></a>
        </div>
    )
}