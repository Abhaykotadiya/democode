
import React from "react";
function App(props) {
  
  let Data=


  [ 
      {
        name: "amit",
        age: 35,
        salary: 40000,
        bonus: 1000,
        status: true
      },
      {
        name: "ajay",
        age: 25,
        salary: 38000,
        bonus: 2000,
        status: false
      },
      {
        name: "mayur",
        age: 23,
        salary: 50000,
        bonus: 500,
        status: true
      },
      {
        name: "jay",
        age: 29,
        salary: 35000,
        bonus: 600,
        status: true
      },
      {
        name: "raj",
        age: 33,
        salary: 22000,
        bonus: 2000,
        status: true
      },
    ]
  let filterdata = Data.filter((d,i) => (d.status === true));

  let total =filterdata.reduce((acc,d)=> acc+d.bonus+d.salary,0)

  console.log(total)
  return (
  
    <div>
      <table border="1" style={{color:"blue",fontWeight:"500",textAlign:"center",margin:"400px"}}>
    <tr>
      <th style={{padding:"10px"}}>name</th>
      <th>age</th>
      <th>salary</th>
      <th>bonus</th>
      <th>status</th>
      <th>salary+bonus</th>
      <th>total</th>
    </tr>
    {
      filterdata.map ((d,i)=>{
        return(
          <>
            <tr>
              <td style={{padding:"10px"}}>{d.name}</td>
              <td>{d.age}</td>
              <td>{d.salary}</td>
              <td>{d.bonus}</td>
              <td>{d.status.toString()}</td>
              <td>{d.salary+d.bonus}</td>
              {i === 0 ? <td rowSpan={filterdata.length}>{total}</td>:null}
            </tr>
          </>
        )
      })
    }
  </table>
    </div>
  );
}

export default App;
