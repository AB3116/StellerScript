import Image from "next/image";
import styles from "./page.module.css";
import ContactImg from "/public/contact.png";
import Button from "@/components/button/Button";

function Contact() {
  return (
    <main className={styles.container}>
      <section className={styles.imageContainer}>
        <Image
          src={ContactImg}
          alt="Contact"
          fill={true}
          className={styles.img}
        />
      </section>
      <section className={styles.formContainer}>
        <form className={styles.form}>
          <input type="text" className={styles.input} placeholder="Name" />
          <input type="text" className={styles.input} placeholder="Email" />
          <textarea className={styles.textarea} placeholder="Message" />
          <Button url="#" text="Send" />
        </form>
      </section>
    </main>
  );
}

export default Contact;
