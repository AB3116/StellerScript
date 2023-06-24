import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.png";

export default function Home() {
  return (
    <main className={styles.container}>
      <section className={styles.item}>
        <h1 className={styles.title}>
          Better design for your digital products.
        </h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, sint!
        </p>
        <button className={styles.button}>See Our Works</button>
      </section>
      <section className={styles.item}>
        <Image src={Hero} alt="Hero" className={styles.heroImg} />
      </section>
    </main>
  );
}
