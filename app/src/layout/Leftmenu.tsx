import React from 'react';
import { Link } from 'react-router-dom';

const Leftmenu: React.FC = () => (
  <div className="menu">
    <div>
      <Link to="/discover">
        <span>hello discover</span>
      </Link>
    </div>
    <div>
      <Link to="/fm">
        <span>hello fm</span>
      </Link>
    </div>
  </div>
);

export default Leftmenu;
