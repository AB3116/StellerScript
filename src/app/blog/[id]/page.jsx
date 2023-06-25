import Image from "next/image";
import styles from "./page.module.css";

function BlogPost() {
  return (
    <main className={styles.container}>
      <article className={styles.article}>
        <section className={styles.topContainer}>
          <div className={styles.text}>
            <h1 className={styles.heading}>
              Lorem ipsum dolor sit, amet consectetur. Hic, aperiam!
            </h1>
            <p className={styles.subheading}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              doloremque magnam numquam eius eum temporibus magni provident
              reprehenderit distinctio. Exercitationem quisquam tempore impedit.
              Repellendus, enim amet.
            </p>
            <div className={styles.authorContainer}>
              <Image
                src="https://images.pexels.com/photos/7533347/pexels-photo-7533347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Author"
                width={40}
                height={40}
                className={styles.authorImg}
              />
              <h2 className={styles.authorName}>John Doe</h2>
            </div>
          </div>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              src="https://images.pexels.com/photos/7957992/pexels-photo-7957992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Blog"
              fill={true}
            />
          </div>
        </section>
        <section className={styles.blogContainer}>
          <p className={styles.blogText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
            perferendis eum? Quia laudantium, id quis ratione ex porro
            architecto obcaecati esse iste illum ipsa nesciunt ducimus cum quod
            exercitationem rem doloribus. Quas fugiat suscipit quia repellendus
            provident voluptatem, possimus, sapiente blanditiis amet soluta a
            enim ab facere similique architecto harum.
          </p>
          <p className={styles.blogText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            vitae sed beatae, soluta, itaque esse repudiandae maiores laboriosam
            quibusdam, eos cumque earum iusto voluptates aperiam quaerat quae
            omnis inventore provident at eius quos mollitia repellendus.
            Dignissimos libero, animi veniam autem architecto corporis optio
            blanditiis atque sapiente eveniet ad quibusdam quis magnam pariatur
            incidunt provident reprehenderit ut? Delectus tempora eius
            distinctio! Assumenda esse minima placeat praesentium cum sit optio,
            consectetur eum? Sunt, modi? Numquam obcaecati asperiores possimus,
            fugit totam, ipsa voluptatem animi et qui odio officia illum
            temporibus, voluptatibus quasi repudiandae modi beatae dolorum iure
            quos consectetur laboriosam quisquam architecto libero?
          </p>
          <p className={styles.blogText}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
            dolore aliquid reprehenderit beatae quasi explicabo aperiam
            asperiores dolor consequatur in, natus quibusdam? Ullam voluptates
            voluptatum voluptatem ea commodi molestias. Et itaque, sunt quidem
            ratione similique aperiam! Praesentium cupiditate porro dignissimos
            est qui illo nulla, totam aperiam consectetur eligendi pariatur quia
            laboriosam ut perferendis inventore! Officia suscipit sit,
            consectetur corrupti illo, sed ex quasi eligendi tempore rem eos
            fugiat eaque cum eius error mollitia, quos modi!
          </p>
          <p className={styles.blogText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur reprehenderit distinctio a nulla nobis! Ducimus quod,
            minima sint quasi molestiae tempore ipsa ab, repellat, consectetur
            ullam rerum perferendis. Repellendus nulla magnam dolores ducimus
            eius doloribus veritatis? Ratione nisi nesciunt debitis omnis,
            magnam dignissimos! Laudantium magnam aliquam similique? Unde
            reprehenderit excepturi quas, incidunt fuga voluptate! Veritatis
            temporibus ut quas perspiciatis error dolor labore quaerat, ad
            dolores, eius ipsum qui laboriosam. Nihil quidem quas aspernatur
            dolore sunt neque tempora ex illum, voluptates nostrum perspiciatis
            reprehenderit! Nemo quidem voluptate eligendi? Laborum assumenda
            aliquid est delectus hic saepe sapiente quis quos minus porro
            asperiores, ad qui nesciunt facilis, voluptatibus laboriosam maxime
            dignissimos rem impedit pariatur dolorum deserunt totam doloribus!
            Animi placeat itaque optio tempora.
          </p>
          <p className={styles.blogText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            harum, officia tempora perspiciatis explicabo excepturi, voluptatum
            minus assumenda fuga non quaerat enim accusamus nostrum iste sint
            consequatur perferendis. Pariatur culpa delectus fugiat quaerat
            eveniet magni ipsa temporibus eligendi veritatis dignissimos omnis
            corrupti, optio dolores magnam! Vero ullam qui cupiditate assumenda
            consequuntur quidem rerum similique. Fuga sapiente porro quaerat id
            inventore.
          </p>
        </section>
      </article>
    </main>
  );
}

export default BlogPost;
