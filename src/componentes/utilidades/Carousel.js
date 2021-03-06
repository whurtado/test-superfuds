import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

/** Components*/
import Card from './Card';

const CarouselDemo = ({ data = [] }) => {
    const [dataProducto, setDataProducto] = useState([]);

    useEffect(() => {
        console.log('fff', typeof data);

        setDataProducto(data);
    }, [data]);

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };
    return (
        <Carousel responsive={responsive} itemClass="carousel-custom">
            {Object.keys(dataProducto).length > 0 &&
                Object.keys(dataProducto).map((item, index) => {
                    return <Card keys={index} data={dataProducto[item]} />;
                })}
        </Carousel>
    );
};

export default CarouselDemo;
