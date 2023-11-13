import { useState } from "react";

function TripList() {
  const [trips, setTrips] = useState([]);

  console.log(trips);

  fetch("http://localhost:3000/trips")
    .then((resonse) => resonse.json())
    .then((json) => setTrips(json));

  return (
    <div>
      <h2>Trip List</h2>
    </div>
  );
}

export default TripList;
