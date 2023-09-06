"use client"

import styles from "../styles/Desk4.module.css"
import { ProjectD, ProjectE} from "./ProjectModel"
import Sneakers from "../../public/images/image-sneakers.png"
import CineMaven from "../../public/images/image-cinemaven.png"

export default function Desk4(){
    return (
        <div className={styles.Desk4} id="MeusProjetos">
            <h1
            style={{
                fontSize:"3.5rem"
            }}
            >Veja alguns dos meus projetos...</h1>
            <div className={styles.projects}>
                <ProjectD
                    src={Sneakers}
                    alt="Imagem de um dos meus projetos, sneakers!"
                    title="Sneakers"
                    descProj="Simulação de uma página de produto em uma e-commerce"
                    siteProj="https://sneakers-efra.netlify.app"
                    gitProj="https://github.com/EfraimFernandes/sneakers"
                />

                <ProjectE
                    src={CineMaven}
                    alt="Imagem de um dos meus projetos, CineMaven!"
                    title="CineMaven"
                    descProj="É um site que faz indicações de filmes, mostrando a nota do filme de 0 a 100 e um breve resumo"
                    siteProj="https://cinemaven-efra.netlify.app"
                    gitProj="https://github.com/EfraimFernandes/CineMaven"
                /> 
            </div>
        </div>
    )
}