import * as React from 'react';

import './Header.css';

const Header = ({
  text,
  overview,
  logout,
}) => (
  <div className="row">
    <div className="col-sm-8 offset-sm-2 d-flex justify-content-between headerCustom ">
      <h3>{text}</h3>
      {overview &&
      <div className="logout" onClick={logout} >Logout</div>
      }
    </div>
  </div>
);

export default Header;

