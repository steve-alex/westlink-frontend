import React, { useState } from "react";
import { Menu, Icon } from 'semantic-ui-react';
import './components.scss'

export const NavigationMenu = ({ history }) => {
  const [activeItem, setActiveItem] = useState("/home");

  const handleClick = route => {
    setActiveItem(route);
    history.push(route);
  };

  return (
    <div className="menuContainer">
      <Menu icon="labeled" className="menu">
        <Menu.Item
          name="Home"
          active={activeItem === "/home"}
          onClick={() => handleClick("/home")}
        >
          <Icon name="home" />
        </Menu.Item>
        <Menu.Item
          name="Bookings"
          active={activeItem === "/booking"}
          onClick={() => handleClick("/bookings")}
        >
          <Icon name="calendar" />
        </Menu.Item>
        <Menu.Item
          name="Home"
          active={activeItem === "/profile"}
          onClick={() => handleClick("/profile")}
        >
          <Icon name="user" />
        </Menu.Item>
        <Menu.Item
          name="Home"
          active={activeItem === "/information"}
          onClick={() => handleClick("/information")}
        >
          <Icon name="info" />
        </Menu.Item>
      </Menu>
    </div>
  );
};
