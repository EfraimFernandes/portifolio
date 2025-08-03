import styles from "../styles/Desk3.module.css"
import { CSharp, PontoNet, SQL, JavaScript, React, Swagger } from "./icons";
import DescSquare from "./DescSquare";
import { useState } from "react";

export function CS() {
    const [isShown, setIsShown] = useState(false);

    return (
        <div className={styles.square} 
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}>
            <CSharp/>
            {isShown && (
                <DescSquare 
                    titulo="C#"
                    experiencia="2 Anos"
                />
            )}
        </div>
    )
}

export function DotNet() {
    const [isShown, setIsShown] = useState(false);

    return (
        <div className={styles.square} 
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}>
            <PontoNet/>
            {isShown && (
                <DescSquare 
                    titulo=".Net"
                    experiencia="2 Anos"
                />
            )}
        </div>
    )
}

export function Sql() {
    const [isShown, setIsShown] = useState(false);

    return (
        <div className={styles.square} 
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}>
            <SQL/>
            {isShown && (
                <DescSquare 
                    titulo="SQL"
                    experiencia="4 Anos"
                />
            )}
        </div>
    )
}

export function Javascript() {
    const [isShown, setIsShown] = useState(false);

    return (
        <div className={styles.square} 
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}>
            <JavaScript/>
            {isShown && (
                <DescSquare 
                    titulo="JavaSccript"
                    experiencia="5+ Anos"
                />
            )}
        </div>
    )
}

export function Swag() {
    const [isShown, setIsShown] = useState(false);

    return (
        <div className={styles.square} 
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}>
            <Swagger/>
            {isShown && (
                <DescSquare 
                    titulo="Swagger"
                    experiencia="1 Ano"
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
                    experiencia="2 Anos"
                />
            )}
        </div>
    )
}