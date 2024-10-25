import { createContext, useContext, useState } from "react";

const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      text: "Salary",
      amount: 60000,
    },
    {
      id: 2,
      text: "Rent",
      amount: -10000,
    },
    {
      id: 3,
      text: "coffee",
      amount: -500,
    },
    {
      id: 4,
      text: "Freelancing",
      amount: 9500,
    },
  ]);

  const addTransaction = (text, amount) => {
    setTransactions([
      {
        id: crypto.randomUUID(),
        text,
        amount,
      },
      ...transactions,
    ]);
  };

  const removeTransaction = (id) => {
    setTransactions(transactions.filter((item) => item.id !== id));
  };

  const [edit, setEdit] = useState({
    transaction: {},
    isEdit: false,
  });

  const editTransaction = (transaction) => {
    setEdit({
      transaction: transaction,
      isEdit: true,
    });
  };

  const updateTransaction = (updated) => {
    setTransactions(
      transactions.map((transaction) =>
        transaction.id === updated.id ? updated : transaction
      )
    )
    setEdit({
      transaction: {},
      isEdit: false,
    })
  };

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        removeTransaction,
        addTransaction,
        edit,
        editTransaction,
        updateTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionContext;
