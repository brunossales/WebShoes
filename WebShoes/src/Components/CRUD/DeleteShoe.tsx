import axios from "axios";
import toast from "react-hot-toast";
import { linkLocalHost } from "../Url/Link";

export function deleteShoe(_id, title, deleteShoeById){

    toast.promise(
        axios.delete(linkLocalHost+`delete/${_id}`),
         {
           loading: 'Deletando...',
           success: <b>{`Tênis: ${title} Deletado!`}</b>,
           error: <b>Não foi possível Deletar.</b>,
         },
         {position:'top-center', duration: 2000}
       )
          .then(
            () => deleteShoeById
          )
          .catch(err => console.log(err))
}