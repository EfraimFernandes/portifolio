import styles from "../styles/Navbar.module.css"
import Image from "next/image"
import EFlogo from "../../public/images/EF-logo.png"
// import { useRef } from "react"
import { Link } from "react-scroll"

export default function Navbar() {

//     const Inicio = useRef(null)
//     const SobreMim = useRef(null)

//     const scrollToDesk = (elementRef) => {
//         window.scrollTo({
//             top: elementRef.current.offsetTop,
//             behavior: 'smooth'
//         })
//     }

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

                <li className={styles.navegacao}>
                    <Link to="Inicio" spy={true} smooth={true} offset={50} duration={500} className={styles.a}>Início</Link>
                </li>
                <li className={styles.navegacao}>
                    <Link to="SobreMim" spy={true} smooth={true} offset={50} duration={500} className={styles.a}>Sobre Mim</Link>
                </li>
                <li className={styles.navegacao}><a className={styles.a} href="#MinhasHabilidades">Minhas Habilidades</a></li>
                <li className={styles.navegacao}><a className={styles.a} href="#MeusProjetos">Meus Projetos</a></li>
                <li className={styles.navegacao}><a className={styles.a} href="#Contato">Contato</a></li>
            </div>
        </div>
    )
}