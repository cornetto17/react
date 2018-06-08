import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            inputs: [],
            value : "",
            temp :"Enter Feedback :  "
         }

            this.handleclick =this.handleclick.bind(this)
            this.deleteitem = this.deleteitem.bind(this)
            this.changevalue = this.changevalue.bind(this)
            this.handleSubmit = this.handleSubmit.bind(this)
        }

    handleclick()
    {
        const val = this.state.value;
        if(val.length>0 && this.state.inputs.indexOf(val)===-1)
        {
            const newinputs = this.state.inputs;
            newinputs.push(val);
            this.setState({inputs : newinputs});
        }
    }

    deleteitem()
    {
        const val = this.state.value;
        if(val.length>0 && this.state.inputs.indexOf(val)!==-1)
        {
            const newinputs = this.state.inputs;
            newinputs.splice(newinputs.indexOf(val),1);
            this.setState({inputs : newinputs});
        }
    }

    changevalue(event)
    {
        const target = event.target;
        const val = target.value;
        const name= target.name ;
        console.log(name);
        this.setState({ [name] : val});
    }


    handleSubmit(event)
    {
        event.preventDefault();
    }
    render(){
        return(

        <div>

            <input type={"text"} name="value" id="input" value={this.state.value} onChange={this.changevalue} />
            <button onClick={this.handleclick}> Add </button>
            <button onClick={this.deleteitem}>Delete</button>
            <p/>

            <Printlist inputs={this.state.inputs} />
            <p/>
            <textarea name="temp" value={this.state.temp} onChange={this.changevalue}></textarea>

            <p></p>

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
