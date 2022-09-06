import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";

export default function Home() {
  const [animalInput, setAnimalInput] = useState("");
  const [result, setResult] = useState();


  return (
    <div>
      <Head>
        <title>Queries.io</title>
        {/* <link rel="icon" href="/logo.jpg" /> */}
      </Head>

      <main className={styles.main}>
        {/* <img src="/logo.jpg" className={styles.icon} /> */}
        <h3>Query Your Database</h3>
        <div className={styles.container}>
        
        </div>
      </main>
    </div>
  );
}
