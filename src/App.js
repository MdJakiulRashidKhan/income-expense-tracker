import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import IncomeTransaction from './components/IncomeTransaction';
import ExpenseTransaction from './components/ExpenseTransaction';
import './styles.css';

const App = () => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const deleteTransaction = (index) => {
    const updatedTransactions = [...transactions];
    updatedTransactions.splice(index, 1);
    setTransactions(updatedTransactions);
  };

  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route
            path="/"
            element={<IncomeTransaction addTransaction={addTransaction} />}
          />
          <Route
            path="/expenses"
            element={<ExpenseTransaction addTransaction={addTransaction} />}
          />
        </Routes>
        <div className="transaction-list">
          <h2>Transaction List</h2>
          {transactions.map((transaction, index) => (
            <div key={index} className="transaction-item">
              <span className="description">{transaction.description}</span>
              <span className="amount">
                {transaction.amount} {transaction.type === 'expense' ? '-' : '+'}
              </span>
              <button onClick={() => deleteTransaction(index)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </Router>
  );
};

export default App;
