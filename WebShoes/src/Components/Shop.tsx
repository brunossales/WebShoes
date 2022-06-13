import styles from "../Styles/Tenis.module.scss";

import "../App.scss";
import { Tenis } from "./Shoes";

export function Loja() {
  const shoesDescription = [
    {
      title: "Tênis numero 1",
      desc: "Tenis criado por Bruno usando o link da api do unsplash",
      img: "https://source.unsplash.com/250x250/?shoes",
    },
    {
      title: "Tênis numero 2",
      desc: "Tenis criado por Bruno usando o link da api do unsplash",
      img: "https://source.unsplash.com/250x250/?shoes",
    },
    {
      title: "Tênis numero 3",
      desc: "Tenis criado por Bruno usando o link da api do unsplash",
      img: "https://source.unsplash.com/250x250/?shoes",
    },
    {
      title: "Tênis numero 4",
      desc: "Tenis criado por Bruno usando o link da api do unsplash",
      img: "https://source.unsplash.com/250x250/?shoes",
    },
    {
      title: "Tênis numero 4",
      desc: "Tenis criado por Bruno usando o link da api do unsplash",
      img: "https://source.unsplash.com/250x250/?shoes",
    },
    {
      title: "Tênis numero 4",
      desc: "Tenis criado por Bruno usando o link da api do unsplash",
      img: "https://source.unsplash.com/250x250/?shoes",
    },
    {
      title: "Tênis numero 4",
      desc: "Tenis criado por Bruno usando o link da api do unsplash",
      img: "https://source.unsplash.com/250x250/?shoes",
    },
    {
      title: "Tênis numero 4",
      desc: "Tenis criado por Bruno usando o link da api do unsplash",
      img: "https://source.unsplash.com/250x250/?shoes",
    },
  ];

  return (
    <div className={styles.section}>
      {shoesDescription.map((shoesDescription) => (
        <div className={styles.container}>
          <Tenis
            title={shoesDescription.title}
            desc={shoesDescription.desc}
            img={shoesDescription.img}
          />
          <button>Editar</button>
        </div>
      ))}

      <button className={styles.button}>+</button>
    </div>
  );
}
