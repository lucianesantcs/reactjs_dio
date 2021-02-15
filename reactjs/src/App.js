import React from "react";

const customers = [
  {
    id: 1,
    name: "Jane Doe",
    skills: ["React", "Node", "CSS", "Webpack"],
  },

  {
    id: 2,
    name: "Marcy",
    skills: ["Webpack", "CSS", "React"],
  },

  {
    id: 3,
    name: "Robert",
    skills: ["CSS", "Node", "Webpack"],
  },
];

const App = () => {
  const name = "DIO";

  const showEvent = () => {
    alert(name);
  };

  const handleChange = (event) => {
    const { value } = event.target;
    console.log(value);
  };

  const handleDelete = (event, id) => {
    console.log("id", id);
  };

  const Button = <button onClick={showEvent}>Mostrar Evento</button>;

  const renderCustomers = (customer, index) => {
    // return <li key={index}>{customer.name}</li>; usa-se quando não tiver um id
    return (
      <div key={`customer-${customer.id}`}>
        <li>
          {customer.name}{" "}
          <button onClick={(event) => handleDelete(event, customer.id)}>Deletar cliente</button>
        </li>
        {customer.skills.map(renderSkills)}
      </div>
    );
  };

  const renderSkills = (skills, index) => {
    return (
      <div style={{ paddingLeft: "30px" }} key={`skill-${index}`}>
        <li>{skills}</li>
      </div>
    );
  };

  return (
    <>
      <input type="text" onChange={handleChange} />
      <ul>{customers.map(renderCustomers)}</ul>
      {Button}
    </>
  );
};

export default App;
