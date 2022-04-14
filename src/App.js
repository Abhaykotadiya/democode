import logo from './logo.svg';
import './App.css';
import { StrictMode } from 'react';
import Smd from "./container/Smd"
import State from './container/State';
import Country from './container/Country';
import StateFun from './container/StateFun';
import City from './container/City';
import Counter from './container/Counter';
import Clock from './container/Clock';
import { useEffect, useState } from 'react';
import Home from './container/Home/Home';
import Loding from './Component/Loding';

const HomeWithLoding = Loding(Home);
function App() {

    const [loding, setLoding] = useState(false);
    const[data ,setData] = useState([])

    const userData = [
      {
        id:101,
        name:'abhay'
      },
      {
        id:102,
        name:'somil'
      }
    ]

    useEffect(
      () => {
        setLoding(true)
        setTimeout(() => { setLoding(false); setData(userData)},2000)
      },
    [])
  return (
    <>
    <div>
        <HomeWithLoding
        isLoding={loding}
        data = {data}
        />
    </div>
    </>    
    
  );
}

export default App;
