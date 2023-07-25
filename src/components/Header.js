import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Income</Link>
          </li>
          <li>
            <Link to="/expenses">Expenses</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
