import React from "react";

const RoverModal = ({ roverData, date_created }) => {

  const roverStatusCheck = () => { 
    if(roverData.status === "active" || roverData.status === "complete") {
      return <span className="badge badge-pill badge-success"> {roverData.status}</span>
    }
  else return <p> {roverData.status}</p>
  }
  return (
    <div className="card-body">
      <h5 className="card-title">{roverData.name}</h5>
      <p>{roverStatusCheck()}</p>
      <p>{date_created}</p>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Full Name</th>
          </tr>
        </thead>
        <tbody>
          {roverData.cameras.map((camera, index) => (
            <tr key={index}>
              <td>{camera.name}</td>
              <td>{camera.full_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoverModal;
