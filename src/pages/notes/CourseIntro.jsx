import styles from "./NoteStyle.module.css";

export default function CourseIntro() {
  return (
    <>
      <h2 className={styles.pageTitle}>What is Programming?</h2>
      <main className={styles.pageNotes}>
        <section className={styles.definitions}>
          <div className={styles.definition}>
            <p>
              <span className={styles.sectionTitle}>
                Programming: A definition
              </span>
              "The process or activity of writing computer programs."
            </p>
          </div>
          <div className={styles.definition}>
            <p>
              <span className={styles.sectionTitle}>Program: A definition</span>
              "A set of instructions that a computer follows to perform a
              certain task."
            </p>
          </div>
        </section>
        <section className={styles.mainContent}>
          <div className={styles.contentSection}>
            <span className={styles.sectionTitle}>
              A metaphor for programming
            </span>
            <p>
              In essence, programming is akin to writing a recipe. A precise set
              of instructions that can be followed to achieve an intended
              result, albeit as well soon see first hand, computers are much
              better at precisely following directions than humans are. In fact,
              computer's interpret instructions so literally that if we are not
              careful we can run into all sorts of errors.
            </p>
            <p>
              Let me give you an example. Let's say its not a school day so you
              have slept in until 12pm and gotten at least 8 hours of sleep.
              When you get out of bed, you put on your pants, socks, shirt,
              jacket etc. Generally, as humans, we grow up understanding that
              there is a certain order we have to put on different garments of
              clothing. It would be pretty strange if we put on our socks before
              our shoes for example. But computers do not have the ability to
              make these inferences
              {
                " ( Though one might argue AI does have these capabilities, this is a conversation for another day. ) "
              }
            </p>
            <p>
              A computer, if it were told to get dressed might be given a list
              of garments to put on. Because the computer performs instructions
              sequentially, it might put on its shoes before its socks, or its t
              shirt over its jacket. Computers do not possess human intelligence
              and therefore do not guess or make assumptions, they do exactly as
              they are told. As you can probably see by now, sometimes computers
              take instructions so literally it can be frustrating.
            </p>
            <p>
              Fortunately, this literal interpretation that computers possess
              usually means that if a program does not behave as its expected,
              its the programmers instructiuons at fault, not the computer
              itself. This is actually a good thing as it keeps the programmer
              in control of the programs behavior and success.
            </p>
            <p>
              Hopefully you now see that there is a bit more nuance to
              instructions than you might have initially thought. Its easy to
              tell a person to go from point a to b, but if a tree is in the
              way, a computer does not have the intuition to avoid it. This is
              why precise and succinct instructions are vital for developing
              clean and performant code.
            </p>
          </div>
          <div className={styles.contentSection}>
            <span className={styles.sectionTitle}>
              What's the big deal about instructions?
            </span>
            <p>
              Wow, awesome. A computer can follow instructions, sometimes so
              literally it runs itself into the ground, what's so cool about
              that?
            </p>
            <p>
              Well soon see its not only the fact that computers can follow
              instructions, but also the speed at which they can follow them,
              that make computers so useful. Now we haven't written any code
              yet, but imagine we told the computer to compute the answer to
              5+5. This is not that impressive. Sure, it evalutated the
              expression in under a second, but im sure you're thinking, I can
              do that in my head just as fast; and you're absolutely right.
              There is not much utility in coding a program that adds single
              digit numbers. But what if we wanted to add
              1987451010249+19891237884?
            </p>
            <p>
              Technically speeking this still is not that hard for us to do by
              hand, but to do it in a few milliseconds? now we're getting
              somewhere.We can take this even further by thinking about the
              calculator app on our phones or computer's web browser. This
              allows us to do a lot more than addition, and we can use any
              number we want. So while code that only spits out the answer to
              5+5 is not that useful, code can be generalized to solve a wide
              range of problems in the same problem space, in this case, the
              addition of any two integers.
            </p>
            <p>
              As another example of just how fast and efficient computers are,
              computers can sort thousands of numbers in under a second from
              smallest to largest or vice versa; a task that would take a person
              much longer to do. (as a side note, sorting is actually quite a
              complex topic and there are both good and bad ways to sort
              things.)
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
