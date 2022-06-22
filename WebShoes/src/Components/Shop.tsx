import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

import styles from "../Styles/Tenis.module.scss";
import "../App.scss";

import axios from "axios";

import { Shoes } from "./Shoes";

import {AiOutlineDelete} from 'react-icons/ai'
import { Toaster } from "react-hot-toast";

// import FirebaseShopServices from "../Services/FirebaseShopServices.js";
// import FirebaseContext from "../Utils/FirebaseContext.js";
// import { CreateShoe } from "./CRUD/CreateShoe";



type shoe = {
  title: string;
  desc: string;
  img: string;
  price: number
  _id: string;
};

function WindowButton(innerH) {
  return innerH > 649 ? true : false;
}

function WindowScroll(scrolY) {
  if (WindowButton(document.documentElement.scrollHeight))
    return scrolY > 60 ? true : false;
  return false;
}

//Using Firebase
// export const ShopContext = () =>
//   <FirebaseContext.Consumer>
//     {(firebase) => <Shop firebase={firebase} />}
//   </FirebaseContext.Consumer>

export function Shop() {
  const [shoesHendered, setShoesHendered] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3001/shop/list")
      .then((res) => {
        setShoesHendered(res.data);
      })
      .catch((error) => console.log(error));
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
              price={shoesHendered.price}
            />
            <div className={styles.buttons}>
              <button className={styles.buttonEdit}>Editar</button>
              <button className={styles.buttonDelete}><AiOutlineDelete size={20}/></button>
            </div>
          </div>

        ))}
      
        <button
          className={
            WindowScroll(window.scrollY) ? styles.button : styles.buttonNone 
          }
          onClick={() => navigate("/createShoe")}
        >
          +
        </button>

      </div>
      <Toaster  />
    </div>
  );
}
