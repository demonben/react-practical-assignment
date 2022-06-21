import React from "react";
import { Hearts } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="loader">
      <Hearts color="red" height={80} width={80} />
    </div>
  );
};

export default Loader;
