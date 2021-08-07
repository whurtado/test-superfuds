import React from 'react';
import CarouselDemo from '../utilidades/Carousel';

const ProductoItem = ({ data = [] }) => {
    console.log('ssaa', data);
    return (
        <div>
            <CarouselDemo data={data} />
        </div>
    );
};

export default ProductoItem;
