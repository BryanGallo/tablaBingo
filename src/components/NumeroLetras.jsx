import React from "react";

import "../App.css";

const NumeroLetras = ({ bolas, maxs }) => {
    return (
        <div className="letras_b">
            <div className="letras_b_num">
                <div>
                    {maxs.map((max) => (
                        <li key={max}>
                            {bolas.find((bola) => bola.numero === max) ? (
                                <>
                                    <label style={{ display: "block" }}>
                                        {
                                            bolas.find(
                                                (bola) => bola.numero === max
                                            ).numero
                                        }
                                    </label>
                                    <label style={{ background: "green" }}>
                                        {
                                            bolas.find(
                                                (bola) => bola.numero === max
                                            ).letra
                                        }{"-"}
                                        {max}
                                    </label>
                                </>
                            ) : (
                                <>
                                    <label
                                        style={{
                                            display: "block",
                                        }}
                                    >
                                        {max}
                                    </label>
                                    <label
                                        style={{
                                            background: "white",
                                            color: "black",
                                        }}
                                    >
                                        Vacío
                                    </label>
                                </>
                            )}
                        </li>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NumeroLetras;
