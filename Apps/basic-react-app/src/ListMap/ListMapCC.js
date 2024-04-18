import React from 'react';

export default class ListMapCC extends React.Component{
    constructor(){
        super();
        this.state = {
            list:[
                {name:'Hari',salary:10000},
                {name:'Ram',salary:15000},
                {name:'Krishna',salary:10000},
                {name:'Ganesh',salary:30000},
                {name:'Ganesh',salary:30000},
                {name:'Ganesh',salary:30000}
            ]
        }
    }

    render(){
        return(
            <div>
             <h3>Employee Details: UL - LI</h3>
             {
                this.state.list.map((item,index)=>
                <ul key={index} style={{width:300,color: "white",border:"1px solid black",backgroundColor:"gray",margin:"auto",padding:5}}>
                    <li>{item.name} - {item.salary}</li>
                </ul>
                )
             }

            <h3>Employee Details: Table</h3>
            {
                this.state.list.map((item,index)=>
                <table key={index} style={{width:300,color: "white",border:"1px solid white",backgroundColor:"black",margin:"auto",padding:5}}>
                    <tbody>
                    <tr>
                        <td>{item.name}</td><td>{item.salary}</td>
                    </tr>
                    </tbody>
                </table>
                )
             }
            </div>
        )
    }
}