import styles from "./NoteStyle.module.css";

export default function Syntax() {
  return (
    <>
      <h2 className={styles.pageTitle}>Tokenizing Python: Syntax</h2>
      <main className={styles.pageNotes}>
        <section className={styles.definitions}>
          <div className={styles.definition}>
            <p>
              <span className={styles.sectionTitle}>Syntax: A definition</span>
              "he set of rules that define the structure and arrangement of
              elements within a programming language"
            </p>
          </div>
        </section>
        <section className={styles.mainContent}>
          <div className={styles.contentSection}>
            <span className={styles.sectionTitle}>
              A metaphor for programming
            </span>
            <p>
              As we talked about before, Python is a high level language that
              allows us to write commands to the computer in standard english as
              opposed to specialized commands or 1s and 0s.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
