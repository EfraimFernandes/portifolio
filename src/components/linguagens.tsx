import styles from "../styles/Desk4.module.css"
import { Link } from "react-scroll"

interface LinguagensInterface {
    txt: string
    corBg: string
    color: string
}

export default function Linguagens(props: LinguagensInterface){
    return(
        <Link to="MinhasHabilidades" spy={true} smooth={true} offset={-100} duration={500} className={styles.a}>
        <div style={{
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            backgroundColor:`${props.corBg}`,
            color:`${props.color}`,
            padding:"10px",
            width:"30px",
            height:"10px",
            borderRadius:"10px",
            marginRight:"15px"
            
        }}>
            <h3 style={{
                fontSize: "0.8rem"
            }} id="txt">{props.txt}</h3>
        </div>
        </Link>
    )
}