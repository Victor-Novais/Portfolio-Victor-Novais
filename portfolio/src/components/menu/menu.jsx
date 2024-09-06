
import './menu.css';
import home from '../../assets/home.png';
import list from '../../assets/list.png';
import email from '../../assets/email.png';
import skills from '../../assets/skills.png';
import user from '../../assets/user.png';

export default function Menu() {
    return (
        <ul className="menu">
            <li id="menu-home">
                <a href="#home">
                    <img className="icon-menu" src={home} alt="Home" />
                    <span className="tooltip">Início</span>
                </a>
            </li>
            <li id="menu-about">
                <a href="#about">
                    <img className="icon-menu" src={user} alt="User" />
                    <span className="tooltip">Sobre mim</span>
                </a>
            </li>
            <li id="menu-skills">
                <a href="#skills">
                    <img className="icon-menu" src={skills} alt="Skills" />
                    <span className="tooltip">Habilidades</span>
                </a>
            </li>
            <li id="menu-portfolio">
                <a href="#portfolio">
                    <img className="icon-menu" src={list} alt="Portfolio" />
                    <span className="tooltip">Portfolio</span>
                </a>
            </li>
            <li id="menu-contact">
                <a href="#contact">
                    <img className="icon-menu" src={email} alt="Contact" />
                    <span className="tooltip">Contato</span>
                </a>
            </li>
        </ul>
    );
}

