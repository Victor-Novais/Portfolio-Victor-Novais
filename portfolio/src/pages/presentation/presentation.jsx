import "./presentation.css";
import home from "../../assets/home.png"

export default function Presentation() {
    return (
        <div className="hero-presentation" >
            <h4 className="hero-h4"> <img src={home} alt="" /><i> Introduce</i></h4>
            <h1 className="text-apresentation">Hello! I'm<span className="span-name">Victor Novais</span>,
                full-stack developer.</h1>
            <span className="span-apresentation">I'm ready to turn your ideas into digital reality.</span>
        </div>

    );
}
