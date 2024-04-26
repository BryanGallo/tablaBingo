import React from "react";
import "../App.css";
const ResetearJuego = ({ resetearJuego }) => {
    return (
        <>
            <button onClick={resetearJuego}>Reiniciar Juego</button>
        </>
    );
};

export default ResetearJuego;
