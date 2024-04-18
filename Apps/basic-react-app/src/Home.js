import React from 'react';

class Home extends React.Component{
    constructor(){
        super();
        this.state = {
            name: 'Nikun',
            email:'nikun@test.com',
            count:1
        }
    }
    updateState(){
        this.setState({
            count : this.state.count+1
        })
    }
    render(){
        return(
            <div>
            <h3>React - Class Component</h3>
            <h3>props: {this.props.fullName}</h3>
            <h3>state: {this.state.email}</h3>
            <h3>click count: {this.state.count}</h3>
            <button onClick={()=>{this.updateState()}}>Click Count</button>
            </div>
        )
       }
}

export default Home;