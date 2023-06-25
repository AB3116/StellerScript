import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/button/Button";
import { items } from "./data";
import { notFound } from "next/navigation";

function getData(cat) {
  const data = items[cat];

  if (data) return data;

  return notFound();
}

function Category({ params }) {
  const data = getData(params.category);
  return (
    <main className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      {data.map((item) => (
        <section className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h2 className={styles.title}>{item.title}</h2>
            <p className={styles.desc}>{item.desc}</p>
            <Button url="#" text="See More" />
          </div>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              fill={true}
              src={item.image}
              alt="Illustration"
            />
          </div>
        </section>
      ))}
    </main>
  );
}

export default Category;
