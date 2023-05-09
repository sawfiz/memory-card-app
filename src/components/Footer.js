import React from 'react';
import { FaGithub } from 'react-icons/fa';
import '../styles/Footer.css'

function Footer() {
  return (
    <footer className='footer copyright'>
      <p>
        Copyright © 2023 sawfiz {' '}
        <a className='github' href="https://github.com/sawfiz" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
      </p>
    </footer>
  );
}

export default Footer;
