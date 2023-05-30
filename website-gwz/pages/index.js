import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Website GWZ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Geïntegreerde Wijkzorg
        </h1>


        <div className={styles.grid}>
          <Link href="/geintegreerde-wijkzorg" className={styles.card}>
            <h3>Wat is Geïntegreerde Wijkzorg? &rarr;</h3>
            <p>Klik hier voor de uitleg</p>
          </Link>

          <Link href="/werkwijze" className={styles.card}>
            <h3>Werkwijze &rarr;</h3>
            <p>Hoe gaan wij te werk</p>
          </Link>

          <Link href="/wijkzorgorganisaties" className={styles.card}>
            <h3>Wijkzorgorganisaties &rarr;</h3>
            <p>Informatie voor wijkzorgorganisaties</p>
          </Link>

          <Link href="/gemeenten" className={styles.card}>
            <h3>Gemeenten &rarr;</h3>
            <p>Informatie voor gemeenten</p>
          </Link>

          <Link href="/therapeuten" className={styles.card}>
            <h3>Therapeuten &rarr;</h3>
            <p>Informatie voor 1e-lijnstherapeuten</p>
          </Link>

          <Link href="/themas" className={styles.card}>
            <h3>Thema's &rarr;</h3>
            <p>Welke thema's staan centraal?</p>
          </Link>

          <Link href="/about" className={styles.card}>
            <h3>Over ons &rarr;</h3>
            <p>Klik hier voor meer informatie over ons</p>
          </Link>

          <div>
            <p>In de eerste lijn is samenwerking niet eenvoudig of vanzelfsprekend. Wij begeleiden al meer dan tien jaar teams en organisaties bij het tot stand brengen van Geïntegreerde WijkZorg (GWZ). </p>
            <p>Het doel van GWZ is het behouden én vergroten van de zelfredzaamheid van cliënten zodat deze zo lang mogelijk, veilig en gelukkig in de eigen vertrouwde omgeving kunnen wonen. GWZ is netwerkzorg rondom thuiswonende (kwetsbare) ouderen, chronisch zieken en terminale cliënten, waarbij de cliëntsituatie centraal staat in de organisatie van de samenwerking. </p>
            <p>Wij onderzoeken op welke manier alle stappen, die nodig zijn om een goed GWZ-team te vormen, kunnen worden gezet en met welke partijen. Vanuit onze jarenlange ervaring weten we welke factoren belangrijk zijn om multidisciplinaire samenwerking te laten slagen. Stap-voor-stap worden de deelnemers van een GWZ-team zo begeleid dat aan het eind van het trainingstraject samenwerking vanzelfsprekend, laagdrempelig én leuk is geworden. </p>
          </div>
        </div>
      </main>

      <footer>
        <a
          href="https://frankmolenaar.net"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '} Frank Molenaar
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
