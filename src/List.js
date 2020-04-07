import React from 'react';

const List = (props) => 
    <div>
        <ul className="list-group col-md-12">
          {props.items.map((item,index) => (
            <li 
            key={index}
            onClick={props.deleteTask.bind(this, index)}
            className="list-group-item">
                {item}
            </li>
          ))}
        </ul>
    </div>

export default List;