/** Libraries */
import React from 'react';

const TablaCarrito = () => {
    return (
        <div>
            <div className="carrito">
                <div className=" titulo-carrito">Carrito de compras</div>
                <div className="cantidad-items-carrito">
                    <span>3</span>items
                </div>
            </div>
            <div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Item</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Precio</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TablaCarrito;
