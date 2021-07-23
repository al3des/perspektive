import Head from "next/head"
import Image from "next/image"
import afrika from "../public/afrika.png"
import deutschland from "../public/deutschland.png"
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.afrika}>
          <div className={styles.title}>
            <div>
              <h2>SCHWARZROTGOLD</h2>
              <h3>Das Magazin der Bundesregierung</h3>
            </div>
            <div>
              <p className={styles.edNumber}>1</p>
              <p className={styles.year}>2021</p>
            </div>
          </div>
          <div className={styles.contentTable}>
            <ul>
              <li>AN IDEEN MANGELT ES IN GHANA NICHT</li>
              <li>DER FÖRSTER VOM CHAMO-SEE</li>
              <li>EINDRÜCKE EINES BOTSCHAFTERS</li>
            </ul>
          </div>
          <Image src={afrika} alt="Afrika Perspektive" />
        </div>
        <div className={styles.deutschland}>
          <div className={styles.title}>
            <div>
              <h2>SCHWARZROTGRAU</h2>
              <h3>Das andere Magazin der Bundesregierung</h3>
            </div>
            <div>
              <p className={styles.edNumber}>1</p>
              <p className={styles.year}>2021</p>
            </div>
          </div>
          <div className={styles.contentTable}>
            <ul>
              <li>AN IDEEN MANGELT ES IN CATASTRP-RAUXEL NICHT</li>
              <li>DER FÖRSTER VOM WANNSEE</li>
              <li>EINDRÜCKE EINES GASTAREITERS</li>
            </ul>
          </div>
          <Image src={deutschland} alt="Deutschland Perspektive" />
        </div>
      </main>
    </div>
  )
}
