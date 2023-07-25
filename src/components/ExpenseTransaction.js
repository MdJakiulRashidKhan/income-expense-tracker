import React, { useState } from 'react';

const ExpenseTransaction = ({ addTransaction }) => {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTransaction({ type: 'expense', amount, description });
    setAmount('');
    setDescription('');
  };

  return (
    <div>
      <h2>Expense Transaction</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="expense-amount">Amount:</label>
          <input
            type="number"
            id="expense-amount"
            value={amount}
            onChange={handleAmountChange}
            required
          />
        </div>
        <div>
          <label htmlFor="expense-description">Description:</label>
          <input
            type="text"
            id="expense-description"
            value={description}
            onChange={handleDescriptionChange}
            required
          />
        </div>
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
};

export default ExpenseTransaction;
