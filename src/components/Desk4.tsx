"use client"

import styles from "../styles/Desk4.module.css"
import { ProjectD, ProjectE} from "./ProjectModel"
import Sneakers from "../../public/images/image-sneakers.png"
import DevFinder from "../../public/images/image-devFinder.png"
import LinkLibrary from "../../public/images/image-linklibrary.png"



export default function Desk4(){
    return (
        <div className={styles.Desk4} id="MeusProjetos">
            <h1 className={styles.titulo}>Veja alguns dos meus projetos...</h1>
            <div className={styles.projects}>
                {/* Sneakers */}
                <ProjectD
                    src={Sneakers}
                    alt="Imagem de um dos meus projetos, sneakers!"
                    title="Sneakers"
                    descProj="Simulação de uma página de produto em uma e-commerce"
                    siteProj="https://sneakers-efra.netlify.app"
                    gitProj="https://github.com/EfraimFernandes/sneakers"
                />

                {/* LinkLibrary */}
                <ProjectE
                    src={LinkLibrary}
                    alt="Imagem de um dos meus projetos, LinkLibrary!"
                    title="LinkLibrary"
                    descProj="Aqui você poderá criar de forma prática e fácil uma biblioteca de links com todos que são importante para você"
                    siteProj="https://linklibraryll.netlify.app"
                    gitProj="https://github.com/EfraimFernandes/linklibrary"
                />

                {/* DevFinder */}
                <ProjectD
                    src={DevFinder}
                    alt="Usando a API do GitHub para encontrar usuários"
                    title="DevFinder"
                    descProj="Uma página usando a API do GitHub para encontrar usuários"
                    siteProj="http://devfinder-efraimfernandes.netlify.app/"
                    gitProj="https://github.com/EfraimFernandes/DevFinder"
                /> 
            </div>
        </div>
    )
}