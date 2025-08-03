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
                        Desde muito novo tive contato com a programação, influenciado por meu pai, que é programador. 
                        Comecei com Java para entender os fundamentos da lógica, e logo me aprofundei em bancos de dados relacionais e não relacionais.<br/><br/>

                        Após cerca de um ano, mergulhei no Front-End, estudando tecnologias como HTML, CSS, JavaScript, React, PHP, Angular, Next.js, entre outras. 
                        Foram mais de dois anos dedicados ao desenvolvimento de interfaces e experiências de usuário.<br/><br/>

                        Depois desse período, voltei meu foco ao Back-End e hoje atuo como estagiário em Engenharia de Software na Recovery. 
                        Faço parte do time de suporte de software, trabalhando como desenvolvedor fullstack na resolução de incidentes, 
                        implementação de novas funcionalidades e automação de processos internos.
                    </p>
                </div>
            </div>
        </div>
    )
}