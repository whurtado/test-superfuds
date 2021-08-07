import React from 'react';

import Carrito from '../componentes/carrito/Carrito';
import Footer from '../componentes/contenedores/Footer';
import Navbar from '../componentes/contenedores/Navbar';

const AppLayout = (props) => {
    return (
        <div>
            <Navbar />
            <Carrito />
            <main>
                <div className="container-fluid">{props.children}</div>
            </main>
            <Footer />
        </div>
    );
};

export default AppLayout;
