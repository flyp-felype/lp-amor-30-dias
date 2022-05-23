import styled from 'styled-components';

export const Container = styled.div``;

export const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  margin: 15px;
  font-size: 4em;
`;

export const CarouselDesktop = styled.div`
  @media (min-width: 1024px) {
    display: block;
  }
  @media (max-width: 1023px) {
    display: none;
  }
`;
export const CarouselMobile = styled.div`
  @media (min-width: 1024px) {
    display: none;
  }
  @media (max-width: 1023px) {
    display: block;
  }
`;

export const Circle = styled.div`
  display: flex;
  flex-directions: row;
`;

export const Pointer = styled.div`
  border-radius: 10px;
  border: 1px solid #fff;
  padding: 4px;
  margin-left: 5px;
  margin-rigth: 5px;
  background-color: ${(props) => (props.active ? '#fff' : 'transparent')};
`;
