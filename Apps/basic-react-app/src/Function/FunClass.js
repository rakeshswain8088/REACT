import React from 'react';

export default class FunClass extends React.Component{
    
    classFunction=(arg,e)=>{
     console.warn('Hi I am Class Function',arg);
     console.log(e);
    }

    classFunction2=()=>{
        console.warn('Hi I am Class Function 2');
    }

    render(){
        return(
            <div>
                <button onClick={()=>{this.classFunction(30,Event)}}>Call Class Function</button>
                <button onClick={()=>{this.classFunction2()}}>Call Class Function</button>
            </div>
        )
    }
}