import Head from "next/head";
// import Image from 'next/image'
import styles from "../styles/Home.module.css";
import { Login } from "../components/login";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Synaus</title>
        <meta name="description" content="Developed by Nazmul H. Sourab" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Login />
    </div>
  );
}
