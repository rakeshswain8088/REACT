import React from 'react';

export default function FunFun(){

     let functionalFunction = (args) =>{
        console.warn('Hi I am from Functional Component',args)
     }

     let functionalFunction2 = () =>{
        console.warn('Hi I am from Functional Component')
     }

    return(
        <div>
            <button onClick={()=>{functionalFunction(10)}} >Call Fun Function</button>
            <button onClick={()=>{functionalFunction2()}} >Call Fun Function</button>
        </div>
    )
}
