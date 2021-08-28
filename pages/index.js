/* eslint-disable @next/next/link-passhref */
import Head from "next/head";
import Image from "next/image";
import profilePic from "../public/imagem.png";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import pictures from "../public/fundoefeito.png";
import { useRouter } from "next/router";

export default function Home() {
  return (
    <>
      <Head>
        <title>JobsNet</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="navbar navbar-expand-lg navbar-expand-sm  navbar-light naveCustom">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <a className="nav-link" href="#register">
              <p className={styles.home}>Home</p>
            </a>
          </ul>
        </div>
      </nav>

      <div className="container">
        <div className={`${styles.titleDiv} row`}>
          <div className="col-6">
            <h1 className={`${styles.title}`}>
              Encontre novas vagas todos os dias.
            </h1>
            <p className={styles.subtitlehome}>
              Conquiste seu emprego dos sonhos
            </p>
          </div>
          <div className="col-6">
            <a className={styles.imageminicial}>
              <Image src={profilePic} alt="Picture of the author" />
            </a>
          </div>
        </div>

        <div className={styles.botaohome}>
          <Link href="/register">
            <button type="button" className="btn btn-outline-dark">
              Cadastro
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
