import React from "react";

const Title = ({ title, subtitle }) => {
    return (
       <div>
           <h2 className="title size-1"> { title } </h2>
           <p> { subtitle } </p>
       </div>
    )
};

export default Title;

