import React from "react";

const buttonA = <button>Histórico dos clientes</button>;
const buttonB = <button>Cadastrar cliente</button>;

const hasCustomer = true;

const showCustomer = () => {
  if (!hasCustomer) return null;
  return <p>Nome do Cliente: Bruno Carneiro</p>;
};

const App = () => {
  const renderShowHistory = (
    <div>
      <p>Clique no botão abaixo para visualizar o histórico dos clientes</p>
      {buttonA}
    </div>
  );

  const renderAddCustomer = (
    <div>
      <p>Cadastre aqui</p>
      {buttonB}
    </div>
  );

  return (
    <>
      {/* {hasCustomer && (
        <div>
          <p>Clique no botão abaixo para visualizar o histórico dos clientes</p>
          {buttonA}
        </div>
      )} */}

      {/* {hasCustomer ? (
        <div>
          <p>Clique no botão abaixo para visualizar o histórico dos clientes</p>
          {buttonA}
        </div>
      ) : (
        <div>
          <p>Cadastre aqui</p>
          {buttonB}
        </div>
      )} */}

      {hasCustomer ? renderShowHistory() : renderAddCustomer()}

      {showCustomer()}
    </>
  );
};

export default App;
