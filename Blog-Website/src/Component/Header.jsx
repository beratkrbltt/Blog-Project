import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/style.css';

function Navbar() {
  return (
    <div>
      <ul className="navbar">
        <li>
          <img
            src="İmage/Berat Karabulut.png"
            alt="Profile Picture"
            className="profile-pic"
          />
        </li>
        <li><Link className="link" to="/">Anasayfa</Link></li>
        <li><Link className="link" to="/hakkimda">Hakkımda</Link></li>
        <li><Link className="link" to="/iletisim">İletişim</Link></li>
        <li><Link className="link" to="/oneri-yorumlar">Öneri ve Yorumlar</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;
