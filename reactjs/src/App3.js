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
  const renderCustomers = (customer, index) => {
    // return <li key={index}>{customer.name}</li>; usa-se quando não tiver um id
    return (
      <div key={`customer-${customer.id}`}>
        <li>{customer.name}</li>
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
      <h1>Clientes</h1>
      <ul>{customers.map(renderCustomers)}</ul>
    </>
  );
};

export default App;
