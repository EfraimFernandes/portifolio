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
                    Como filho de programador, começei na programação bem cedo estudando Java para aprender lógica de programação.
                    E então estudei a construção de banco de dados relacionais e não relacionais... 
                    Depois de um ano, comecei a estudar o Front End aprendendo várias linguagens e tecnologias 
                    como CSS, Js, React, PHP, Angular, Next, entre outros.
                    <br/>
                    Depois de dois anos e pouco estudando o Front, voltei para o Back. E hoje estou trabalhando na Recovery como estagiário em engenharia de software
                    </p>
                </div>
            </div>
        </div>
    )
}