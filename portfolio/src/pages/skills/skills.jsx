import "./skills.css";
import js from "../../assets/script-java.png";
import java from "../../assets/java.png";
import biblioteca from "../../assets/biblioteca.png";
import nodejs from "../../assets/nodejs.png";
import html from "../../assets/html-5.png";
import css from "../../assets/css-3.png";
import skills from "../../assets/skills.png";
import sql from "../../assets/servidor-sql.png";

export default function Skills() {
  return (
    <section id="skill">
      <div className="hero-skills">
        <h4 className="hero-h4-skills">
          {" "}
          <img src={skills} alt="" />
          <i> Habilidades</i>
        </h4>
        <div className="skills-area">
          <header className="header-skills">
            Minhas <span className="span-text-about">Habilidades</span>
          </header>
          <div className="row-skills">
            <div className="div-skill">
              <div class="skill">
                <div class="skill-inner">
                  <img className="skill-icon" src={js} alt="JS"></img>
                  <h1 class="percent">90%</h1>
                </div>
                <p class="name">JavaScript</p>
              </div>
            </div>
            <div className="div-skill">
              <div class="skill">
                <div class="skill-inner">
                  <img className="skill-icon" src={java} alt="JS"></img>
                  <h1 class="percent">80%</h1>
                </div>
                <p class="name">Java</p>
              </div>
            </div>
            <div className="div-skill">
              <div class="skill">
                <div class="skill-inner">
                  <img className="skill-icon" src={sql} alt="JS"></img>
                  <h1 class="percent">90%</h1>
                </div>
                <p class="name">SQL</p>
              </div>
            </div>
            <div className="div-skill">
              <div class="skill">
                <div class="skill-inner">
                  <img className="skill-icon" src={biblioteca} alt="JS"></img>
                  <h1 class="percent">90%</h1>
                </div>
                <p class="name">React</p>
              </div>
            </div>
            <div className="div-skill">
              <div class="skill">
                <div class="skill-inner">
                  <img className="skill-icon" src={nodejs} alt="JS"></img>
                  <h1 class="percent">80%</h1>
                </div>
                <p class="name">Node.js</p>
              </div>
            </div>
            <div className="div-skill">
              <div class="skill">
                <div class="skill-inner">
                  <img className="skill-icon" src={html} alt="JS"></img>
                  <h1 class="percent">95%</h1>
                </div>
                <p class="name">HTML</p>
              </div>
            </div>
            <div className="div-skill">
              <div class="skill">
                <div class="skill-inner">
                  <img className="skill-icon" src={css} alt="JS"></img>
                  <h1 class="percent">95%</h1>
                </div>
                <p class="name">CSS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
