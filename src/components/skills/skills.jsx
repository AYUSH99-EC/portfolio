import styles from "./Skills.module.css";

function Skills() {
  const skillsData = [
    {
      title: "Frontend Development",
      skills: ["HTML", "CSS", "JavaScript", "React js"]
    },
    {
      title: "Design Skills",
      skills: ["Figma", "Adobe express", "Canva", "UI/UX Design "]
    },
    {
      title: "Programming",
      skills: ["C++", "Problem Solving", "C language", "Python language"]
    },
    {
      title: "Tools & Technologies",
      skills: ["GitHub", "VS Code", "GIT ", "Vercel"]
    }
  ];

  return (
    <section id="skills" className={styles.skillsSection}>
      <div className="container">
        <h2 className={styles.heading}>My Skills</h2>

        <div className={styles.skillsGrid}>
          {skillsData.map((category, index) => (
            <div key={index} className={styles.card}>
              <h3>{category.title}</h3>
              <ul>
                {category.skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
