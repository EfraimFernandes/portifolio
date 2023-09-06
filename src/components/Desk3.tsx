import styles from "../styles/Desk3.module.css"
import { CSS3, HTML5, JS, PHP, REACT, TS } from "./Squares"

export default function Desk3(){
    return (
        <div className={styles.Desk3} id="MinhasHabilidades">
            <div className={styles.titulo}>
                <h1>Minhas Habilidades</h1>
            </div>
            <div className={styles.content}>
                
                <div className={styles.skils}>
                    <JS />
                    <HTML5 />
                    <CSS3 />
                </div>
                    
                <div className={styles.skils}>
                    <REACT />
                    <TS />
                    <PHP />
                </div>
            </div>
        </div>
    )
}