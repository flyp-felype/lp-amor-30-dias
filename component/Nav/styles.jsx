import styled from 'styled-components';
import px2vw from '../../utils/px2vw';
export const ItemNenu = styled.a`
  color: #fff !important;
  cursor: pointer;
  font-family: 'Titillium Web', sans-serif;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;

export const Menu = styled.nav`
  margin-top: ${px2vw(20)};
  @media (min-width: 1024px) {
    flex-wrap: nowrap;
    width: ${px2vw(1024)};
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
  @media only screen and (max-width: 1023px) {
    justify-content: space-between;
  }
  @media only screen and (min-width: 1024px) {
    justify-content: space-between;
  }
`;

export const Items = styled.li`
  padding: 0;
`;

export const ItemsLink = styled.li`
  padding-top: ${px2vw(10)};

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
  border-radius: 50px;
  padding-left: 8px;
  padding-right: 8px;
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
  padding-top: ${px2vw(15)};
  padding-left: ${px2vw(15)};
  flex-wrap: nowrap;
  @media (min-width: 1024px) {
    display: none;
  }
  @media (max-width: 1023px) {
    display: block;
  }
`;

export const LogoDiv = styled.div`
  @media only screen and (min-width: 1024px) {
    width: ${px2vw(250)};
  }

  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    width: ${px2vw(500)};
  }
  @media only screen and (max-width: 767px) {
    width: ${px2vw(700)};
  }
`;
768, 1023;
