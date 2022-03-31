import logo from './logo.svg';
import './App.css';
import { StrictMode } from 'react';
import Smd from "./container/Smd"

function App() {

  let Data =
  [
     {
       id: 101,
       name: 'Abacavir',
       quantity: 25,
       price: 150,
       expiry: 2022,
       status: true
     },
     {
       id: 102,
       name: 'Eltrombopag',
       quantity: 90,
       price: 550,
       expiry: 2021,
       status: true
     },
     {
       id: 103,
       name: 'Meloxicam',
       quantity: 85,
       price: 450,
       expiry: 2025,
       status: false
     },
     {
       id: 104,
       name: 'Allopurinol',
       quantity: 50,
       price: 600,
       expiry: 2023,
       status: true
     },
     {
       id: 105,
       name: 'Phenytoin',
       quantity: 63,
       price: 250,
       expiry: 2021,
       status: false
     }
   ];

   let filterdata = Data.filter((d,i) => (d.price > 200 && d.expiry > 2021));

  let total =filterdata.reduce((acc,d)=> acc+d.price,0);

  return (
    <>
    <Smd />
    <table border="1">
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Expiry</th>
          <th>Status</th>
          <th>total</th>
        </tr>
        {
          filterdata.map((d,i) => {
            return(
              <>
                <tr>
                  <td>{d.id}</td>
                  <td>{d.name}</td>
                  <td>{d.quantity}</td>
                  <td>{d.price}</td>
                  <td>{d.expiry}</td>
                  <td>{d.status.toString()}</td>

                  {i === 0 ? <td rowSpan={filterdata.length}>{total}</td>:null}
                </tr>
              </>
            )
          })
        }
    </table>
    </>    
    
  );
}

export default App;
