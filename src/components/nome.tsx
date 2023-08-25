import styles from "../styles/nome.module.css"

interface NomeProps{
    text: string
}

export default function Nome(props: NomeProps) {
    return (
        <p className={styles.nome}>{props.text}</p>
    )
}