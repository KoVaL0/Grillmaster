import React from 'react';

import LanguageSelector from '@/components/controls/LanguageSelector';

const Header = ({ title }) => (
  <header className="bg-light d-flex justify-content-between mb-2">
    <p className="p-2">
      {title}
    </p>
    <LanguageSelector />
  </header>
);

export default Header;
