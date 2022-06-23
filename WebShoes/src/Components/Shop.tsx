import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

import styles from "../Styles/Tenis.module.scss";
import "../App.scss";

import axios from "axios";

import { Shoes } from "./Shoes";

import {AiOutlineDelete} from 'react-icons/ai'
import { Toaster } from "react-hot-toast";
import { linkLocalHost } from "./Url/Link";
import { deleteShoe } from "./CRUD/DeleteShoe";

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
  return true;
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
    axios.get( linkLocalHost+"list")
      .then((res) => {
        setShoesHendered(res.data);
      })
      .catch((error) => console.log(error));
  }, [shoesHendered]);

  return (
    <div className={styles.box}>
      <div className={styles.section}>
        {shoesHendered.map((shoe: shoe, key) => (
          <div className={styles.container} key={key}>
            <Shoes
              title={shoe.title}
              desc={shoe.desc}
              img={shoe.img}
              price={shoe.price}
            />
            <div className={styles.buttons}>
              <button className={styles.buttonEdit}>Editar</button>
              <button 
                className={styles.buttonDelete}
                onClick={() => deleteShoe(shoe._id, shoe.title)}
                >
                  <AiOutlineDelete size={20}/>
              </button>
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
