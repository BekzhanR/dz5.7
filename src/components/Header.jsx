import React from 'react';
import classes from "./app.module.sass"
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
const Header = () => {
    const {basketProducts}=useSelector(state => state.basket)
    return (
        <div className={classes.header}>
            <div>
                <div>
                    <h3>Header</h3>
                    <NavLink to="/">
                        Main
                    </NavLink>
                    <NavLink to="/busket">
                        Busket <span>{basketProducts.length}</span>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Header;