import "./about.css";
import user from "../../assets/user.png"

export default function About() {
    return (
        <div className="hero-about">
            <h4 className="hero-h4-about"> <img src={user} alt="" /><i> About</i></h4>
            <h1 className="text-about">Every big project starts with an idea and dedicated effort to <span className="span-text-about">make it a reality</span> .</h1>
            <div className="span-about">
                <span >As a student passionate about software development, I am always looking for new opportunities to learn and apply knowledge to real projects. Since I began my academic journey, I have worked on various projects, from control systems to responsive web interfaces, always seeking to transform ideas into practical and functional solutions.</span>
            </div> </div>

    );
}
