import styles from "../styles/Desk3.module.css"


interface SquareProps {
    titulo: string
    proeficiencia: string
}

export default function DescSquare(props: SquareProps) {
    return (
        <div className={styles.descSquare}>
            <div className={styles.cabecalhoDesc}>
                <h1>{props.titulo}</h1>
            </div>
            <div className={styles.desc}>
                <p> Proeficiência: {props.proeficiencia}</p>
            </div>
        </div>
    )
}