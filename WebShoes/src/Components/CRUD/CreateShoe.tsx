import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

// npm install @react-icons/all-files --save
import {AiFillFileAdd} from 'react-icons/ai'
import { useNavigate } from "react-router-dom";

import styleCreate from '../../Styles/CreateShoe.module.scss'
import { Toaster } from "react-hot-toast";

export function CreateShoe(){
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [price, setPrice] = useState(0)
    const [img, setImg] = useState("")
    const navigate = useNavigate()
    
    function random(){
        const random = 1 + Math.random() * 300
        return Math.floor(random).toFixed(0)
    }
    
    const handleSubmit = (event) =>{
        event.preventDefault()

        const newShoe = {title, desc, price, img}

        toast.promise(
            axios.post("http://localhost:3001/shop/create", newShoe),
             {
               loading: 'Salvando...',
               success: <b>Tênis Adicionado!</b>,
               error: <b>Não foi possível adicionar.</b>,
             },
             {position:'top-center', duration: 2000}
           )
           .then(() => navigate('/shop'))
           .catch(error => console.log(error));
    }

    return (
        <main className={styleCreate.container}>
            <h2 >
                Adicionar Tênis <AiFillFileAdd></AiFillFileAdd>
            </h2>
            <form onSubmit={handleSubmit}>
                <div className={styleCreate.division}>
                    <label>Modelo: </label>
                    <input type="text"
                        name="title"
                        placeholder='Modelo do Tênis'
                        value={title ?? ''}
                        className={styleCreate.input}
                        onChange={(event) => {setTitle(event.target.value)}}
                        />
                </div>

                <div className={styleCreate.division}>
                    <label>Valor: </label>
                    <input type="text"
                        name="price"
                        placeholder='Valor em $'
                        value={(price == null || price == undefined) ? 0 : price}
                        className={styleCreate.inputNumber}
                        onChange={(event) => {setPrice(parseFloat(event.target.value))}} 
                        />
                </div>

                <div className={styleCreate.division}>
                    <label>Descrição: </label>
                    <input type="text"
                        name="desc"
                        value={desc ?? ''}
                        placeholder='Descrição do Tênis'
                        onChange={(event) => {setDesc(event.target.value)}}
                        className={styleCreate.input}
                        />
                </div>
                <div className={styleCreate.button}> 
                    <input type="submit" value="Adicionar Tênis" onClick={() => {setImg("https://source.unsplash.com/250x250/?shoes=" + random())}}/>
                </div>
            </form>
            <Toaster />
        </main>
    );
}