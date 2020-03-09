import React from "react";

const Content = props => {
    return (
      <div>
        <p className="name">{props.name}</p>
        <p className="description">{props.desc}</p>
      </div>
    );
}

export default Content;
