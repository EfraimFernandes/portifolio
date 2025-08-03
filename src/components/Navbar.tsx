import styles from "../styles/Navbar.module.css"
import Image from "next/image"
import EFlogo from "../../public/images/EF-logo.png"
import { Link } from "react-scroll"

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <Image
                className={styles.logo}
                src={EFlogo} 
                width= {100} 
                height= {100} 
                alt={"Logo"}  
            />
            <div className={styles.navegacao}>
                <li className={styles.navItem}>
                    <Link to="Inicio" spy={true} smooth={true} offset={-120} duration={500} className={styles.a}>Início</Link>
                </li>
                <li className={styles.navItem}>
                    <Link to="SobreMim" spy={true} smooth={true} offset={-150} duration={500} className={styles.a}>Sobre Mim</Link>
                </li>
                <li className={styles.navItem}>
                    <Link to="Tecnologias" spy={true} smooth={true} offset={-100} duration={500} className={styles.a}>Tecnologias</Link>
                </li>
                <li className={styles.navItem}>
                    <Link to="MeusProjetos" spy={true} smooth={true} offset={-100} duration={500} className={styles.a}>Meus Projetos</Link>
                </li>
                <li className={styles.navItem}>
                    <Link to="Contato" spy={true} smooth={true} offset={100} duration={500} className={styles.a}>Contato</Link>
                </li>
            </div>
        </div>
    )
}