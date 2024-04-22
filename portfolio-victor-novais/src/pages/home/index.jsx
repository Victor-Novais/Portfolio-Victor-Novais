import "./index.css"

import Header from "../../components/header/index"
export default function Home() {
    return (
        <div className="home">
            <Header />

            <div className="home-container">
                <div className="home-title hero_cont animate__animated animate__fadeIn animate__slideInDown animate__delay-1s">

                    <div className="line h1-60">
                        <span >F</span><span>r</span><span>o</span><span>n</span><span>t</span><span>-</span><span>E</span><span>n</span><span>d</span>
                    </div>
                    <div className="line h1-60">
                        <span>&</span>
                    </div>
                    <div className="line h1-60">
                        <span>B</span><span>a</span><span>c</span><span>k</span><span>-</span><span>E</span><span>n</span><span>d</span>
                    </div>

                    <div className="line h1-60">
                        <span>D</span><span>e</span><span>v</span><span>e</span><span>l</span><span>o</span><span>p</span><span>e</span><span>r</span>
                    </div>

                </div>
                <div className="summary">
                    <p>Apaixonado por resolver problemas complexos e criar soluções inovadoras.
                        Com habilidades tanto no front end quanto no back end, sou especializado
                        em construir interfaces de usuário intuitivas e responsivas, enquanto também
                        trabalho nos bastidores para desenvolver sistemas robustos e escaláveis.
                        Do design ao deployment, estou comprometido em entregar experiências de usuário
                        excepcionais e garantir o funcionamento suave de aplicações web de ponta a ponta.</p>
                </div>

                <a href="home" className="about-me-link">
                    Sobre mim
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" fill="#9C27B0"></path></svg>
                </a>
            </div>

            <div className="Skill">
                <p>Skill</p>
            </div>
        </div>

    )

}