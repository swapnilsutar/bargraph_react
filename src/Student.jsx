import React from "react";
import "./Student.css";
import Stable from "./Stable";
import Sdata from "./Sdata";
import {Table} from "react-bootstrap";

const Student = ({setIno}) =>{
    // const run = () =>{
    //     const info = {name:"swapnil",math:95,chemistry:56,physics:8};
    //     setIno(info);
    //     // console.log([{name:"swapnil",math:55,chemistry:56,physics:98}]);
    // }

    const myselectedinfo = (nam,math,phy,che) =>{
        const allinfo = {name:nam, math:math,chemistry:che,physics:phy};
        // console.log(allinfo);
        setIno(allinfo);
    }

    return(
        <>
        <Table striped bordered hover>
            <tbody>
            <tr>
                <th>Roll No</th>
                <th>Full Name</th>
                <th>Mathematics</th>
                <th>Physics</th>
                <th>Chemistry</th>
            </tr>
            {
            Sdata.map((val,index)=>{
                return(
                    <Stable 
                        key={index}
                        roll={val.roll}
                        name={val.name}
                        math={val.sub1}
                        physics={val.sub2}
                        chemistry={val.sub3}
                        selectme={myselectedinfo}
                    />
                );
            })}

        </tbody>     
        </Table>
        {/* <button onClick={run}>click</button> */}
        </>
    );
}

export default Student;