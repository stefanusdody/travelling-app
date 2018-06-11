import React from "react";

function Photo ({match}) {
  return (
    <div>
      <img
       src={require(`./${match.params.person}.jpg`)}
       height= "600px"
       width= "100%"
       />
    </div>
  )
}
export default Photo;
