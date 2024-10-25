import React, { useContext } from "react";
import TransactionContext from "../context/TransactionContext";

const ListItem = ({ transaction }) => {
  const { removeTransaction, editTransaction } = useContext(TransactionContext);
  return (
    <li
      className={
        transaction.amount > 0
          ? "list-group-item text-success"
          : "list-group-item text-danger"
      }
    >
      <h1>
        {transaction.text} : {transaction.amount}
      </h1>
      <span className="float-end">
        <button
          className="btn btn-sm btn-warning rounded-0"
          onClick={() => editTransaction(transaction)}
        >
          Edit
        </button>
        <button
          className="btn btn-sm btn-danger rounded-0"
          onClick={() => removeTransaction(transaction.id)}
        >
          Delete
        </button>
      </span>
    </li>
  );
};

export default ListItem;
