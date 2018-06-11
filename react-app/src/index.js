import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import itemdata from './data.json';

class Propertyfilter extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isselected : true,
            searchtext : ""

        }
        this.handleinput=this.handleinput.bind(this);
        this.handlecheckbox=this.handlecheckbox.bind(this);
    }

    handleinput(event)
    {
        const text = event.target.value;
        this.setState({searchtext : text.trim()});
    }

    handlecheckbox(event)
    {
        this.setState((prevstate)=>({ isselected : !prevstate.isselected}));
    }

    render()
    {
        return(
        <div>
            <Inputsearch
                text={this.state.searchtext}
                checked={this.state.isselected}
                ontextchange={this.handleinput}
                oncheck={this.handlecheckbox}
            />
            <br/>
            <Showcontent data={this.state}/>
        </div>);
    }

}

class Inputsearch extends React.Component{

    render(){
        return(
            <div>
                <input type="text"  value={this.props.text} className="search" onChange={this.props.ontextchange} />
                <br/>
                <label className="checkbox">
                <input type="checkbox"  checked={this.props.checked}  onChange={this.props.oncheck}/>
                    Only show item in stock
                </label>


            </div>
        );


    }
}

class Showcontent extends React.Component{


    render(){
        const element = itemdata.map((item)=>{return <Productrow item={item} data={this.props.data}/>});

        return(
        <div className="content">
            <table>
                <caption>Item List</caption>
                <tbody>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                {element}
                </tbody>
            </table>
        </div>);
    }
}

class Productrow extends React.Component{




    render()
    {
        if(this.props.data.searchtext.length===0
            || this.props.item.name.toLowerCase().includes(this.props.data.searchtext))

        {
            return(

                <tr>
                    <td> { this.props.item.name }</td>
                    <td> { this.props.item.price}</td>
                </tr>
            )
        }
        else
        {
            return (<tr></tr>);
        }

    }
}

ReactDOM.render(<Propertyfilter />,document.getElementById("root"));


