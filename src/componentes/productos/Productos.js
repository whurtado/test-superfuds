/** Libraries */
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

/**Components */
import Productoitem from './ProductoItem';

const Productos = () => {
    const [dataProducto, setDataProducto] = useState([]);

    const listaProductos = useCallback(async (source) => {
        try {
            const response = await axios.get(
                'https://superfuds-assets.s3-sa-east-1.amazonaws.com/utils/product.json',
                {
                    cancelToken: source.token,
                }
            );

            if (response.status === 200) {
                setDataProducto(...dataProducto, response.data);
            }
        } catch (error) {
            if (axios.isCancel(error)) return;
        }
    }, []);

    useEffect(() => {
        const source = axios.CancelToken.source();
        listaProductos(source);
        return () => source.cancel();
    }, []);
    return (
        <div>
            <div className="titulo-seccion-productos mt-3 mb-2">
                <h5>Nuevo en superfüds</h5>
                <span className="ver-mas">
                    <strong>Ver mas</strong>
                </span>
            </div>
            <div>
                <Productoitem data={dataProducto} />
            </div>
        </div>
    );
};

export default Productos;
