import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/button/Button";

function Category({ params }) {
  return (
    <main className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <section className={styles.item}>
        <div className={styles.content}>
          <h2 className={styles.title}>Lorem ipsum dolor sit</h2>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut tempore
            eligendi alias voluptatibus aliquid? Delectus facilis unde tenetur
            sequi minus.
          </p>
          <Button url="#" text="See More" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill={true}
            src="https://images.pexels.com/photos/1418595/pexels-photo-1418595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Illustration"
          />
        </div>
      </section>
      <section className={styles.item}>
        <div className={styles.content}>
          <h2 className={styles.title}>Lorem ipsum dolor sit</h2>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut tempore
            eligendi alias voluptatibus aliquid? Delectus facilis unde tenetur
            sequi minus.
          </p>
          <Button url="#" text="See More" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill={true}
            src="https://images.pexels.com/photos/1418595/pexels-photo-1418595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Illustration"
          />
        </div>
      </section>
    </main>
  );
}

export default Category;
