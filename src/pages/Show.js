import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function Show({ people, updatePeople, deletePeople }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const person = people.find((person) => person._id === id);

  const handleUpdate = () => {
    // Prompt the user for new values or retrieve them from form inputs
    const newName = prompt("Enter new name:");
    const newTitle = prompt("Enter new title:");
    const newImage = prompt("Enter new image URL:");

    // Create an updatedPerson object with the new values
    const updatedPerson = {
      ...person,
      name: newName,
      title: newTitle,
      image: newImage,
    };

    // Call the updatePeople function with the updatedPerson object and the id
    updatePeople(updatedPerson, id);
  };
    //BELOW IS AN ALTERNATE UPDATE HANDLE THAT WILL REQUIRE INPUT FIELDS 
    // const handleUpdate = () => {
    //   // Retrieve the new values from the input fields
    //   const newName = document.getElementById("nameInput").value;
    //   const newTitle = document.getElementById("titleInput").value;
    //   const newImage = document.getElementById("imageInput").value;

    //   // Create an updatedPerson object with the new values
    //   const updatedPerson = {
    //     ...person,
    //     name: newName,
    //     title: newTitle,
    //     image: newImage,
    //   };

    //   // Call the updatePeople function with the updatedPerson object and the id
    //   updatePeople(updatedPerson, id);
    // };

  const handleDelete = () => {
      deletePeople(id);
      navigate("/");
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
