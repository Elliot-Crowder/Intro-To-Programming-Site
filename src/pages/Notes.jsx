import styles from "./Notes.module.css";
import { Link } from "react-router";
function Notes() {
  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.pageTitle}>Notes and Examples</h2>
        <p className={styles.notesInfo}>
          On this page you can find a collection of notes I've put together that
          cover all of the topics, and some extra fun facts, that we will cover
          in the class. You are welcome to take your own notes or reference
          these as you work on coding your own projects or are confused about a
          topic we discuss.
        </p>
        <table className={styles.notesTable}>
          <thead className={styles.notesHead}>
            <tr>
              <th>Week</th>
              <th>Topic</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Week 1</td>
              <td>
                <Link to="notes/course-intro" className={styles.link}>
                  Course Introduction: What is Programming?
                </Link>
              </td>
            </tr>
            <tr>
              <td>Week 1</td>
              <td>
                <Link to="notes/architecture-overview" className={styles.link}>
                  High Level Overview of How Computers Work
                </Link>
              </td>
            </tr>
            <tr>
              <td>Week 1</td>
              <td>
                <Link to="notes/syntax" className={styles.link}>
                  Tokenizing Python: Syntax
                </Link>
              </td>
            </tr>
            <tr>
              <td>Week 1</td>
              <td>
                <Link to="notes/setup" className={styles.link}>
                  Setting up our workspace: Replit
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Notes;
