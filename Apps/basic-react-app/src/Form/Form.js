import react from 'react';

export default class Form extends react.Component{
    constructor(){
        super()
        this.state={
            firstName:null,
            lastName:null
        }
    }

    formSubmit(){
        console.log(this.state)
    }

    render(){
        return(
            <div>
                <h3>Forms</h3>
                <input type='text' name="firstName" 
                onChange={(e)=>{this.setState({firstName:e.target.value})}}/>
                
                <input type='text' name="lastName" 
                onChange={(e)=>{this.setState({lastName:e.target.value})}}/>
                
                <button onClick={()=>{this.formSubmit()}}>Submit</button>
            </div>
        )
    }
}