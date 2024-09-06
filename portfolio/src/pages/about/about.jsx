import "./about.css";
import user from "../../assets/user.png"

export default function About() {
    return (

        <div className="hero-about" id="about">
            <h4 className="hero-h4-about"> <img src={user} alt="" /><i> Sobre mim</i></h4>
            <h1 className="text-about">Todo grande projeto começa com uma ideia e o esforço dedicado para torná-la <span className="span-text-about">realidade</span>.</h1>
            <div className="span-about">
                <span >Como estudante apaixonado por desenvolvimento de software, estou sempre em busca de novas
                    oportunidades para aprender e aplicar conhecimentos em projetos reais. Desde o início da minha
                    jornada acadêmica, trabalhei em diversos projetos, desde sistemas de controle até interfaces web
                    responsivas, sempre com o objetivo de transformar ideias em soluções práticas e funcionais.</span>
            </div> </div>

    );
}
