import React from "react";

class Productrow extends React.Component{




    render()
    {
        if(this.props.data.searchtext.length===0
            || this.props.item.name.toLowerCase().includes(this.props.data.searchtext))

        {
            return(

                <tr >
                    <td className="td1" > { this.props.item.name }</td>
                    <td  className="td2" on> { this.props.item.price}</td>
                </tr>
            )
        }
        else
        {
            return <tr/>;
        }

    }
}

export default Productrow