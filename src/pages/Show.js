import React from "react";
import { useParams } from "react-router-dom";

function Show({ people, updatePeople, deletePeople }) {
  const { id } = useParams();

  // Find the person by id
  const person = people.find((person) => person._id === id);

  // Handle update button click
  const handleUpdate = () => {
    // Perform update operation using updatePeople function
    // Pass the updated data and the person id
    const updatedPerson = { ...person, name: "Updated Name" };
    updatePeople(updatedPerson, id);
  };

  // Handle delete button click
  const handleDelete = () => {
    // Perform delete operation using deletePeople function
    deletePeople(id);
  };

  if (!person) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>{person.name}</h1>
      <p>{person.title}</p>
      <img src={person.image} alt={person.name} />
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Show;
