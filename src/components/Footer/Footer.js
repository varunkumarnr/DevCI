import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
export const Footer = () => {
  return (
    <div id='footer' className='footer'>
      <div className='footerTitle'>
        <h1>Follow Us</h1>
        <p>Stay updated about the latest updates of DevCI</p>
      </div>
      <div className='footerSocials'>
        <div className='sm'>
          <a href='https://twitter.com/varuncodes'>
            <FontAwesomeIcon icon={faTwitter} />
          </a>

          <p>Twitter</p>
        </div>
        <div className='sm'>
          <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <p>Youtube</p>
        </div>
        <div className='sm'>
          <a href='https://github.com/varunkumarnr'>
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <p>GitHub</p>
        </div>
        <div className='sm'>
          <a href='https://www.instagram.com/p/ByxLEsQnrzY/'>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <p>Instagram</p>
        </div>
        <div className='sm'>
          <a href='mailto:randomemail@fineloans.org'>
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <p>Email</p>
        </div>
      </div>
    </div>
  );
};
