import AboutImg from "/public/about.jpeg";
import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/button/Button";

export const metadata = {
  title: "StellerScript | About",
  description: "About StellerScript",
};

function About() {
  return (
    <main className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={AboutImg} alt="About" fill={true} className={styles.img} />
        <div className={styles.imgTexts}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Lorem ipsum dolor sit amet consectet
          </h2>
        </div>
      </div>
      <section className={styles.textContainer}>
        <article className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.text}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam,
            atque.
          </p>
          <p className={styles.text}>
            Ipsum dolor sit amet consectetur adipisicing elit. Itaque tenetur
            maxime at architecto neque quos obcaecati, culpa consequuntur
            nesciunt! Praesentium. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. In est consequuntur fugit necessitatibus ut
            aspernatur voluptatum impedit ratione. Fugit asperiores, maxime
            incidunt laborum iure totam?
          </p>
          <p className={styles.text}>Lorem ipsum dolor sit amet.</p>
        </article>
        <article className={styles.item}>
          <h1 className={styles.title}>Who Do We Do?</h1>
          <p className={styles.text}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam,
            atque. Ipsum dolor sit amet consectetur adipisicing elit. Itaque
            tenetur maxime.
          </p>
          <p className={styles.text}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam,
            atque. Ipsum dolor sit.
          </p>
          <p className={styles.text}>
            <strong>- Dynamic Websites</strong>
          </p>
          <p className={styles.text}>
            <strong>- Fast and Handy</strong>
          </p>
          <p className={styles.text}>
            <strong>- Mobile Apps</strong>
          </p>
          <Button url="/" text="Contact" />
        </article>
      </section>
    </main>
  );
}

export default About;
