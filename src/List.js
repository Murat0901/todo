import React from 'react';

const List = (props) => 
    <div>
        <ul>
          {props.items.map(item => (
            <li>
                {item}
            </li>
          ))}
        </ul>
    </div>

export default List;