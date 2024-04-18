import React from 'react';

class PropClass extends React.Component{
    render(){
        return(
            <div>
                <h1>Prop : {this.props.proptypeVal}</h1>
            </div>
        )
    }
}

export default PropClass;