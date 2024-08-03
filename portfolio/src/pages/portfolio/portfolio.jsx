import './portfolio.css';
import list from "../../assets/list.png"
import project1 from "../../assets/project 1.png"
import project2 from "../../assets/project-2.png"
import project3 from "../../assets/project-3.png"
import seta from "../../assets/seta-direita.png"
export default function Portfolio() {
    return (
        <div className="hero-portfolio">
            <h4 className="hero-h4-portfolio">
                <img src={list} alt="" /><i>portfolio</i>
            </h4>
            <div>
                <header className="header-skills">My <span className="span-text-about">Projects</span></header>
                <div className='portfolio-how'>
                    <div className='portfolio-item-1'>
                        <div className="image-box">
                            <img src={project1} alt="" />
                        </div>
                        <div className="content-box"> <a href="https://github.com/Victor-Novais/controle-de-caixa" target="_blank" rel="noopener noreferrer" >
                            <div>
                                <h3 className="portfolio-title">Urban Store</h3>
                                <p>The project dealt with a system to control the flow of sales, expenses, and stock.</p>
                            </div>
                            <img src={seta} className='seta-ir' alt="" /></a>
                        </div>
                        <ul className='skill-project'>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Node</li>
                            <li>Sql</li>
                        </ul>
                    </div>

                    <div className='portfolio-item-2'>
                        <div className="image-box">
                            <img src={project2} alt="" />
                        </div>
                        <div className="content-box">
                            <a href="https://github.com/Victor-Novais/PayWise-FrontEnd" target="_blank" rel="noopener noreferrer" > <div>
                                <div>
                                    <h3 className="portfolio-title">Pay Wise</h3>
                                    <p>Designed to help users manage finances
                                        of all users of a company.</p></div>
                            </div>
                                <img src={seta} className='seta-ir' alt="" /></a>
                        </div>
                        <ul className='skill-project'>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Node</li>
                            <li>Sql</li>
                        </ul>
                    </div>

                    <div className='portfolio-item-3'>
                        <div className="image-box">
                            <img src={project3} alt="" />
                        </div>
                        <div className="content-box">
                            <a href="https://github.com/Victor-Novais/dindin-bank" target="_blank" rel="noopener noreferrer">
                                <div>
                                    <h3 className="portfolio-title">SecureBank</h3>
                                    <p>This project allows registered users to manage their personal finances.</p>
                                </div>
                                <img src={seta} className='seta-ir' alt="" /></a>
                        </div>
                        <ul className='skill-project'>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Node</li>
                            <li>Sql</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    );
}
