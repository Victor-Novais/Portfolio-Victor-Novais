import './contact.css';

import perfil from "../../assets/perfil.jpeg";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
import gitHub from "../../assets/github.png";
import linkedin from "../../assets/linkedin-logo.png";
import email from "../../assets/email.png";

export default function ContactResume() {
    return (
        <div className="contact-bar">
            <header className='contact-header'>
                <h1>NOVAIS</h1>
                <span>Fullstack Developer</span>
            </header>
            <img className='perfil' src={perfil} alt="Perfil" />
            <h2>victornovais1337@gmail.com</h2>
            <h2>Based in Salvador, Bahia, Brazil</h2>
            <ul className='social'>
                <li><a href="https://www.instagram.com/novais_.dev/" target="_blank" rel="noopener noreferrer"><img src={instagram} className="icon" alt="Instagram" /></a></li>
                <li><a href="https://x.com/novaisDev" target="_blank" rel="noopener noreferrer"><img src={twitter} className="icon" alt="Twitter" /></a></li>
                <li><a href="https://github.com/Victor-Novais" target="_blank" rel="noopener noreferrer"><img src={gitHub} className="icon" alt="GitHub" /></a></li>
                <li><a href="https://www.linkedin.com/in/victor-novais-/" target="_blank" rel="noopener noreferrer"><img src={linkedin} className="icon" alt="LinkedIn" /></a></li>
            </ul>

            <a href="mailto:victornovais1337@gmail.com?subject=Contrate-me&body=Olá,%20gostaria%20de%20discutir%20uma%20oportunidade." className="theme-btn">
                <img className="icon-email" src={email} alt="Email" /><span className='span-contrate'>HIRE ME!</span>
            </a>
        </div>
    );
}
