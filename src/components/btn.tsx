import styles from "../styles/Desk1.module.css"
import { Link } from "react-scroll"


interface BtnInterface{
    txt:string
    to:string
}

export default function Btn(props: BtnInterface){
    return(
        <button className={styles.btn}>
            <Link to={props.to} spy={true} smooth={true} offset={50} duration={500} className={styles.a}>{props.txt}</Link>
        </button>
    )
}