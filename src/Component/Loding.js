import React from 'react'

export default function Loding(Component) {
    return function withLodingComponent({isLoding,data}){
        if (isLoding){
            return(
                <p>Loding...</p>
            )
        }else{
            return(
                <Component data ={data}/>
            )
        };
    }
}
