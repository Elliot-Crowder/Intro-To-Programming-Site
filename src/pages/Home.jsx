import React from "react";
import styles from "./Home.module.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Link } from "react-router";
import { useNavigate } from "react-router";

function HomePage() {
	const navigate = useNavigate();
	return (
		<>
			{/* <Header></Header> */}

			<div className={styles.courseIntro}>
				<div className={styles.leftColumn}>
					<p className={styles.introLine}>Intro to computer science</p>
					<h1>
						<span className={styles.styleBracket}>&lt;p&gt;</span>
						<span className={styles.title}>let's learn to code</span>
						<span className={styles.styleBracket}>&lt;/p&gt;</span>
					</h1>
					<button
						className={styles.startButton}
						onClick={() => navigate("/schedule")}
					>
						Get Started
					</button>
				</div>
				<div className={styles.rightColumn}>
					<SyntaxHighlighter
						language="python"
						style={oneDark}
						wrapLines={true}
						customStyle={{
							fontSize: "16px",
							padding: "1rem",
							marginTop: "20px",
							paddingTop: ".5rem",
						}}
					>
						{`
  name = input("What's your name?")

  def greet():
    print("Welcome to class "+ name)

  def introduction():
    print("""My name is Elliot and I will be
    teaching intro to programming with
    python!""")

  greet()
  introduction()
`}
					</SyntaxHighlighter>
				</div>
			</div>
			<div className={styles.courseDesc}>
				<p className={styles.courseParagraph}>
					In the next five weeks we are going to cover the basics of python
					syntax as well as fundamental programming principles. We will learn
					what programming is, develop a high level understanding of how
					computers work in tandem with coding languages, and create basic
					scripts to solve problems of varying difficulty. Don't worry if you
					don't have programming experience , this class will help build a
					foundation for those that wish to continue studying computer science
					in their future academic endeavors.
				</p>
				<p className={styles.courseParagraph}>
					All course materials including supplementary notes and assignments can
					all be found in the navigation at the top of the website. If you have
					any questions or concerns, feel free to email me.
				</p>
			</div>
			<div className={styles.buttonContainer}>
				{/* <button
					className={styles.contactButton}
					onClick={() =>
						(window.location = "mailto:elliot.k.crowder@gmail.com")
					}
				>
					Contact Me
				</button> */}
				<a
					className={styles.contactButton}
					// href="mailto:elliot.k.crowder@gmail.com"
					onClick={() => {
						window.open(
							"mailto:elliot.k.crowder@gmail.com?subject=Subject&body=Body%20goes%20here",
							"_blank"
						);
					}}
				>
					Contact Me
				</a>
			</div>
			<link
				href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
				rel="stylesheet"
			></link>
		</>
	);
}

export default HomePage;
