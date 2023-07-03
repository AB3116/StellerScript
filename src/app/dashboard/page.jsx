"use client";
import { useSession } from "next-auth/react";
import styles from "./page.module.css";
import useSWR from "swr";
import { useRouter } from "next/navigation";
import Image from "next/image";

function Dashboard() {
  const session = useSession();
  const router = useRouter();

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  );

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "unauthenticated") {
    router?.push("/dashboard/register");
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const title = event.target[0].value;
    const desc = event.target[1].value;
    const img = event.target[2].value;
    const content = event.target[3].value;

    try {
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session.data.user.name,
        }),
      });
      mutate();
      event.target.reset();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (err) {
      console.error(err);
    }
  };

  if (session.status === "authenticated") {
    return (
      <div className={styles.container}>
        <div className={styles.posts}>
          {isLoading ? (
            "Loading..."
          ) : (
            <>
              <h1 className={styles.yourPosts}>Your Posts</h1>
              {data.map((post) => (
                <div key={post._id} className={styles.post}>
                  <div className={styles.imgContainer}>
                    <Image src={post.img} alt={post.title} fill={true} />
                  </div>
                  <h2 className={styles.postTitle}>{post.title}</h2>
                  <span
                    className={styles.delete}
                    onClick={() => handleDelete(post._id)}
                  >
                    Delete
                  </span>
                </div>
              ))}
            </>
          )}
        </div>
        <form className={styles.new} onSubmit={handleSubmit}>
          <h1>Add New Post</h1>
          <input type="text" placeholder="Title" className={styles.input} />
          <input
            type="text"
            placeholder="Description"
            className={styles.input}
          />
          <input type="text" placeholder="Image" className={styles.input} />
          <textarea
            type="text"
            placeholder="Content"
            className={styles.textarea}
          />
          <button type="submit" className={styles.button}>
            Send
          </button>
        </form>
      </div>
    );
  }
}

export default Dashboard;
