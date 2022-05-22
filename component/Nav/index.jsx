import React from 'react';
import Logo from '../Logo';
import Link from 'next/link';
import {ItemNenu} from './styles';

import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const menu = [
  {
    label: 'Escreva sua carta',
    link: '#',
  },
  {
    label: 'Ofertas Especiais',
    link: '#',
  },
];

const socialMedia = [
  {
    icon: faFacebook,
    link: '#',
  },
  {
    icon: faTwitter,
    link: '#',
  },
  {
    icon: faInstagram,
    link: '#',
  },
  {
    icon: faYoutube,
    link: '#',
  },
];
function Nav() {
  return (
    <nav>
      <Logo />
      <ul>
        {menu.map((item, index) => {
          return (
            <li key={index}>
              <Link href={item.link}>
                <ItemNenu>{item.label}</ItemNenu>
              </Link>
            </li>
          );
        })}
      </ul>
      <ul>
        {socialMedia.map((item, index) => {
          return (
            <li key={index}>
              <div className="circle">
                <FontAwesomeIcon icon={item.icon} color={'#FFCC00'} />
              </div>
            </li>
          );
        })}
      </ul>
      <style jsx>{`
        nav {
          max-width: 1080px;
          display: flex;
          align-items: center;
          flex-direction: row;
          justify-content: space-between;
        }
        nav ul {
          display: flex;
          flex-direction: row;
          list-style: none;
        }
        nav ul li {
          padding-left: 15px;
          padding-rigth: 15px;
          justify-content: space-between;
        }
        .circle {
          background-color: #dd1c61;
          border-radius: 50px;
          padding-left: 8px;
          padding-right: 8px;
          padding-bottom: 4px;
          padding-top: 4px;
        }
      `}</style>
    </nav>
  );
}

export default Nav;
