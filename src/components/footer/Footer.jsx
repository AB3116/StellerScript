import Image from "next/image";
import styles from "./footer.module.css";

function Footer() {
  return (
    <footer className={styles.container}>
      <p>&copy;2023 StellerScript. All rights reserved.</p>
      <div className={styles.socials}>
        <Image
          src="/fb.png"
          width={16}
          height={16}
          className={styles.icon}
          alt="StellerScript Facebook"
        />
        <Image
          src="/ins.png"
          width={16}
          height={16}
          className={styles.icon}
          alt="StellerScript Instagram"
        />
        <Image
          src="/twt.png"
          width={16}
          height={16}
          className={styles.icon}
          alt="StellerScript Twitter"
        />
        <Image
          src="/yt.png"
          width={16}
          height={16}
          className={styles.icon}
          alt="StellerScript YouTube"
        />
      </div>
    </footer>
  );
}

export default Footer;
