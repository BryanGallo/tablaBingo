import { useState } from "react";
import Header from "./components/Header.jsx";
import GenerarBola from "./components/GenerarBola.jsx";
import NumeroLetras from "./components/NumeroLetras.jsx";
import ResetearJuego from "./components/ResetearJuego.jsx";
import bolasLetras from "./data/bolas.js";
import Swal from "sweetalert2";
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
        const colores ={
            B:"rosa",
            I:"rojo",
            N:"amarillo",
            G:"azul",
            O:"verde"
        }
        let color = colores[condition.letra]

        Swal.fire({
            title: "LA BOLA ES :",
            html: `<p id=${color}>${condition.letra}-${condition.numero}</p>`,
        });
        if (condition.letra === "B") {
            setBolasB([...bolasB, condition]);
            return true;
        }
        if (condition.letra === "I") {
            setBolasI([...bolasI, condition]);
            return true;
        }
        if (condition.letra === "N") {
            setBolasN([...bolasN, condition]);
            return true;
        }
        if (condition.letra === "G") {
            setBolasG([...bolasG, condition]);
            return true;
        }
        if (condition.letra === "O") {
            setBolasO([...bolasO, condition]);
            return true;
        }
        return false;
    };

    const generar = () => {
        if (bolas.length === 0) {
            Swal.fire({
                icon: "error",
                title: "El juego termino",
                text: "Se terminaron las bolas",
            });
            return;
        }

        console.log(bolas.length);
        // Seleccionar un índice aleatorio dentro del rango de bolas
        const index = Math.floor(Math.random() * bolas.length);
        console.log(index);
        // Seleccionar la bola en ese índice
        const condition = bolas[index];
        console.log(condition);
        // Eliminar la bola del arreglo original
        const nuevoArreglo = bolas.filter((bola, i) => i !== index);
        console.log(nuevoArreglo);

        // Actualizar el estado con el nuevo arreglo de bolas
        setBolas(nuevoArreglo);

        // Agregar la bola a su respectiva categoría
        agregarBola(condition);
    };

    let maxsB = [];
    for (let index = 1; index < 16; index++) {
        maxsB = [...maxsB, index];
    }
    let maxsI = [];
    for (let index = 16; index < 31; index++) {
        maxsI = [...maxsI, index];
    }
    let maxsN = [];
    for (let index = 31; index < 46; index++) {
        maxsN = [...maxsN, index];
    }
    let maxsG = [];
    for (let index = 46; index < 61; index++) {
        maxsG = [...maxsG, index];
    }
    let maxsO = [];
    for (let index = 61; index < 76; index++) {
        maxsO = [...maxsO, index];
    }

    const resetearJuego = () => {
        Swal.fire({
            title: "Estas seguro de reiniciar el juego?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, Reiniciar!",
            cancelButtonText: "No Reiniciar!",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Juego Reiniciado",
                    icon: "success",
                });
                setBolas(bolasLetras);
                setBolasB([]);
                setBolasI([]);
                setBolasN([]);
                setBolasG([]);
                setBolasO([]);
            } else {
                return;
            }
        });
    };

    return (
        <>
            <div className="container">
                <GenerarBola generar={generar} />
                <ResetearJuego resetearJuego={resetearJuego} />
            </div>
            <Header />
            <h2>
                Quedan: <strong>{bolas.length}</strong>
            </h2>
            <div className="letras">
                <NumeroLetras bolas={bolasB} maxs={maxsB} />
                <NumeroLetras bolas={bolasI} maxs={maxsI} />
                <NumeroLetras bolas={bolasN} maxs={maxsN} />
                <NumeroLetras bolas={bolasG} maxs={maxsG} />
                <NumeroLetras bolas={bolasO} maxs={maxsO} />
            </div>
        </>
    );
}

export default App;
