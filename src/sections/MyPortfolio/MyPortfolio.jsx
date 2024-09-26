import styles from './MyPortfolioStyles.module.css';
import gymbroImage from '/src/assets/gymbro.svg';
import piggyproImage from '/src/assets/piggypro.svg';
import portfolioWebsiteImage from '/src/assets/portfolioWebsite.svg';


export default function MyPortfolio() {
  return (
    <section className={styles.portfolioSection} id="MyPortfolio">
      <div className={styles.portfolioContainerBox}>
        <div className={styles.portfolioContainer}>
          <p className="sub--title">Recent Projects</p>
          <h2 className="section--heading">My Portfolio</h2>
        </div>
      </div>
      <div className={styles.portfolioSectionContainer}>
        <div className={styles.portfolioSectionCard}>
          <div className={styles.portfolioSectionImg}>
            <img src={gymbroImage} alt="GymBro" />
          </div>
          <div className={styles.portfolioSectionCardContent}>
            <h3 className={styles.portfolioSectionTitle}>GymBro</h3>
            <p className={styles.projectDescription}>
              GymBro is a personal project designed to enhance fitness tracking by generating personalized workout plans based on user preferences.
            </p>
            <a
              href="https://github.com/krishsonvane14/gymbro"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.portfolioLink}
            >
              View on GitHub
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 20 19"
                fill="none"
              >
                <path
                  d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                  stroke="currentColor"
                  strokeWidth="2.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className={styles.portfolioSectionCard}>
          <div className={styles.portfolioSectionImg}>
            <img src={piggyproImage} alt="PiggyPro" />
          </div>
          <div className={styles.portfolioSectionCardContent}>
            <h3 className={styles.portfolioSectionTitle}>PiggyPro</h3>
            <p className={styles.projectDescription}>
              PiggyPro allows users to input their income, expenses, and budgets, and receive personalized financial advice based on their financial data.
            </p>
            <a
              href="https://github.com/krishsonvane14/piggypro"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.portfolioLink}
            >
              View on GitHub
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 20 19"
                fill="none"
              >
                <path
                  d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                  stroke="currentColor"
                  strokeWidth="2.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className={styles.portfolioSectionCard}>
          <div className={styles.portfolioSectionImg}>
            <img src={portfolioWebsiteImage} alt="This Website!" />
          </div>
          <div className={styles.portfolioSectionCardContent}>
            <h3 className={styles.portfolioSectionTitle}>This Website!</h3>
            <p className={styles.projectDescription}>
              A responsive React Portfolio Website with a light & dark mode showcasing my projects and links to my socials!
            </p>
            <a
              href="https://github.com/krishsonvane14/my-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.portfolioLink}
            >
              View on GitHub
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 20 19"
                fill="none"
              >
                <path
                  d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                  stroke="currentColor"
                  strokeWidth="2.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
