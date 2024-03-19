import React from "react";

const Market = ({ data }) => {
  return (
    <div className="flex flex-col rounded-lg shadow-md border">
      <div>
        <img className="w-full h-44 " src={data.image} alt="" />
      </div>
      <div className="p-2">
        <h1 className="text-lg font-semibold">{data.title}</h1>
        <p>{data.description}</p>
      </div>
    </div>
  );
};

export default Market;
