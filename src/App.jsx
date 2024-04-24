import { useState } from "react";
import Header from "./components/Header.jsx";
import GenerarBola from "./components/GenerarBola.jsx";
import NumeroLetras from "./components/NumeroLetras.jsx";
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
        if (condition.letra === "B") {
            setBolasB([...bolasB, condition]);
        }
        if (condition.letra === "I") {
            setBolasI([...bolasI, condition]);
        }
    };

    const generar = () => {
        if (bolas.length === 0) {
            alert("No hay mas bolas");
            return;
        }
        console.log(bolas.length);
        let numeroRamdom = Math.floor(Math.random() * 70) + 1;
        let condition = bolas.find((bola) => bola.numero === numeroRamdom);
        console.log(condition);
        if (!condition) {
            generar();
            return
        }
        let nuevoArreglo = bolas.filter(
            (bola) => bola.numero !== condition.numero
        );
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
                <NumeroLetras bolas={bolasB} maxs={maxsB} />
                <NumeroLetras bolas={bolasI} maxs={maxsI} />
            </div>
        </>
    );
}

export default App;
