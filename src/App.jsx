import { useState } from "react";
import Header from "./components/Header.jsx";
import GenerarBola from "./components/GenerarBola.jsx";
import bolasLetras from "./data/bolas.js";

import "./App.css";

function App() {
    const [bolas, setBolas] = useState(bolasLetras);
    const [bolasB, setBolasB] = useState([]);
    const [bolasI, setBolasI] = useState([]);
    const [bolasN, setBolasN] = useState([]);
    const [bolasG, setBolasG] = useState([]);
    const [bolasO, setBolasO] = useState([]);

    const agregarBola = (condition) => {
        console.log(condition);
            if (condition.letra === 'B') {
                setBolasB([...bolasB,condition])
            }
            if (condition.letra === 'I') {
                setBolasI([...bolasI,condition])
            }
    };

    const generar = () => {
        if (bolas.length === 0) {
            alert("No hay mas bolas");
            return
        }
        console.log(bolas.length);
        let numeroRamdom = Math.floor(Math.random() * 70) + 1;
        let condition = bolas.find((bola) => bola.numero === numeroRamdom);
        console.log(condition);
        if (!condition) {
            generar();
        }
        let nuevoArreglo = bolas.filter((bola) => bola.numero !== condition.numero);
        console.log(nuevoArreglo);
        setBolas(nuevoArreglo);

        let agrego = agregarBola(condition);
    };

    let maxsB = [];
    for (let index = 1; index < 16; index++) {
        maxsB = [...maxsB, index];
    }
    let maxsI = [];
    for (let index = 16; index < 31; index++) {
        maxsI = [...maxsI, index];
    }

    return (
        <>
            <GenerarBola generar={generar} />
            <Header />
            <div className="letras">
                <div className="letras_b">
                    <div className="letras_b_num">
                        <ul>
                            {maxsB.map((max) => (
                                <li key={max}>
                                    {bolasB.find(
                                        (bola) => bola.numero === max
                                    ) ? (
                                        <>
                                            <label style={{ display: "block" }}>
                                                {
                                                    bolasB.find(
                                                        (bola) =>
                                                            bola.numero === max
                                                    ).numero
                                                }
                                            </label>
                                            <label>
                                                {
                                                    bolasB.find(
                                                        (bola) =>
                                                            bola.numero === max
                                                    ).letra
                                                }
                                            </label>
                                        </>
                                    ) : (
                                        <>
                                            <label style={{ display: "block" }}>
                                                {max}
                                            </label>
                                            <label>Vacío</label>
                                        </>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="letras_b">
                    <div className="letras_b_num">
                        <ul>
                            {maxsI.map((max) => (
                                <li key={max}>
                                    {bolasI.find(
                                        (bola) => bola.numero === max
                                    ) ? (
                                        <>
                                            <label style={{ display: "block" }}>
                                                {
                                                    bolasI.find(
                                                        (bola) =>
                                                            bola.numero === max
                                                    ).numero
                                                }
                                            </label>
                                            <label>
                                                {
                                                    bolasI.find(
                                                        (bola) =>
                                                            bola.numero === max
                                                    ).letra
                                                }
                                            </label>
                                        </>
                                    ) : (
                                        <>
                                            <label style={{ display: "block" }}>
                                                {max}
                                            </label>
                                            <label>Vacío</label>
                                        </>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
