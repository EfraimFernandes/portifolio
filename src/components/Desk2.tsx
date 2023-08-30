import { LegacyRef, forwardRef } from "react"
import styles from "../styles/Desk2.module.css"

function Desk2(){
    return (
        <div className={styles.Desk2} id="SobreMim">
            <h1> Este é o Desk 2</h1>
        </div>
    )
}

export default forwardRef(Desk2)