import styles from './MyPortfolioStyles.module.css';

export default function MyPortfolio() {
  const portfolioData = [
    {
      id: "1",
      src: "/src/assets/gymbro.svg",
      title: "GymBro",
      description:
        "GymBro is a personal project designed to enhance fitness tracking by generating personalized workout plans based on user preferences.",
      link: "https://github.com/krishsonvane14/gymbro",
    },
    {
      id: "2",
      src: "/src/assets/piggypro.svg",
      title: "PiggyPro",
      description:
        "PiggyPro allows users to input their income, expenses, and budgets, and receive personalized financial advice based on their financial data.",
      link: "https://github.com/krishsonvane14/piggypro",
    },
    {
      id: "3",
      src: "/src/assets/portfolioWebsite.svg",
      title: "This Website!",
      description:
        "A responsive React Portfolio Website with a light & dark mode showcasing my projects and links to my socials!",
      link: "https://github.com/krishsonvane14/portfolio-website",
    },
  ];

  return (
    <section className={styles.portfolioSection} id="MyPortfolio">
      <div className={styles.portfolioContainerBox}>
        <div className={styles.portfolioContainer}>
          <p className="sub--title">Recent Projects</p>
          <h2 className="section--heading">My Portfolio</h2>
        </div>
      </div>
      <div className={styles.portfolioSectionContainer}>
        {portfolioData.map((item, index) => (
          <div key={index} className={styles.portfolioSectionCard}>
            <div className={styles.portfolioSectionImg}>
              <img src={item.src} alt={item.title} />
            </div>
            <div className={styles.portfolioSectionCardContent}>
              <h3 className={styles.portfolioSectionTitle}>{item.title}</h3>
              <p className={styles.projectDescription}>{item.description}</p>
              <a href={item.link} target="_blank" rel="noopener noreferrer" className={styles.portfolioLink}>
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
        ))}
      </div>
    </section>
  );
}
