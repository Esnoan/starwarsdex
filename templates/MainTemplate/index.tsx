import { Grid, Text } from "@nextui-org/react";
import Head from "next/head";
import Image from "next/image";
import { ReactNode } from "react";
import styles from "./main-template.module.css";

interface MainTemplateProps {
  children: ReactNode;
}
const MainTemplate = ({ children }: MainTemplateProps) => {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Starwarsdex</title>
          <meta name="description" content="starwarsdex" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <header className={styles.header}>
            <Text h1>Star Wars - Dex</Text>
          </header>
          {children}
        </main>

        <footer className={styles.footer}>
          <a href="https://github.com/Esnoan" target="_blank" rel="noopener noreferrer">
            Starwars-dex by Esnoan.
          </a>
        </footer>
      </div>
    </>
  );
};

export default MainTemplate;
