import React from 'react';

import './App.css';
import './assets/css/principal.css';

/** Layout */
import AppLayout from './layout/AppLayout';

import 'boxicons';
/** Components */
//const Productos = React.lazy(() => import('./componentes/productos/Productos'));

import Productos from './componentes/productos/Productos';

const App = (props) => {
    return (
        <div className="App">
            <AppLayout>
                <Productos />
            </AppLayout>
        </div>
    );
};

export default App;
