import styles from "../styles/Desk5.module.css"
import { Linkedin, Mail, WhatsApp } from "./icons"
import Image from "next/image"
import ImgLogo from "../../public/images/EF-logo.png"
import ImgFooter from "../../public/images/image-footer.png"

export default function Desk5(){
    return (
        <div className={styles.Desk5} id="Contato">
            <div className={styles.content} style={{
                display:"flex",
                marginLeft:"5%",
                marginRight:"5%",
                width:"100%",
                alignItems:"center",
                justifyContent:"space-between"
            }}>
                <div className={styles.direito} style={{ display:"flex", flexDirection:"column", height:"100%", justifyContent:"space-between" }}>
                    <div className={styles.cima} >
                        <h1 style={{ fontSize:"3.5rem", marginBottom:"30px" }}>Contato</h1>
                        <div className={styles.whats}  style={{
                                    display:"flex",
                                    marginBottom:"10px"
                                }}>
                            <div className={styles.icone}>
                                <WhatsApp/>
                            </div>
                            <div className={styles.numero}>
                                <a href="https://wa.me/5511975054610" style={{
                                    color:"white",
                                    fontWeight:"200",
                                    marginLeft:"20px"
                                }}>(11) 97505-4610</a>
                            </div>
                        </div>

                        <div className={styles.linkedin}  style={{
                                    display:"flex",
                                    marginBottom:"10px"
                                }}>
                            <div className={styles.icone}>
                                <Linkedin />
                            </div>
                            <div className={styles.nome}>
                                <a href="https://www.linkedin.com/in/efraim-quintunda-fernandes-8aa086269/" style={{
                                    color:"white",
                                    fontWeight:"200",
                                    marginLeft:"20px"
                                }}>Efraim Quintunda Fernandes</a>
                            </div>
                        </div>

                        <div className={styles.email}  style={{
                                    display:"flex",
                                    marginBottom:"10px"
                                }}>
                            <div className={styles.icone}>
                                <Mail />
                            </div>
                            <div className={styles.emailName}>
                                <h4 style={{
                                    color:"white",
                                    fontWeight:"200",
                                    marginLeft:"20px",
                                }}>efraim.quintunda@gmail.com</h4>
                            </div>
                        </div>
                    </div>
                    <div className={styles.baixo}>
                        <h3 style={{ marginBottom:"50px" }}>Efraim Fernandes © 2025</h3>
                    </div>
                </div>
                <div className={styles.centro}>
                    <Image 
                        src={ImgFooter}
                        alt="Imagem Footer"
                        className={styles.imgfooter}
                        width={300}
                        height={350}
                    />
                </div>
                <div className={styles.esquerdo}>
                    <div className={styles.logo}>
                        <Image 
                            src={ImgLogo}
                            alt="Logo"
                            className={styles.imgLogo}
                            width={200}
                            height={250}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}