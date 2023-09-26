import styles from "../styles/Desk2.module.css"
import imgSobreMim from "../../public/images/image-sobremim.png"
import Image from "next/image"
import Nome from "./nome"

export default function Desk2(){
    return (
        <div className={styles.Desk2} id="SobreMim">
            <div className={styles.img}>
                <Image 
                    src={imgSobreMim}
                    width={400}
                    alt="Imagem Avatar..."
                />
            </div>
            <div className={styles.content}>
                <div className={styles.cabecalho}>
                    <h1>Sobre Mim</h1>
                </div>
                <div className={styles.text}>
                    <p className={styles.textSobreMim}>
                        Meu nome é {<Nome text="Efraim Quintunda Fernandes" />}
                    </p> 
                    <p className={styles.textSobreMim2}>
                        Antes de qualquer coisa, a senção de criar uma aplicação do iníco ao fim, 
                        passando por cada etapa e vendo a evolução do todo, realmente não tem preço, 
                        pode-se dizer que essa é uma das coisas que mais me fez ser tão apaixonado por programação! 
                    </p>
                    <p className={styles.textSobreMim}>
                        Meus primeiros contatos com a progração foram em 2020, no meu primiero ano do ensino médio, porém, 
                        só entrei de cabeça nesse mundo em 2023.Atualmente tenho um domíno avançado do front end  e um conhecimento rezoável no back-end. 
                        Também gosto de criar designs no figma para  as interfaces dos meus projetos.
                    </p>
                </div>
            </div>
        </div>
    )
}