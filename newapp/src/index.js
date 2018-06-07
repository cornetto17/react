import React from 'react';
import ReactDOM from 'react-dom';



function welcome(props){
       return  <h1>hello,{props.name}</h1>;

}
const element = <welcome name ="vikas" />;
ReactDOM.render(
    <welcome name ="vikas" />,
    document.getElementById('root')

);
