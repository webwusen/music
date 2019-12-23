import React from 'react';
import { Link } from 'react-router-dom';
const Leftmenu: React.FC = () => {
  return (
    <div className="menu">
      <div>
        <Link to="../pages/discover/Discover.tsx">
          <span>hello word</span>
        </Link>
      </div>
      <div>
        <Link to="./">
          <span>hello react</span>
        </Link>
      </div>
      <div>
        <Link to="./">
          <span>hello typescript</span>
        </Link>
      </div>
    </div>
  );
};

export default Leftmenu;
