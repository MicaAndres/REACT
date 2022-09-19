import React, { useContext } from "react";

import { CartContext } from "../../hooks/CartContext";

export const Order = ({ getTotal , getQuantity}) => {
   

    const confirm = () => {
       console.log("Muchas Gracias", `Compraste ${getQuantity()} `, "success");
    };

    return (
        <div >
            <div >
                <div >
                    <div >
                        {" "}
                        <img
                            src="/assets/LogoLego.png"
                            className="img-fluid rounded-start"
                            alt={"logo"}
                            width="100px"
                        />
                    </div>
                    <div>
                        <ul style={{ listStyle: "none" }}>
                            <li>
                                <input type="radio" value="Mercado Pago" id="Mercado Pago" />
                                <label htmlFor="Mercado Pago">
                                    Mercadopago - Tarjetas Online, PagoFacil, RapiPago
                                </label>
                            </li>
                            <li>
                                <input type="radio" value="Deposito" id="Deposito" />
                                <label htmlFor="Deposito">
                                    Depósito o transferencia bancaria
                                </label>
                            </li>
                        </ul>
                    </div>
                    <div >
                        <div >
                            <p className="fs-4">Total:</p>
                            <p className="fs-4">{getQuantity()} LEGOS</p>
                            <p className="fs-3">u$s{getTotal()}</p>
                            <button onClick={confirm} >
                                Comprar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};