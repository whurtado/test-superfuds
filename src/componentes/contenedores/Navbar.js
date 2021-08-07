import React from 'react';
import Logo from '../../assets/img/superfuds.jpeg';
//import Logo from '../../assets/img/logo.png';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="col-md-3">
                    <a href="#app">
                        <div className="logo">
                            <img src={Logo} alt="" style={{ height: '70px' }} />
                        </div>
                    </a>
                </div>
                <div className=" col-md-7" id="navbarSupportedContent">
                    <form className="form-inline ">
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control diseno-input"
                                placeholder="Busca marcas y Productos..."
                                aria-label="Search"
                                aria-describedby="basic-addon1"
                            />
                            <div className="">
                                <span
                                    className="input-group-text buscador-span"
                                    id="basic-addon1">
                                    <box-icon name="search"></box-icon>
                                </span>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="cart col-md-2">
                    <box-icon name="cart" style={{ color: 'white' }}></box-icon>
                    <span className="cantidad_total">0</span>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
