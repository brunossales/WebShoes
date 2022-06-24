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
  price: number;
  _id: string;
};


//Using Firebase
// export const ShopContext = () =>
//   <FirebaseContext.Consumer>
//     {(firebase) => <Shop firebase={firebase} />}
//   </FirebaseContext.Consumer>

export function Shop() {
  const [shoesHendered, setShoesHendered] = useState<shoe[]>([]);
  const navigate = useNavigate();

  function requestAxios(){
    axios.get( linkLocalHost+"list")
    .then((res) => {
      setShoesHendered(res.data);
    })
    .catch((error) => console.log(error));
  }

  function windowButton(innerH: Number) {
    return innerH > 649 ? true : false;
  }
  
  function windowScroll() {
    if (windowButton(document.documentElement.scrollHeight))
      return scrollY > 50 ? true : false;
    return true;
  } 

  useEffect(() => {
    requestAxios()
  }, []);

  function deleteShoeById(_id){
    let newShoeHendered = shoesHendered

    for (let i = 0; i < newShoeHendered.length; i++)
      if(newShoeHendered[i]._id === _id)
        newShoeHendered.splice(i, 1);
        
    setShoesHendered([...newShoeHendered]);
  }

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
                onClick={() => deleteShoe(shoe._id, shoe.title, deleteShoeById(shoe._id))}
                >
                  <AiOutlineDelete size={20}/>
              </button>
            </div>
          </div>
        ))}
      
        <button
          className={
            windowScroll() ? styles.button : styles.buttonNone 
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
