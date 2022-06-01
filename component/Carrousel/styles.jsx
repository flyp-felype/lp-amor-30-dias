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
  @media (min-width: 1024px) and (max-width: 1899px) {
    display: block;
    margin-top: 400px;
  }
  @media (max-width: 1023px) {
    display: none;
  }
  @media (min-width: 1900px) {
    margin-top: 500px;
  }
`;

export const ItemImage = styled.div`
  text-align: center;
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
`;

export const CarouselMobile = styled.div`
  margin-top: 280px;
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
