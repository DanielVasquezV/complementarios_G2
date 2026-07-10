import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.welcome}>
        <h1>Guía 2</h1>
        <p>Seleccione un ejercicio en la barra de navegación para ver.</p>
      </div>
    </main>
  );
}
