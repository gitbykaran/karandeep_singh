import styles from './HeroStyles.module.css';
import heroImg from '../../assets/karan_pic.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';

import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import githubIcon from '../../assets/github.svg';

import CV from '../../assets/karandeepresume.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  


  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Karandeep Singh"
        />
        
      </div>
      <div className={styles.info}>
        <h1>
          Karandeep
          <br />
          Singh
        </h1>
        <h2>Data Analyst</h2>
        <span>
          <a href="https://github.com/gitbykaran" target="_blank">
            <img src={githubIcon} alt="Youtube icon" />
          </a>
          
          <a href="https://www.linkedin.com/in/karandeepsingh3451/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
        Turning data into decisions, insights into impact. 📊🚀
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
        <a href="https://github.com/gitbykaran?tab=repositories" >
          <button className="hover">Projects</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
