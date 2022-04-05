import React, { useState} from 'react'

export default function StateFun() {

    const [id,setId] = useState(111);
    const [name,setName] = useState('raj');
    
    const change = () => {
        setId(112);
    }
  return (
    <>
    <div>
    {id}
    <button onClick={ () => change()}>change id</button>
    </div>
    <div>
    {name}
    <button onClick={ () => setName('Abhay')}>change Name</button>
    </div>
    </>
    
  )
}
