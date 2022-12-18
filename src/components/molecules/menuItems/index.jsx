import React from 'react';
import NAVIGATION_MENU_ITEMS from '../../../constants/navigation';
import { MenuItem } from '../../atoms';

const MenuItems = () => {
  const [isActive, setIsActive] = React.useState('Home');
  const handleActiveLink = (label) => setIsActive(label);

  return (
    <div className="flex-1 flex flex-row justify-end gap-x-10 px-16">
      {NAVIGATION_MENU_ITEMS.map((menuItem, key) => (
        <MenuItem
          {...menuItem}
          key={key}
          active={isActive}
          onClick={() => handleActiveLink(menuItem.label)}
        />
      ))}
    </div>
  );
};

export default MenuItems;
