import React from 'react';
import './Skills.css';

// Si usás Devicon (recomendado)
import 'devicon/devicon.min.css';

const Skills = () => {
  const softSkills = [
    { name: 'Creatividad', icon: 'fas fa-lightbulb' },
    { name: 'Trabajo en equipo', icon: 'fas fa-users' },
    { name: 'Autonomía', icon: 'fas fa-user-check' },
    { name: 'Actitud positiva', icon: 'fas fa-smile' },
    { name: 'Tolerancia a la presión', icon: 'fas fa-clock' },
    { name: 'Capacidad resolutiva', icon: 'fas fa-puzzle-piece' },
    { name: 'Empatía', icon: 'fas fa-heart' },
    { name: 'Respeto', icon: 'fas fa-handshake' },
    { name: 'Resiliencia', icon: 'fas fa-shield-alt' }
  ];

  const techSkills = [
    { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
    { name: 'React', icon: 'devicon-react-original colored' },
    { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
    { name: 'PHP', icon: 'devicon-php-plain colored' },
    { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
    { name: 'Next.js', icon: 'devicon-nextjs-original' },
    { name: 'Express', icon: 'devicon-express-original' },
    { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
    { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
    { name: 'MySQL', icon: 'devicon-mysql-plain colored' },
    { name: 'Bootstrap', icon: 'devicon-bootstrap-plain colored' },
    { name: 'HTML5', icon: 'devicon-html5-plain colored' },
    { name: 'CSS3', icon: 'devicon-css3-plain colored' },
    { name: 'Git', icon: 'devicon-git-plain colored' },
    { name: 'GitHub', icon: 'devicon-github-original' }
  ];

  const tools = [
    'VS Code', 'Postman', 'Figma', 'Trello', 'Slack',
    'Jira', 'Vercel'
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <div className="skills-header">
          <h2>Mis Skills</h2>
          <p>
            Tecnologías y habilidades que utilizo para crear soluciones
            digitales con impacto real.
          </p>
        </div>

        {/* Soft Skills */}
        <div className="soft-skills">
          <h3>Soft Skills</h3>
          <div className="soft-skills-grid">
            {softSkills.map((skill, index) => (
              <div key={index} className="soft-skill-card">
                <div className="soft-skill-icon">
                  <i className={skill.icon}></i>
                </div>
                <span className="soft-skill-text">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Skills */}
        <div className="tech-skills">
          <h3>Tech Skills</h3>
          <div className="tech-skills-grid">
            {techSkills.map((skill, index) => (
              <div key={index} className="tech-skill-card">
                <div className="tech-skill-icon">
                  <i className={skill.icon}></i>
                </div>
                <h4 className="tech-skill-name">{skill.name}</h4>
                <span className="tech-skill-level">
                  {skill.name.includes('PHP') || skill.name.includes('Bootstrap')
                    ? 'Experiencia laboral'
                    : 'Intermedio'}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Herramientas */}
        <div className="tools-section">
          <h3>Herramientas</h3>
          <div className="tools-grid">
            {tools.map((tool, index) => (
              <div key={index} className="tool-item">
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;