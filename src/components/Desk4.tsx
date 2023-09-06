import styles from "../styles/Desk4.module.css"
import { ProjectD, ProjectE} from "./ProjectModel"
import Sneakers from "../../public/images/image-sneakers.png"

export default function Desk4(){
    return (
        <div className={styles.Desk4} id="MeusProjetos">
            <ProjectD
                src={Sneakers}
                alt="Imagem de um dos meus projetos, sneakers!"
                title="Sneakers"
                descProj="Simulação de uma página de produto em uma e-commerce"
            />
        </div>
    )
}