import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

import styles from "../Styles/Tenis.module.scss";
import "../App.scss";

import axios from "axios";

import { Shoes } from "./Shoes";

import { AiOutlineDelete } from "react-icons/ai";
import { Toaster } from "react-hot-toast";
import { linkLocalHost } from "./Url/Link";
import { deleteShoe } from "./CRUD/DeleteShoe";
import { windowScroll } from "./Controller/ControllerScroll";

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
  const [shoesRendered, setShoesRendered] = useState<shoe[]>([]);
  const [showButton, setShowButton] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    requestAxios();

    const changeShowButton = () => setShowButton(windowScroll());
    window.addEventListener("scroll", changeShowButton);
    
    return () => {
      setShoesRendered([]);
      window.removeEventListener("scroll", changeShowButton);
    };
  }, []);

  function requestAxios() {
    axios
      .get(linkLocalHost + "list")
      .then((res) => {
        setShoesRendered(res.data);
      })
      .catch((error) => console.log(error));
  }

  function deleteShoeById(_id) {
    let newShoeRendered = shoesRendered;

    for (let i = 0; i < newShoeRendered.length; i++)
      if (newShoeRendered[i]._id === _id) newShoeRendered.splice(i, 1);

    setShoesRendered([...newShoeRendered]);
  }

  return (
    <div className={styles.box}>
      <button
        className={showButton ? styles.button : styles.buttonNone}
        onClick={() => navigate("/createShoe")}
      >
        +
      </button>

      <div className={styles.section}>
        {shoesRendered.map((shoe: shoe, key) => (
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
                onClick={() =>
                  deleteShoe(shoe._id, shoe.title, deleteShoeById(shoe._id))
                }
              >
                <AiOutlineDelete size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
      <Toaster />
    </div>
  );
}
