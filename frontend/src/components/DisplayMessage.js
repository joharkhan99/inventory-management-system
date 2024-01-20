import React from "react";

const DisplayMessage = ({ response }) => {
  return (
    <>
      {response && (
        <div className="alert alert-info" role="alert">
          {response}
        </div>
      )}
    </>
  );
};

export default DisplayMessage;
