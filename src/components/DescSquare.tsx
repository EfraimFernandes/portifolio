import styles from "../styles/Desk3.module.css"


interface SquareProps {
    titulo: string
    experiencia: string
}

export default function DescSquare(props: SquareProps) {
    return (
        <div className={styles.descSquare}>
            <div className={styles.cabecalhoDesc}>
                <h1>{props.titulo}</h1>
            </div>
            <div className={styles.desc}>
                <p> Experiência: {props.experiencia}</p>
            </div>
        </div>
    )
}