import styles from '../Styles/Tenis.module.scss'

export function Shoes(props:{title: string, desc: string, img: string}){
    return (
        <div className={styles.container}>
            <h3>{props.title}</h3>
            <img src={props.img} alt="" />
            <p>{props.desc}</p>
        </div>
    );
}