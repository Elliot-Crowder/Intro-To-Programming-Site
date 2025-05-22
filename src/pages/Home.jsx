import React from "react";
import Header from "../components/Header";
import styles from "./Home.module.css";

function HomePage() {
  return (
    <>
      <body>
        <Header></Header>
        <main>
          <div className={styles.courseIntro}>
            <div className={styles.leftColumn}>
              <p>Intro to computer science</p>
              <h1>
                <span className={styles.styleBracket}>&lt;p&gt;</span>
                <span className={styles.title}>let's learn to code</span>
                <span className={styles.styleBracket}>&lt;/p&gt;</span>
              </h1>
              <button className={styles.startButton}>Get Started</button>
            </div>
            <div className={styles.rightColumn}>
              <div className={styles.courseDesc}>
                <p className={styles.courseParagraph}>
                  In the next five weeks we are going to cover introductory
                  python syntax as well as fundamental programming principles.
                </p>
                <p className={styles.courseParagraph}>
                  All course materials including supplamentary notes and
                  assignments can all be find in the navigation at the top of
                  the website.
                </p>
              </div>
            </div>
          </div>
        </main>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
          rel="stylesheet"
        ></link>
      </body>
    </>
  );
}

export default HomePage;
