import { useState } from "react";
import { Link } from "react-router-dom";

function Index(props) {
  // state to hold formData
  const formFields = {
    name: "",
    image: "",
      title: "",

  };

  
    
  const [ newForm, setNewForm ] = useState(formFields);

    
  // handleChange function for form
  const handleChange = (event) => {

    //when the set state function is called 
    //new state is passed as argument
    //the new state is then replacing the old state 
      
    setNewForm({ 
      ...newForm,
      [event.target.name]: event.target.value 
    });
  };

  // handle submit function for form
  const handleSubmit = (e) => {
    e.preventDefault();
    props.createPeople(newForm);
    setNewForm(formFields);
  };

  // loaded function
  const loaded = () => {
      return props.people.map((person) => (
        //key is used to make a stable identity for each component
      <div key={person._id} className="person">
        <Link to={`/people/${person._id}`}>
          <h1>{person.name}</h1>
        </Link>
        <img src={person.image} alt={person.name} />
        <h3>{person.title}</h3>
      </div>
    ));
  };

  const loading = () => {
    return <h1>Finding the Peeps (loading)...</h1>;
  };

  return (
    <section>
          <form onSubmit={handleSubmit}>
              {/* be sure that these are all matching a schema type of function somewhere in future code.  */}
        <input
          type="text"
          value={newForm.name}
          name="name"
          
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.image}
          name="image"
          placeholder="image URL"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.description}
          name="title"
          placeholder="title"
          onChange={handleChange}
              />
              {/* //this is the submit button */}
        <input type="submit" value="Create Person" />
            
      </form>
      {props.people ? loaded() : loading()}
    </section>
  );
}

export default Index;
