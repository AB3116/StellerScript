import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function Blog() {
  const data = await getData();

  return (
    <main className={styles.container}>
      {data.map((item) => (
        <Link href={`/blog/${item.id}`} key={item.id}>
          <article className={styles.item}>
            <div className={styles.imgContainer}>
              <Image
                src="https://images.pexels.com/photos/7957992/pexels-photo-7957992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Blog post"
                className={styles.img}
                width={300}
                height={200}
              />
            </div>
            <div className={styles.textContainer}>
              <h2 className={styles.title}>{item.title}</h2>
              <p className={styles.desc}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
                laborum aut id omnis tempora! Totam animi hic ipsum eius velit.
                Nulla incidunt blanditiis quidem expedita. Veniam perferendis
                fugit ipsam labore.
              </p>
            </div>
          </article>
        </Link>
      ))}
    </main>
  );
}

export default Blog;
