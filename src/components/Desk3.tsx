import styles from "../styles/Desk3.module.css"
import { CS, DotNet, Sql, Javascript, Swag, REACT } from "./Squares"

export default function Desk3(){
    return (
        <div className={styles.Desk3} id="Tecnologias">
            <div className={styles.titulo}>
                <h1>Tecnologias</h1>
            </div>
            <div className={styles.content}>
                
                <div className={styles.skils}>
                    <CS />
                    <DotNet />
                    <Sql />
                </div>
                    
                <div className={styles.skils}>
                    <Javascript />
                    <Swag />
                    <REACT />
                </div>
            </div>
        </div>
    )
}