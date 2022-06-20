import styles from '../Styles/Shoe.module.scss'

export function Shoes(props:{title: string, desc: string, img: string, price: number}){
    return (
        <div className={styles.container}>
            <h3>{props.title}</h3>
            <img src={props.img} alt="" />
            <p>{props.desc}</p>
            <h4>R$ {props.price}</h4>
        </div>
    );
}