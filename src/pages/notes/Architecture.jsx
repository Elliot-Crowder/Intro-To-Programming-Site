import styles from "./NoteStyle.module.css";

export default function ArchitectureOverview() {
  return (
    <>
      <h2 className={styles.pageTitle}>How do Computers Really Work?</h2>
      <main className={styles.pageNotes}>
        <section className={styles.definitions}>
          <div className={styles.definition}>
            <p>
              <span className={styles.sectionTitle}>
                Abstraction: A definition
              </span>
              "The essence of abstraction is preserving information that is
              relevant in a given context, and forgetting information that is
              irrelevant in that context. – John V. Guttag"
            </p>
          </div>
        </section>
        <section className={styles.mainContent}>
          <div className={styles.contentSection}>
            <span className={styles.sectionTitle}>The Nitty Gritty</span>
            <p>
              We won’t go into the physics and electronics that enable computers
              to work, but we will briefly discuss how computers interpret
              instructions at their lowest level. Like we talked about before,
              computer’s read instructions from a programmer, oftentimes in what
              we call a high level language like python or javascript.
            </p>
            <span className={styles.sectionTitle}>
              🧐 What makes these languages “high-level”?
            </span>
            <p>
              This question gets at a core component of programming that we call
              abstraction. Abstraction is taking complexity and hiding it
              beneath a veil of simplicity, allowing you to focus on the details
              of how something is used, while being able to ignore the details
              of how it's built inside.
            </p>
            <p>
              A good way to think about this is like driving or for you guys,
              riding in a car. You can ride in a car without knowing or worrying
              about how the engine and technologies of the car work. The
              steering wheel, pedals, and dashboard are all interfaces that make
              it easy for the driver and passenger to use the car without
              worrying about the complex moving parts behind them.
            </p>
            <p>
              Python and languaes like it are built in the same way. They hide a
              lot of the complicated math and computer specific instructions,
              keeping them internal so that you can focus on writing simple and
              readable code.
            </p>
            <p>
              For beginners like you all, this is great. It lets you focus on
              learning the basics without being bogged down by computer
              scientist gibberish. But for some experienced programmers, its
              nice to have access to some of the internal workings of the
              computer so that they can be tuned more specifically for specific
              use cases.
            </p>
            <p>
              Fun fact: Python itself is built using another language called C.
              C much more closely models the inner workings of the computer and
              is much more complex to write because the programmer has to manage
              a lot more details behind the scenes.
            </p>
            <p>
              At the lowest level, computers don't actually understand words or
              numbers like we do. In fact, the only understand two things, 1s
              and 0s. These are used to represent two possible states, like a
              light switch being on {"(1)"} or off {"(0)"}. Now you might be
              wondering how we can write 5+5 in Python and have the computer
              figure out the answer using just 1s and 0s. For now, we'll treat
              that like magic. Later in the course we might take a small peak
              behind the veil of mystery, but for now, its enough to know that
              the tools we are using to build our programs are built on these
              tiny pieces of data.
            </p>
          </div>
          <div className={styles.contentSection}>
            <span className={styles.sectionTitle}>
              Base 2 Number Systems and Discrete Mathematics
              {
                " (not necessary to read for this course, but definitely worth a read if you are interested in knowing a bit more about how computer's operate) "
              }
            </span>
            <p>
              You are probably familiar with the number system we use every day;
              counting from 0 to 9 and then starting over with 10, 11, 12, and
              so on. This is called the base 10 number system because it uses
              ten digits {"(0-9"}. Computer's however work differently. Because
              computers rely on electrical signlas, like tiny light switches
              that can either be on orff, they only need to understand two
              states. This makes a different number system called base 2 or
              binary, a better fit. Binary uses only two digits, 1 and 0.
              Instead of writing numbers like 1,2,3,4,5... a computer stores
              information as strings of 1s and 0s.
            </p>
            <span className={styles.sectionTitle}>
              A Quick Note on the Math
            </span>
            <p>
              We won’t dive too deep into the math behind this right now, but
              there’s a whole area of mathematics called discrete math that
              explains exactly how computers use these 1s and 0s to do
              calculations and store data. It’s not super important to
              understand all of that today, and in fact, there are tons of other
              complicated processes happening behind the scenes even when you
              write the simplest program.
            </p>
            <span className={styles.sectionTitle}>Important Takeaways</span>
            <p>
              All the complexity we talked about is hidden behind the scenes,
              thanks to something called abstraction
            </p>
            <p>
              When you write code in a language like Python, you are writing
              instructions that are easy for other people to read and
              understand. Then, your compute breaks those instructions down and
              turns them into 1s and 0s it can actually follow.
            </p>
            <p>
              And that's what makes programming so powerful, you get to work in
              Python with human readable instructions while your computer does
              all of the hard work underneath.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
