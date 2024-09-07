import "./portfolio.css";
import list from "../../assets/list.png";
import project1 from "../../assets/project 1.png";
import project2 from "../../assets/project-2.png";
import project3 from "../../assets/project-3.png";
import seta from "../../assets/seta-direita.png";
export default function Portfolio() {
  document.addEventListener("DOMContentLoaded", function () {
    // Seleciona todos os itens de portfólio
    const portfolioItems = document.querySelectorAll(".portfolio-item");

    portfolioItems.forEach((item) => {
      item.addEventListener("click", function () {
        // Remove a classe active de todos os itens antes de adicionar ao item clicado
        portfolioItems.forEach((i) => i.classList.remove("active"));

        // Adiciona ou remove a classe active ao item clicado
        if (!this.classList.contains("active")) {
          this.classList.add("active");
        }
      });
    });
  });

  return (
    <div className="hero-portfolio">
      <h4 className="hero-h4-portfolio">
        <img src={list} alt="" />
        <i>portfolio</i>
      </h4>
      <div>
        <header className="header-skills">
          Meus <span className="span-text-about">Projetos</span>
        </header>
        <div className="portfolio-how">
          <div className="portfolio-item-1">
            <div className="image-box">
              <img src={project1} alt="" />
            </div>
            <div className="content-box">
              {" "}
              <a
                href="https://github.com/Victor-Novais/controle-de-caixa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div>
                  <h3 className="portfolio-title">Loja Urban</h3>
                  <p>
                    O projeto se trata de um sistema de controle de fluxo de
                    vendas, despesas e estoque.
                  </p>
                </div>
                <img src={seta} className="seta-ir" alt="" />
              </a>
            </div>
            <ul className="skill-project">
              <li>JavaScript</li>
              <li>React</li>
              <li>Node</li>
              <li>Sql</li>
            </ul>
          </div>

          <div className="portfolio-item-2">
            <div className="image-box">
              <img src={project2} alt="" />
            </div>
            <div className="content-box">
              <a
                href="https://github.com/Victor-Novais/PayWise-FrontEnd"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <div>
                  <div>
                    <h3 className="portfolio-title">Pay Wise</h3>
                    <p>
                      Criado parauma empresa a gerenciar finanças de todos os
                      usuários.
                    </p>
                  </div>
                </div>
                <img src={seta} className="seta-ir" alt="" />
              </a>
            </div>
            <ul className="skill-project">
              <li>JavaScript</li>
              <li>React</li>
              <li>Node</li>
              <li>Sql</li>
            </ul>
          </div>

          <div className="portfolio-item-3">
            <div className="image-box">
              <img src={project3} alt="" />
            </div>
            <div className="content-box">
              <a
                href="https://github.com/Victor-Novais/dindin-bank"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div>
                  <h3 className="portfolio-title">SecureBank</h3>
                  <p>
                    Este projeto permite que usuários cadastrados gerenciem suas
                    finanças pessoais.
                  </p>
                </div>
                <img src={seta} className="seta-ir" alt="" />
              </a>
            </div>
            <ul className="skill-project">
              <li>JavaScript</li>
              <li>React</li>
              <li>Node</li>
              <li>Sql</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
