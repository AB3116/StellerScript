"use client";
import { useSession } from "next-auth/react";
import styles from "./page.module.css";
import useSWR from "swr";

function Dashboard() {
  const session = useSession()
  console.log(session)

  // const fetcher = (...args) => fetch(...args).then((res) => res.json());
  // const { data, error, isLoading } = useSWR(
  //   "https://jsonplaceholder.typicode.com/posts",
  //   fetcher
  // );
  // console.log(data)

  return (
    <div>
      Dashboard
    </div>
  );
}

export default Dashboard;
