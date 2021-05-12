import React, { useState } from 'react';
import ButtonSelectLang from '@components/ButtonSelectLang';

const Header = ({ title }) => {
  const [show, setShow] = useState(false);

  return (
    <header className="bg-light d-flex justify-content-between mb-2">
      <p className="p-2">
        {title}
      </p>
      <ButtonSelectLang show={show} setShow={setShow} />
    </header>
  );
};

export default Header;
