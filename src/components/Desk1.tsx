import styles from "../styles/Desk1.module.css"
import avatar from "../../public/images/image-avatar.png"
import Image from "next/image"
import Nome from "./nome"
import { Link } from "react-scroll"

export default function Desk1(){
    return (
        <div id="Inicio" className={styles.Desk1}>
            <div className={styles.body}>
                    <Image 
                        className={styles.imgAvatar}
                        src={avatar}
                        width={300}
                        height={300}
                        alt="Imagem do Efraim"
                        style={{objectFit:"cover", borderRadius:"150px", marginBottom:"20px"}}
                    />

                <div className={styles.desc}>
                    <h1 className={styles.nome}><Nome text="Efraim"/> Fernandes</h1>
                    <h2 className={styles.desc}>Desenvolvedor Web</h2>
                </div>
            
                <button className={styles.btn}>
                    <Link to="SobreMim" spy={true} smooth={true} offset={50} duration={500} className={styles.a}>Sobre Mim ↓</Link>
                </button>
            </div>
        </div>
    )
}