import React from "react";

const Uni = ({ props }) => {
  console.log(props);

  return (
    <div>
      <a  href={props.web_pages}>
        <h1 style={{ color: "green" }}>
          {props.name}
        </h1>
      </a>
    </div>
  );
};

export default Uni;
