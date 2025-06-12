import styles from "./Schedule.module.css";
function Schedule() {
  return (
    <>
      <h1 className={styles.scheduleTitle}>
        Intro to Programming, Summer 2025 Schedule
      </h1>
      <div>
        <p className={styles.scheduleInfo}>
          This page is where you can find the tentative class schedule which
          includes the topics we are going to be covering each week. Each listed
          week will have a page of notes linked so that you can review the
          material we covered or use it as a reference for our programming
          assignments.
        </p>
        <table>
          <thead className={styles.scheduleHead}>
            <tr>
              <th>Date</th>
              <th>Topics</th>
              <th>Notes</th>
              <th>Assignments</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.divider} colSpan={4}>
                Week 1
              </td>
            </tr>
            <tr>
              <td>Lectures</td>
              <td>
                <ul className={styles.topicList}>
                  <li>Course intro</li>
                  <li>What is programming?</li>
                  <li>High level overview of how computers work</li>
                  <li>What is a programming language?</li>
                  <li>What is python?</li>
                  <li>Why use python?</li>
                  <li>static vs dynamic typing</li>
                  <li>The value of abstraction</li>
                  <li>Syntax</li>
                  <li>Tokenizing Python</li>
                  <li>Setting up the workspace</li>
                </ul>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>[insert date]</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td className={styles.divider} colSpan={4}>
                Week 2
              </td>
            </tr>
            <tr>
              <td>Lectures</td>
              <td>
                <ul className={styles.topicList}>
                  <li>print statements and simple output</li>
                  <li>"Hello world" running your first script</li>
                  <li>Syntax</li>
                  <li>
                    Data types: Integers, Strings, Chars, Doubles, Boolean etc
                  </li>
                  <li>
                    Basic mathematic operators (and some new ones): +, -, /, %,
                    *
                  </li>
                  <li>Variables</li>
                  <li>Conventions</li>
                  <li>User input</li>
                  <li>Comparison and Logical Operators</li>
                  <li>Statements and expressions</li>
                  <li>Control flow: if else</li>
                  <li>Errors, syntax vs runtime logic errors</li>
                  <li>Debugging</li>
                </ul>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>[insert date]</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td className={styles.divider} colSpan={4}>
                Week 3
              </td>
            </tr>
            <tr>
              <td>Lectures</td>
              <td>
                <ul className={styles.topicList}>
                  <li>Arrays</li>
                  <li>Composite types</li>
                  <li>Control flow: loops</li>
                  <li>Loop Control</li>
                  <li>Type conversion</li>
                  <li>Random numbers</li>
                </ul>
              </td>
              <td></td>
              <td>Guessing Game</td>
            </tr>
            <tr>
              <td>[insert date]</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td className={styles.divider} colSpan={4}>
                Week 4
              </td>
            </tr>
            <tr>
              <td>Lectures</td>
              <td>
                <ul className={styles.topicList}>
                  <li>Classes and objects</li>
                  <li>Object Oriented Programming</li>
                  <li>Methods and Attributes</li>
                  <li>__init__(): the power of dunder methods</li>
                  <li>Calling methods on classes</li>
                  <li></li>
                  <li>Inheritance?</li>
                </ul>
              </td>
              <td></td>
              <td>Animal Class</td>
            </tr>
            <tr>
              <td>[insert date]</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Schedule;
