import React from 'react';
import Logo from '../Logo';
import Link from 'next/link';
import {
  ItemNenu,
  Menu,
  ListMenu,
  ItemMenu,
  Circle,
  Social,
  Items,
  ItemsLink,
  ItemsLinkMobile,
  LogoDiv,
} from './styles';

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
    link: '#carta',
  },
  {
    label: 'Ofertas Especiais',
    link: '#produtos',
  },
];
const menuMobile = [
  {
    label: 'Escreva sua carta',
    link: '#carta',
  },
];
const socialMedia = [
  {
    icon: faFacebook,
    link: 'https://www.facebook.com/zemapravc',
  },

  {
    icon: faInstagram,
    link: 'https://www.instagram.com/zemapravc/',
  },
  {
    icon: faYoutube,
    link: 'https://www.youtube.com/c/ZemaCanal',
  },
];
function Nav() {
  return (
    <Menu>
      <ListMenu>
        <Items>
          <LogoDiv>
            <Logo />
          </LogoDiv>
        </Items>

        {menu.map((item, index) => {
          return (
            <ItemsLink key={index} className="itemLink">
              <Link href={item.link}>
                <ItemNenu>{item.label}</ItemNenu>
              </Link>
            </ItemsLink>
          );
        })}
        {menuMobile.map((item, index) => {
          return (
            <ItemsLinkMobile key={index} className="itemLink">
              <Link href={item.link}>
                <ItemNenu>{item.label}</ItemNenu>
              </Link>
            </ItemsLinkMobile>
          );
        })}

        <Items>
          <Social>
            {socialMedia.map((item, index) => {
              return (
                <ItemsLink key={index} className="itemLink">
                  <a href={item.link} target="_blank">
                    <ItemNenu>
                      <Circle>
                        <FontAwesomeIcon icon={item.icon} color={'#FFCC00'} />
                      </Circle>
                    </ItemNenu>
                  </a>
                </ItemsLink>
              );
            })}
          </Social>
        </Items>
      </ListMenu>
    </Menu>
  );
}

export default Nav;
