import React, { useState } from "react";
import Form from "./components/Form";
import Dashboard from "./components/Dashboard";
import ListGroup from "./components/ListGroup";
import Navbar from "./components/Navbar";
import { TransactionProvider } from "./context/TransactionContext";

const App = () => {
  

 
  return (
    <TransactionProvider>
      <Navbar />

      <div className="container p-5">
        <Form />

        <Dashboard />

        <ListGroup
        />
      </div>
    </TransactionProvider>
  );
};

export default App;
