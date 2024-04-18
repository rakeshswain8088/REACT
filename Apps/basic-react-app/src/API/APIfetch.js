import react from 'react';

export default class APIfetch extends react.Component{
    constructor(props){
        super(props)
        
        //declare variable to store API data
        this.state ={
            items:[]
        }
    }

    fetchRemoteItems(){
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((result)=>{return result.json()})
        .then(
            (result)=>{
                var itemsArr = [];
                result.forEach(element => {
                    let itemOb = {
                        userId: element.userId,
                        id:element.id,
                        title:element.title,
                        completed:element.completed
                    }
                    itemsArr.push(itemOb)
                });
                this.setState({
                    items:itemsArr
                })
            },
            (error)=>{
                console.log(error)
            }
        )
    }

    render(){
        return(
            <div>
                <h3>API Fetch</h3>
                <button onClick={()=>{this.fetchRemoteItems()}}>Get Result</button>
                <table border="1" style={{margin:'auto',width:'1000px'}}>
                <tr>
                    <td>Id</td>
                    <td>UserId</td>
                    <td>Title</td>
                    <td>Completed</td>
                </tr>
                {
                    this.state.items.map((item)=>
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.userId}</td>
                            <td>{item.title}</td>
                            <td>{item.completed}</td>
                        </tr>
                    )
                }
                </table>
            </div>
        )
    }
}