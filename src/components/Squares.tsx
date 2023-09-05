import styles from "../styles/Desk3.module.css"
import { Js, Html5, Css3, React, Php, Ts } from "./icons";
import DescSquare from "./DescSquare";
import { useState } from "react";

export function JS() {
    const [isShown, setIsShown] = useState(false);

    return (
        <div className={styles.square} 
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}>
            <Js/>
            {isShown && (
                <DescSquare 
                    titulo="JavaScript"
                    descricao="JavaScript é uma linguagem de programação muito boa!!"
                />
            )}
        </div>
    )
}

export function HTML5() {
    const [isShown, setIsShown] = useState(false);

    return (
        <div className={styles.square} 
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}>
            <Html5/>
            {isShown && (
                <DescSquare 
                    titulo="HTML 5"
                    descricao="HTML 5 é uma linguagem de marcação de hiper texto excelente!!"
                />
            )}
        </div>
    )
}

export function CSS3() {
    const [isShown, setIsShown] = useState(false);

    return (
        <div className={styles.square} 
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}>
            <Css3/>
            {isShown && (
                <DescSquare 
                    titulo="CSS 3"
                    descricao="CSS é uma linguagem de stilização excelente!!"
                />
            )}
        </div>
    )
}

export function PHP() {
    const [isShown, setIsShown] = useState(false);

    return (
        <div className={styles.square} 
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}>
            <Php/>
            {isShown && (
                <DescSquare 
                    titulo="PHP"
                    descricao="PHP é uma boa linguágem de programação!"
                />
            )}
        </div>
    )
}

export function TS() {
    const [isShown, setIsShown] = useState(false);

    return (
        <div className={styles.square} 
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}>
            <Ts/>
            {isShown && (
                <DescSquare 
                    titulo="TypeScript"
                    descricao="TypeScript é uma linguagem excelente!!"
                />
            )}
        </div>
    )
}

export function REACT() {
    const [isShown, setIsShown] = useState(false);

    return (
        <div className={styles.square} 
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}>
            <React/>
            {isShown && (
                <DescSquare 
                    titulo="React"
                    descricao="React é uma bibliotega JavaScript"
                />
            )}
        </div>
    )
}