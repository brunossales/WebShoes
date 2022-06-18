import { useState } from "react";

// npm install @react-icons/all-files --save
import {AiFillFileAdd} from 'react-icons/ai'

import styleCreate from '../../Styles/CreateShoe.module.scss'

export function CreateShoe(){
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [price, setPrice] = useState(0)
    
    return (
        <main className={styleCreate.container}>
            <h2 >
                Adicionar Tênis <AiFillFileAdd></AiFillFileAdd>
            </h2>
            <form action="">
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
                        value={price ?? 0}
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
                    <input type="submit" value="Adicionar Tênis" />
                </div>
            </form>
        </main>
    );
}