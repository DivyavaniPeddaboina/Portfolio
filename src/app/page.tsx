"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col">

      {/* HERO */}
      <section id="home" className="hero-wrapper overflow-x-hidden">
        <h1 className="hero-title animate-glow">Divyavani</h1>

        <p className="hero-sub">AI Enthusiast • Full-Stack Developer • Research Learner</p>

        <p className="hero-desc">
          Building intelligent systems using Deep Learning, Transformers & modern full-stack.
        </p>

        <a href="#projects" className="hero-btn">
          View My Work →
        </a>
      </section>


      {/* ABOUT */}
      <section id="about" className="section-wrapper glass">
        <motion.h2 className="section-heading" initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}}>
          About Me
        </motion.h2>

        <div className="section-text">
          <p>
            Hi, I’m <span className="highlight">Divya Vani Peddaboina</span>,
            a final-year AI & ML student passionate about intelligent systems.
          </p>

          <p>
            I work with <span className="highlight">Machine Learning, Deep Learning,
            Transformers, Neural Networks</span> and I build full-stack applications using
            <span className="highlight"> React & Next.js</span>.
          </p>

          <p>
            Currently exploring <span className="highlight">Generative AI</span> and advanced
            full-stack development.
          </p>

          <p>
            Seeking opportunities as an <span className="highlight">AI Engineer</span> or
            <span className="highlight"> Full-stack Developer</span>.
          </p>
        </div>
      </section>


      {/* SKILLS */}
      <section id="skills" className="section-wrapper">
        <h2 className="section-heading">Skills</h2>

        <div className="skills-grid">

          <div>
            <h3 className="skill-title">AI & Machine Learning</h3>
            <div className="skill-list">
              <span className="skill-pill">Machine Learning</span>
              <span className="skill-pill">Deep Learning</span>
              <span className="skill-pill">Neural Networks</span>
              <span className="skill-pill">Transformers</span>
              <span className="skill-pill">Generative AI</span>
            </div>
          </div>

          <div>
            <h3 className="skill-title">Programming</h3>
            <div className="skill-list">
              <span className="skill-pill">Python</span>
              <span className="skill-pill">JavaScript</span>
              <span className="skill-pill">Java</span>
              <span className="skill-pill">C</span>
            </div>
          </div>

          <div>
            <h3 className="skill-title">Frontend</h3>
            <div className="skill-list">
              <span className="skill-pill">React</span>
              <span className="skill-pill">Next.js</span>
              <span className="skill-pill">Tailwind CSS</span>
            </div>
          </div>

          <div>
            <h3 className="skill-title">Backend & DB</h3>
            <div className="skill-list">
              <span className="skill-pill">Node.js</span>
              <span className="skill-pill">Express.js</span>
              <span className="skill-pill">MongoDB</span>
              <span className="skill-pill">SQL</span>
              <span className="skill-pill">MySQL</span>
            </div>
          </div>

          <div>
            <h3 className="skill-title">Tools</h3>
            <div className="skill-list">
              <span className="skill-pill">Git</span>
              <span className="skill-pill">GitHub</span>
              <span className="skill-pill">Postman</span>
              <span className="skill-pill">Jupyter</span>
            </div>
          </div>

        </div>
      </section>


      {/* PROJECTS */}
      <section id="projects" className="section-wrapper">
        <h2 className="section-heading">Projects</h2>

        <div className="project-list">

          <article className="project-card">
            <h3>Dynamic Video Summarization</h3>
            <p>Transformer-based video summarization using deep learning.</p>
            <a href="https://github.com/DivyavaniPeddaboina/Dynamic_Video_Summarization">
              View →
            </a>
          </article>

          <article className="project-card">
            <h3>Stock Price Prediction</h3>
            <p>LSTM-based financial forecasting using yFinance APIs.</p>
            <a href="https://github.com/DivyavaniPeddaboina/Stock-Price-Prediction-Web-Application">
              View →
            </a>
          </article>

          <article className="project-card">
            <h3>Task Manager App</h3>
            <p>CRUD management using MERN-stack.</p>
            <a href="https://github.com/DivyavaniPeddaboina/task-manager-edtech-assignment">
              View →
            </a>
          </article>

          <article className="project-card">
            <h3>iCoder Website</h3>
            <p>Modern responsive website design.</p>
            <a href="https://github.com/DivyavaniPeddaboina/iCoder-Website">
              View →
            </a>
          </article>

        </div>
      </section>


      {/* CONTACT */}
      <section id="contact" className="section-wrapper">
        <h2 className="section-heading">Contact</h2>

        <div className="contact-card">
          <p>divyavanipeddaboina@gmail.com</p>
          <a href="https://github.com/DivyavaniPeddaboina">GitHub →</a>
          <a href="https://www.linkedin.com/in/divyavani-peddaboina-5b5375282/">LinkedIn →</a>
        </div>
      </section>

    </main>
  );
}