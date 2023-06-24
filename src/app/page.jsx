import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.png";

export default function Home() {
  return (
    <main className={styles.container}>
      <Image src={Hero} alt="Hero" />
    </main>
  );
}
