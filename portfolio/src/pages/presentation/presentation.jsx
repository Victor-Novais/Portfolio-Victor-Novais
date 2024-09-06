import "./presentation.css";
import home from "../../assets/home.png"

export default function Presentation() {
    return (
        <div className="hero-presentation" >
            <h4 className="hero-h4"> <img src={home} alt="" /><i>Início</i></h4>
            <h1 className="text-apresentation">Olá! Sou <span className="span-name">Victor Novais</span>,
                desenvolvedor full-stack.</h1>
            <span className="span-apresentation">Minha formação em Engenharia de Software pela Universidade
                Católica do Salvador e o curso de Desenvolvedor Full Stack pela Cubos Academy me deram uma
                base sólida em tecnologias como React, Node.js, Java, SQL, e muito mais.</span>
        </div>

    );
}
