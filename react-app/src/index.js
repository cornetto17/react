import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Inputsearch from './inputsearch.js'
import Showcontent from './showcontent.js'

class Errorclass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            haserror : false
        };
    }
    componentDidCatch(error, info){
        this.setState({haserror : true});
       // logErrorToMyService(error, info);
    }

    render()
    {
        if(this.state.haserror)
        {
            return <h1>Error </h1>;
        }
        else return this.props.children;
    }
}


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
            <Errorclass>
        <div>
            <Inputsearch
                text={this.state.searchtext}
                checked={this.state.isselected}
                ontextchange={this.handleinput}
                oncheck={this.handlecheckbox}

            />

            <Showcontent data={this.state}/>
        </div>
        </ Errorclass>
        );
    }

}






ReactDOM.render(<Propertyfilter />,document.getElementById("root"));


