import React from 'react';

export default class ClassState extends React.Component{
    constructor(){
        super();
        //declaring a state
        this.state = {
            name:"Nikkun",
            surname:"Swain"
        }
    }
 
    //updating a state
    updateState(){
        let i = 10;
        this.setState({
        name:"Rakesh"
        })
    }

    render(){
        return(
            <div>
                <h2>{this.state.name}</h2>
                <button onClick={()=>{this.updateState()}}>Change State Value</button>
            </div>
        )
    }
}
