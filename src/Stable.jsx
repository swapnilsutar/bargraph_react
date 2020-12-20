import React from "react";
import './App.css';

function Stable(props){

    const handle = (e) =>{
        props.selectme(props.name,props.math,props.physics,props.chemistry);
    }

    return(
        <>
            <tr onClick={handle}>
                <td> {props.roll} </td>
                <td> {props.name} </td>
                <td> {props.math} </td>
                <td> {props.physics} </td>
                <td> {props.chemistry} </td>
            </tr>
        </>
    )
}

export default Stable;