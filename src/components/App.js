import React from 'react';
import { Link } from 'react-router';

export default ({ children }) => (
  <div>
    <ul>
      <li>
        <Link to="/contacts">Contacts</Link>
      </li>
    </ul>

    {children || 'Welcome'}
  </div>
);
