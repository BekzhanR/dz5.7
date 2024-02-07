import React from 'react';
import classes from "./app.module.sass"
import {useDispatch} from "react-redux";
import {basketAction} from "../redux/slices/Busketslices.jsx";
export const Productcard = ({item}) => {
    const dispatch = useDispatch()
    const handlebuy = item => dispatch(basketAction.addProduct(item))
    return (
        <div>
            <img src={item.images && item.images[0]} alt="#"/>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
            <p>{item.price}</p>
            <button onClick={() =>handlebuy(item)}>Buy</button>
        </div>
    );
};