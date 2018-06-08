import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            inputs: []
         }

            this.handleclick =this.handleclick.bind(this)
            this.deleteitem = this.deleteitem.bind(this)
        }

    handleclick()
    {
        const val = document.getElementById("input").value;
        if(val.length>0 && this.state.inputs.indexOf(val)===-1)
        {
            const newinputs = this.state.inputs;
            newinputs.push(val);
            this.setState({inputs : newinputs});
        }
    }

    deleteitem()
    {
        const val = document.getElementById("input").value;
        if(val.length>0 && this.state.inputs.indexOf(val)!==-1)
        {
            const newinputs = this.state.inputs;
            newinputs.splice(newinputs.indexOf(val),1);
            this.setState({inputs : newinputs});
        }
    }


    render(){
        return(

        <div>

            <input type="text" id="input" />
            <button onClick={this.handleclick}> Add </button>
            <button onClick={this.deleteitem}>Delete</button>
            <Printlist inputs={this.state.inputs} />
        </div>
        )
    }
}


function Printlist(props){

    const text = props.inputs.map((val,index)=><li key={val}><strong>{index+1}.</strong> {val}</li> );
    return (
        <ul>
            {text}
        </ul>
    );

}
ReactDOM.render(
    <App />,
    document.getElementById('root')

)
