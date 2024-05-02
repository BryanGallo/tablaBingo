import React from "react";

const Resumen = ({ resumen }) => {
    console.log(resumen);
    return (
        <div className="resumen">
            {resumen &&
                resumen.map((resu) => (
                    <>
                        <label
                            key={resu.numero}
                            className="labelResu"
                            id={
                                resu.letra === "B"
                                    ? "rosa"
                                    : resu.letra === "I"
                                    ? "rojo"
                                    : resu.letra === "N"
                                    ? "amarillo"
                                    : resu.letra === "G"
                                    ? "azul"
                                    : resu.letra === "O"
                                    ? "verde"
                                    : ""
                            }
                        >
                            {resu.letra}-{resu.numero}
                        </label>
                    </>
                ))}
        </div>
    );
};

export default Resumen;
