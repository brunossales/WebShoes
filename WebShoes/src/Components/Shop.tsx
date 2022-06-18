import { useEffect, useState } from "react";

import styles from "../Styles/Tenis.module.scss";
import "../App.scss";

import { Shoes } from "./Shoes";

import FirebaseShopServices from "../Services/FirebaseShopServices.js";
import FirebaseContext from "../Utils/FirebaseContext.js";
import { CreateShoe } from "./CRUD/CreateShoe";
import { Navigate, useNavigate } from "react-router-dom";

type shoe = {
  title: string;
  desc: string;
  img: string;
};

export const ShopContext = () => 
  <FirebaseContext.Consumer>
    {(firebase) => <Shop firebase={firebase} />}
  </FirebaseContext.Consumer>


function Shop(props) {
  const [shoesHendered, setShoesHendered] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    FirebaseShopServices.list(props.firebase.getFirestoreDb(), (shoes) =>
      setShoesHendered(shoes)
    );
  }, [shoesHendered]);

  return (
    <div className={styles.box}>
      <div className={styles.section}>
        {shoesHendered.map((shoesHendered: shoe, key) => (
          <div className={styles.container} key={key}>
            <Shoes
              title={shoesHendered.title}
              desc={shoesHendered.desc}
              img={shoesHendered.img}
            />
            <button>Editar</button>
          </div>
        ))}
        
        <button className={ styles.button } onClick={ () => navigate('/createShoe')}>
          +
        </button>
      </div>
    </div>
  );
}
