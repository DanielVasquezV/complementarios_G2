import Image from "next/image";
import styles from "./page.module.css";

interface Jugador {
  id: number;
  nombre: string;
  altura: string;
  peso: string;
  foto: string;
}

interface Equipo {
  id: number;
  nombre: string;
  plantilla: Jugador[];
}

interface EquiposProps {
  equipos: Equipo[];
}

const Equipos = ({ equipos }: EquiposProps) => (
  <div className={styles.container__list}>
    <h2>Equipos de Fútbol</h2>
    {equipos.map((equipo: Equipo) => (
      <div key={equipo.id} className={styles.equipoCard}>
        <h3>{equipo.nombre}</h3>
        <ul>
          {equipo.plantilla.map((j: Jugador) => (
            <li key={j.id} className={styles.jugadorItem}>
              <div className={styles.fotoContainer}>
                <Image src={j.foto} alt={`Foto de ${j.nombre}`} width={50} height={50} className={styles.fotoJugador} />
              </div>
              <div className={styles.infoJugador}>
                <strong>{j.nombre}</strong>
                <span>{j.altura}m · {j.peso}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

const equiposData: Equipo[] = [
  {
    id: 1,
    nombre: "Real Madrid",
    plantilla: [
      { id: 1, nombre: "Vinicius Jr.", altura: "1.76", peso: "73Kg", foto: "/images/vinicius.webp" },
      { id: 2, nombre: "Jude Bellingham", altura: "1.86", peso: "75Kg", foto: "/images/Bellingham.webp" },
      { id: 3, nombre: "Kylian Mbappé", altura: "1.78", peso: "73Kg", foto: "/images/Mbappé.webp" },
    ],
  },
  {
    id: 2,
    nombre: "Barcelona",
    plantilla: [
      { id: 1, nombre: "Lamine Yamal", altura: "1.80", peso: "67Kg", foto: "/images/Yamal.webp" },
      { id: 2, nombre: "Robert Lewandowski", altura: "1.85", peso: "81Kg", foto: "/images/Lewandowski.webp" },
      { id: 3, nombre: "Gavi", altura: "1.73", peso: "68Kg", foto: "/images/Gavi.webp" },
    ],
  },
  {
    id: 3,
    nombre: "Manchester City",
    plantilla: [
      { id: 1, nombre: "Erling Haaland", altura: "1.95", peso: "88Kg", foto: "/images/Haaland.webp" },
      { id: 2, nombre: "Kevin De Bruyne", altura: "1.81", peso: "70Kg", foto: "/images/Bruyne.webp" },
      { id: 3, nombre: "Phil Foden", altura: "1.71", peso: "70Kg", foto: "/images/Foden.webp" },
    ],
  },
  {
    id: 4,
    nombre: "Arsenal",
    plantilla: [
      { id: 1, nombre: "Bukayo Saka", altura: "1.78", peso: "72Kg", foto: "/images/Saka.webp" },
      { id: 2, nombre: "Martin Ødegaard", altura: "1.78", peso: "68Kg", foto: "/images/Odegaard.webp" },
      { id: 3, nombre: "Declan Rice", altura: "1.88", peso: "80Kg", foto: "/images/Rice.webp" },
    ],
  }
];

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Mi Aplicación de Fútbol</h1>
      <Equipos equipos={equiposData} />
    </main>
  );
}
