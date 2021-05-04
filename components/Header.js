import React from 'react';

const Header = ({title}) => {
  return (
    <header className="bg-light">
      <p className='p-2'>
        {title}
      </p>
    </header>
  );
};

export default Header;