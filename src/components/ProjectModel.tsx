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
    siteProj: string
    gitProj: string
}

export function ProjectD(props: ProjectInterface) {
    return(
        <div className={styles.content}>
            <div className={styles.img}>
                <Image 
                    src={props.src}
                    alt={props.alt}
                    width={700}
                    height={500}
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
                    <a href={props.siteProj} target="_blank" rel="noopener noreferrer"> 
                        <button className={styles.btn}>Abrir Página</button>
                    </a>

                    <a href={props.gitProj} target="_blank" rel="noopener noreferrer" className={styles.linkVerGit}>Ver no GitHub</a>
            </div>
        </div>

            
        </div>
    )
}

export function ProjectE(props: ProjectInterface) {
    return(
        <div className={styles.content}>
            <div className={styles.projectDescE}>
                <div className={styles.titleE}>
                    <h1>{props.title}</h1>
                   
                </div>
                <div className={styles.linguagense}>
                    <Linguagens txt="TS" corBg="#fff" color="blue"/>
                    <Linguagens txt="CSS" corBg="#0000cd" color="#fff"/>
                    <Linguagens txt="JS" corBg="yellow" color="#000"/>
                </div>
                
                <div className={styles.descProje}>
                    <h3>{props.descProj}</h3>
                </div>

                <div className={styles.btnse}>
                    <a href={props.gitProj} target="_blank" rel="noopener noreferrer" className={styles.linkVerGite}>Ver no GitHub</a>
                    <a href={props.siteProj} target="_blank" rel="noopener noreferrer"> 
                        <button className={styles.btne}>Abrir Página</button>
                    </a>
                </div>
            </div>

            <div className={styles.imge}>
                <Image 
                    src={props.src}
                    alt={props.alt}
                    width={700}
                    height={500}
                    className={styles.projectImge}
                />
            </div>
        </div>
    )
}