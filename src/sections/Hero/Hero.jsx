import styles from './HeroStyles.module.css'
import heroImg from '../../assets/heroImg.jpeg'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import instaLight from '../../assets/instagram-light.svg'
import instaDark from '../../assets/instagram-dark.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import { useTheme } from '../../common/ThemeContext'

function Hero() {
    const {theme, toggleTheme} = useTheme();
    const themeIcon = theme === 'light' ? sun: moon ;
    const githubIcon = theme === 'light' ? githubLight : githubDark ;
    const instaIcon = theme === 'light' ? instaLight: instaDark ;
    const linkedinIcon = theme === 'light' ? linkedinLight: linkedinDark ;

  return (
    <section id='hero' className={styles.container}>
    <div className={styles.colorModeContainer}>
    <img className={styles.hero} src={heroImg} alt="profile picture" />
    <img className={styles.colorMode} src={themeIcon} alt="theme toggle" onClick={toggleTheme}/>
    </div>
    <div className={styles.info}>
        <h1>Krish <br/> Sonvane</h1>
        <h2>Software developer</h2>
        <span>
            <a href="https://github.com/krishsonvane14" target='_blank'>
            <img src={githubIcon} alt="github icon" />
            </a>
            <a href="https://www.instagram.com/krishsonvane/" target='_blank'>
            <img src={instaIcon} alt="Instagram icon" />
            </a>
            <a href="https://www.linkedin.com/in/krish-sonvane-89109b294/" target='_blank'>
            <img src={linkedinIcon} alt="LinkedIn icon" />
            </a>
        </span>
        <p className={styles.description}>
        CS sophomore with full-stack development skills, specializing in both frontend and backend technologies, based in Vancouver.
        </p>
    </div>
    </section>
  )
}

export default Hero
