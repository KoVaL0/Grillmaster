import React from 'react';

import MenuSelectLang from '@components/MenuSelectLang';

const Header = ({ title }) => (
  <header className="bg-light d-flex justify-content-between mb-2">
    <p className="p-2">
      {title}
    </p>
    <MenuSelectLang />
  </header>
);

export default Header;
