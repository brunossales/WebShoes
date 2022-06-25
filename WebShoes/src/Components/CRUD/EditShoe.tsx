import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

// npm install @react-icons/all-files --save
import {AiFillEdit} from 'react-icons/ai'
import { useNavigate, useParams} from "react-router-dom";

import styleCreate from '../../Styles/EditShoe.module.scss'
import { Toaster } from "react-hot-toast";
import { linkLocalHost } from "../Url/Link";

export function EditShoe(){
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [price, setPrice] = useState(0)
    const [img, setImg] = useState("")
    const navigate = useNavigate()
    const params = useParams()
    
    useEffect(
        () => {
            axios.get(linkLocalHost+"retrieve/"+params.id)
                .then(
                    (res) => {
                        setTitle(res.data.title)
                        setPrice(res.data.price)
                        setDesc(res.data.desc)
                        setImg(res.data.img)
                    }
                )
                .catch(error => console.log(error))
        },
        []
    )


    const handleSubmit = (event) =>{
        event.preventDefault()
        
        const updateShoe = {title, desc, price, img}

        toast.promise(
            axios.put(linkLocalHost+"update/"+params.id, updateShoe),
             {
               loading: 'Editando...',
               success: <b>Tênis Editado!</b>,
               error: <b>Não foi possível editar.</b>,
             },
             {position:'top-center', duration: 2000}
           )
           .then(() => navigate('/shop'))
           .catch(error => console.log(error))
    }

    return (
        <main className={styleCreate.container}>
            <h2 >
                Editar Tênis <AiFillEdit></AiFillEdit>
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
                        value={price || 0}
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
                    <input type="submit" value="Salvar Edição" onClick={() => {}}/>
                </div>
            </form>
            <Toaster />
        </main>
    );
}