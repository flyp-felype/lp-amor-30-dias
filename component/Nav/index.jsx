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
    link: '#',
  },
  {
    label: 'Ofertas Especiais',
    link: '#',
  },
];
const menuMobile = [
  {
    label: 'Escreva sua carta',
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
                  <Link href={item.link}>
                    <ItemNenu>
                      <Circle>
                        <FontAwesomeIcon icon={item.icon} color={'#FFCC00'} />
                      </Circle>
                    </ItemNenu>
                  </Link>
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
