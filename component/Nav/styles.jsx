import styled from 'styled-components';
import px2vw from '../../utils/px2vw';
export const ItemNenu = styled.a`
  color: #ffcc00 !important;
  cursor: pointer;
  font-family: 'Titillium Web', sans-serif;
  font-weight: bold;
  @media (min-width: 1024px) {
    font-size: ${px2vw(18)};
  }
  @media (max-width: 1023px) {
    font-size: ${px2vw(48)};
  }
`;

export const Menu = styled.nav`
  margin-top: ${px2vw(40)};
  @media (min-width: 1024px) {
    flex-wrap: nowrap;
    justify-content: center;
    width: ${px2vw(900)};
  }
`;

export const ListMenu = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  flex-wrap: nowrap;
  list-style-type: none;
  margin: 0;
  padding: 0;
  justify-content: center;
`;

export const Items = styled.li`
  padding: 0;
`;

export const ItemsLink = styled.li`
  flex-wrap: nowrap;
  @media only screen and (max-width: 1024px) {
    display: none;
  }
  @media only screen and (min-width: 1024px) {
    padding-left: ${px2vw(15)};
  }
`;

export const Circle = styled.div`
  background-color: #dd1c61;
  border-radius: ${px2vw(50)};
  padding-left: ${px2vw(8)};
  padding-right: ${px2vw(8)};
  padding-bottom: 4px;
  padding-top: 4px;
`;

export const Social = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  justify-content: space-between;
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const ItemsLinkMobile = styled.li`
  flex-wrap: nowrap;
  @media (max-width: 1023px) {
    padding-top: 3px;
  }
  @media (min-width: 1024px) {
    padding-top: 8px;
  }
  padding-left: 20px;
  padding-right: 20px;
  text-align: center;
  vertical-align: middle;
  color: #ffcc00;
  background-color: #dd1c61;
  border-radius: 10px;
  display: block;
  margin-left: ${px2vw(50)};
  &:hover {
    background-color: #fa3b7f;
    cursor: pointer;
  }
`;

export const LogoDiv = styled.div`
  @media only screen and (min-width: 1024px) {
    width: ${px2vw(250)};
  }

  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    width: ${px2vw(500)};
    padding-left: 20px;
  }
  @media only screen and (max-width: 767px) {
    width: ${px2vw(600)};
    padding-left: 20px;
  }
`;
768, 1023;
