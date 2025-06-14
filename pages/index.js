import Head from "next/head";
import Link from 'next/link';
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>DevNest</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* the body of the main page */}

     <div className={styles.container}>
        <h1 className={styles.title}>Welcome to DevNest</h1>
        <p className={styles.tagline}>
          Discover talented developers from around the world, one profile at a time.
        </p>
        <Link href='/developers'>
          <button className={styles.button}>Browse Devs</button>
        </Link>

    </div>
    </>
  );
}
