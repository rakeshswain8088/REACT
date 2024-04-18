import React from 'react';

export default class LifeCycleMethod extends React.Component{
    constructor(){
        super();
        console.warn('Constructor Called...')
    }
    
    itemStyle = {
        color: 'brown', 
        fontSize: '20px' 
     }

    componentDidMount(){
        console.warn('component did mount called...')
    }

    render(){
        console.log('render method')
        return(
            <div style={this.itemStyle}>Life Cycle Method</div>
        )
    }
}