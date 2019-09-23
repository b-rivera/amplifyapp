import React from 'react';

const List = (props) => (
  <div className="list-container">
    <h2>{props.title}</h2>
    <ul>
        {
            props.items.map((item, index) => <li key={index}>{item}</li>)
        }
    </ul>
  </div>
);

export default List;