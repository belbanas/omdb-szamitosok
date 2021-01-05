import React from "react";

const Item = (props) => {
    return (
        <div className="item">
            <p>{props.title}</p>
            <p>{props.year}</p>
            <p>{props.type}</p>
        </div>
    );
};

export default Item;
