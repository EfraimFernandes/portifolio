import styles from "../styles/Navbar.module.css"
import Image from "next/image"
import EFlogo from "../../public/images/EF-logo.png"

export default function Navbar() {
    return (
        <div className={styles.head}>
                <Image
                    className={styles.logo}
                    src={EFlogo} 
                    width= {100} 
                    height= {100} 
                    alt={"Logo"}  
                />
                <ul className={styles.navegacao}>
                    <li className={styles.navegacao}><a className={styles.a} href="#inicio">Início</a></li>
                    <li className={styles.navegacao}><a className={styles.a} href="#sobremim">Sobre Mim</a></li>
                    <li className={styles.navegacao}><a className={styles.a} href="#minhashabilidades">Minhas Habilidades</a></li>
                    <li className={styles.navegacao}><a className={styles.a} href="#meusprojetos">Meus Projetos</a></li>
                    <li className={styles.navegacao}><a className={styles.a} href="#contato">Contato</a></li>
                </ul>
            </div>
    )
}