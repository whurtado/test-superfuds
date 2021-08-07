/** Libraries*/
import React from 'react';

/** Components*/
import Seals from './Seals';

const Card = ({ data = [] }) => {
    console.log('item', data);
    return (
        <div>
            <div className="card mb-3 tamano-card" id="card">
                <img
                    src={data.image}
                    className="card-img-top img-fluid tamano-img"
                    alt="..."
                />
                <Seals seals={data.sellos} />
                <div className="card-body">
                    <hr />
                    <div className="categoria mb-3">
                        <div className=" titulo-categoria">Superfüds</div>
                        <div className="categoria-gramos">
                            <span>{data.net_content}</span>
                        </div>
                    </div>
                    <h5 className="card-title titulo-producto">{data.title}</h5>
                    <p className="card-text texto-precio">
                        <strong>
                            {' '}
                            <span className="signo-peso">$</span>{' '}
                            {data.price_real}
                        </strong>{' '}
                        <span className="texto-unidad">
                            {' '}
                            {`x ${data.units_sf} unids`}
                        </span>
                    </p>
                </div>
                <div class="card-footer" id="card-footer">
                    Agregar al carrito
                </div>
            </div>
        </div>
    );
};

export default Card;
