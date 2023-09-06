import { StaticImport } from "next/dist/shared/lib/get-img-props";
import styles from "../styles/project.module.css"
import Image from "next/image";
import Linguagens from "./linguagens";
import Btn from "./btn";

interface ProjectInterface {
    src: StaticImport
    alt: string
    title: string
    descProj: string
}

export default function Project(props: ProjectInterface) {
    return(
        <div className={styles.content}>
            <div className={styles.img}>
                <Image 
                    src={props.src}
                    alt={props.alt}
                    width={600}
                    height={400}
                    className={styles.projectImg}
                />
            </div>

            <div className={styles.projectDesc}>
                <div className={styles.title}>
                    <h1>{props.title}</h1>
                </div>
                <div className={styles.linguagens}>
                    <Linguagens txt="HTML" corBg="red" color="#fff"/>
                    <Linguagens txt="JS" corBg="yellow" color="#000"/>
                    <Linguagens txt="CSS" corBg="#0000cd" color="#fff"/>
                </div>
                <div className={styles.descProj}>
                    <h3>{props.descProj}</h3>
                </div>

                <div className={styles.btns}>
                    <a href="https://sneakers-efra.netlify.app" target="_blank" rel="noopener noreferrer"> 
                        <button className={styles.btn}>Abrir Página</button>
                    </a>

                    <a href="https://github.com/EfraimFernandes/sneakers" target="_blank" rel="noopener noreferrer" className="linkVerGit">Ver no GitHub</a>
                </div>
            </div>

            
        </div>
    )
}