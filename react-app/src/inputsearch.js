import React from "react";

class Inputsearch extends React.Component{

    render(){
        return(
            <div>
                <input  placeholder="search..." type="text"
                        value={this.props.text}
                        className="search"
                        onChange={this.props.ontextchange} />


                <br/>
                <label className="checkbox">

                    <input type="checkbox"
                           checked={this.props.checked}
                           onChange={this.props.oncheck}/>


                    Only show item in stock
                </label>


            </div>
        );


    }
}

export default Inputsearch