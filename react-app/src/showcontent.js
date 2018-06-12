import React from "react";
import Productrow from './productrow.js';
import itemdata from './data.json';

class Showcontent extends React.Component{


    render(){
        const element = itemdata.map((item)=>{return <Productrow  key={item.id} item={item} data={this.props.data}/>});

        return(
            <div className="content">
                <table>
                    <colgroup>
                        <col className="column1"></col>
                        <col className="column2" ></col>
                    </colgroup>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                    {element}
                </table>
            </div>);
    }
}

export default Showcontent