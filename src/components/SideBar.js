import React from 'react';
import './SideBar.css';

const SideBar = (props) => {
  return (
    <aside className="sidebar">
      <h1>{props.title}</h1>
    </aside>
  );
};

export default SideBar;
