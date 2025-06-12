import styles from "./AboutMe.module.css";
import selfie from "../assets/selfie.jpg";
function AboutMe() {
  return (
    <>
      <section className={styles.hero}>
        <img
          src={selfie}
          className={styles.headshot}
          width="150"
          height="150"
        ></img>
        <div className={styles.rightColumn}>
          <h1>
            <span className={styles.title}>About Me</span>{" "}
            {/* <span className={styles.title}>Me</span> */}
          </h1>
          <p>
            Hi, my name is Elliot but a lot of my friends refer to me as Kenji{" "}
            {"(my middle name)"} so you are welcome to use either. I am
            currently a computer science student. I studied for two years at the
            University of California Irvine in southern California, and
            currently I am taking classes here in Sacramento at SCC and CRC.
          </p>
          <p>
            Coding of course is not my only hobby, I love fashion, playing video
            games, eating food, listening to and discovering new music, and
            video editing. Feel free to watch the video I edited that I've
            included here.
          </p>
          <iframe
            src="https://www.youtube.com/embed/ePDPqEXxfTU"
            allowFullScreen
            title="edit"
            frameBorder="0"
            width="720"
            height="400"
          ></iframe>
          <p>
            If you love problem solving and technology, you should definitely
            consider studying computer science in the future, and I hope this
            class gives you a small taste of what the discipline has to offer.
            Computer science like any STEM degree is difficult and will require
            you to take challenging logic and mathematics courses, but it's a
            field that is prevalent in almost all aspects of our lives. I hope
            you all have fun learning in the next few weeks and come out of this
            class inspired to further your studies in the subject.
          </p>
        </div>
      </section>
    </>
  );
}
export default AboutMe;
