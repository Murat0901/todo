import React from 'react';

const List = (props) => 
    <div className="container">
        <ul className="list-gropu">
          {props.items.map(item => (
            <li className="list-group-item">
                {item}
            </li>
          ))}
        </ul>
    </div>

export default List;