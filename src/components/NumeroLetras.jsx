import React from "react";

import "../App.css";

const NumeroLetras = ({ bolas, maxs }) => {
    return (
        <div className="letras_b">
            <div className="letras_b_num">
                <div>
                    {maxs.map((max) => {
                        const bola = bolas.find((bola) => bola.numero === max);
                        return (
                            <li key={max}>
                                {bola ? (
                                    <>
                                        <label>{bola.numero}</label>
                                        <label
                                            id={
                                                bola.letra === "B"
                                                    ? "rosa"
                                                    : bola.letra === "I"
                                                    ? "rojo"
                                                    : bola.letra === "N"
                                                    ? "amarillo"
                                                    : bola.letra === "G"
                                                    ? "azul"
                                                    : bola.letra === "O"
                                                    ? "verde"
                                                    : ""
                                            }
                                        >
                                            {bola.letra}-{max}
                                        </label>
                                    </>
                                ) : (
                                    <>
                                        <label>{max}</label>
                                        <label
                                            style={{
                                                background: "white",
                                                color: "black",
                                            }}
                                        >
                                            *
                                        </label>
                                    </>
                                )}
                            </li>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default NumeroLetras;
