import "./menu.css";
import home from "../../assets/home.png";
import list from "../../assets/list.png";
import email from "../../assets/email.png";
import skills from "../../assets/skills.png";
import user from "../../assets/user.png";

export default function Menu() {
    return (
        <ul className="menu">
            <li>
                <a href="#">
                    <img className="icon-menu" src={home} alt="Home" />
                    <span className="tooltip">Home</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <img className="icon-menu" src={user} alt="User" />
                    <span className="tooltip">About</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <img className="icon-menu" src={skills} alt="Skills" />
                    <span className="tooltip">Skills</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <img className="icon-menu" src={list} alt="List" />
                    <span className="tooltip">Portfolio</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <img className="icon-menu" src={email} alt="Email" />
                    <span className="tooltip">Contact</span>
                </a>
            </li>
        </ul>
    );
}
