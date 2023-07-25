import React, { useState } from 'react';

const IncomeTransaction = ({ addTransaction }) => {
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
    addTransaction({ type: 'income', amount, description });
    setAmount('');
    setDescription('');
  };

  return (
    <div>
      <h2>Income Transaction</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="income-amount">Amount:</label>
          <input
            type="number"
            id="income-amount"
            value={amount}
            onChange={handleAmountChange}
            required
          />
        </div>
        <div>
          <label htmlFor="income-description">Description:</label>
          <input
            type="text"
            id="income-description"
            value={description}
            onChange={handleDescriptionChange}
            required
          />
        </div>
        <button type="submit">Add Income</button>
      </form>
    </div>
  );
};

export default IncomeTransaction;
