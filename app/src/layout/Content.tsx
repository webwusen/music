import React from 'react';
import Leftmenu from './Leftmenu';

const Content: React.FC = () => {
  return (
    <div className="content">
      <Leftmenu />
      <div className="view"></div>
    </div>
  );
};

export default Content;
