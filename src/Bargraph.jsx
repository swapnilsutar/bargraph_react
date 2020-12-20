import React from 'react';
import "./App.css";
import {Bar} from 'react-chartjs-2';

function Bargraph(props){
  
  // console.log(props.name);
  // console.log(props.math);
  const state = {
    labels: ['Mathematics', 'Physics', 'Chemistry'],
    datasets: [
      {
        label: 'Marks Obtain',
        backgroundColor: 'rgba(15,692,192,4)',
        borderColor: 'rgba(0,0,2,1)',
        borderWidth: 1,
        data: [props.math,props.physics,props.chemistry]
      }
    ]
  }
  
  return (
    <div className="graph-box">
      <h1>{props.name}</h1>
      <Bar
        data={state}
        options={{
          title:{
            display:true,
            text: props.name + ' Marks in Exam',
            fontSize:20
          },
          legend:{
            display:true,
            position:'right'
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  min: 0,
                  max:100
                }
              }
            ]
        }
        }}
      />
    </div>
  );

}

export default Bargraph; 
