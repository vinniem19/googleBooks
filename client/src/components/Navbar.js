import React from 'react';

class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <nav>
    <div className="nav-wrapper">
      <a href="/" className="brand-logo left">Google Books</a>
      <ul id="nav-mobile" className="left hide-on-med-and-down">
        <li><a href="../pages/Search">Search</a></li>
        <li><a href="../pages/Saved">Saved</a></li>
      </ul>
    </div>
  </nav>
            </div>
        );


    }
}

export default Navbar;