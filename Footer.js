import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="left-side">
        <ul>
          <li>Impressum</li>
          <li>Datenschutz</li>
          <li>Kontakt</li>
          <li>© 2022 infrarotmedien.de Alle Rechte vorbehalten.</li>
        </ul>
      </div>
      <div className="social-media">
        <p>Soziale Medien</p>
        <ul>
          <li><a href="https://telegram.org/">Telegram</a> |</li>
          <li><a href="https://gettr.com/">GETTR</a> |</li>
          <li><a href="https://vk.com/">VK</a> |</li><br />
          <li><a href="https://www.spotify.com/">Spotify</a></li>
        </ul>
      </div>
      <div className="video-platforms">
        <p>Videoplattformen</p>
        <ul>
          <li><a href="https://odysee.com/"> Odysee  </a>|</li>
          <li><a href="https://www.youtube.com/">YouTube</a></li>
        </ul>
      </div>
      <div className="right-side">
        <button className="donate-button">Spenden</button>
        <button className="up-arrow-button">
          <i class="fas fa-chevron-up"></i>
        </button>
      </div>
    </footer>
  );
}

export default Footer;
