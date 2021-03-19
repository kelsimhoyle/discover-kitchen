import React from "react";

const Title = ({ title, subtitle }) => {
    return (
       <div>
           <h2 className="title"> { title } </h2>
           <p> { subtitle } </p>
       </div>
    )
};

export default Title;

