import React from "react";

const GenerarBola = ({ generar }) => {
    return (
        <>
            <div class="wrapper">
                <button onClick={generar}>
                GenerarBola
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </>
    );
};

export default GenerarBola;
