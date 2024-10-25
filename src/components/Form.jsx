import React, { useContext, useEffect, useState } from "react";
import TransactionContext from "../context/TransactionContext";

const Form = () => {
  const { addTransaction, edit , updateTransaction } = useContext(TransactionContext);

  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(edit.isEdit){
      updateTransaction({id : edit.transaction.id , text , amount : +amount})
    }
    else{
      addTransaction(text, +amount);
    }
    setText("");
    setAmount("");
  };

  useEffect(() => {
    setText(edit.transaction.text);
    setAmount(edit.transaction.amount);
  }, [edit]);
  return (
    <div className="card p-5 rounded-0">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          required
          placeholder="Enter Transaction"
          className="form-control rounded-0 my-3"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <input
          type="number"
          required
          placeholder="Enter Amount"
          className="form-control rounded-0 my-3"
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
        />

        <button className="btn btn-success rounded-0 w-100">
          Save Transaction
        </button>
      </form>
    </div>
  );
};

export default Form;
