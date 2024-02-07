
import classes from "./app.module.sass"
import {useDispatch} from "react-redux";
import {basketAction} from "../redux/slices/Busketslices.jsx";
export const Busketcard = ( { item } ) => {
    const dispatch= useDispatch()
    const handleremove = id => dispatch(basketAction.removeProduct(id))
    return (
        <div>
            <img src={item.images && item.images[0]} alt="#"/>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
            <p>{item.price}</p>
            <button onClick={() =>handleremove(item.id)}>Delete</button>
        </div>
    );
};

