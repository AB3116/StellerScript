import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts");

  if (!res.ok) {
    throw new Error("Failed to fetch blogs");
  }

  return res.json();
}

async function Blog() {
  const data = await getData();

  return (
    <main className={styles.container}>
      {data.map((item) => (
        <Link href={`/blog/${item._id}`} key={item._id}>
          <article className={styles.item}>
            <div className={styles.imgContainer}>
              <Image
                src={item.img}
                alt="Blog post"
                className={styles.img}
                width={300}
                height={200}
              />
            </div>
            <div className={styles.textContainer}>
              <h2 className={styles.title}>{item.title}</h2>
              <p className={styles.desc}>
                {item.desc}
              </p>
            </div>
          </article>
        </Link>
      ))}
    </main>
  );
}

export default Blog;
