import React from "react";

const RoverModal = ({ roverData }) => {

  return (
    <div className="roverData">
      <p>{roverData.name}</p>
      <p>{roverData.status}</p>

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
