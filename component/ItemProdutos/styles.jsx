import styled from 'styled-components';

export const Container = styled.div`
  width: 247px;
  height: 480px;
  -webkit-box-shadow: 0px 10px 13px -7px #000000,
    5px 7px 22px 1px rgba(0, 0, 0, 0);
  box-shadow: 0px 10px 13px -7px #000000, 5px 7px 22px 1px rgba(0, 0, 0, 0);
  background-color: #fff;
  padding: 20px;
  margin-top: 10px;
  margin-bottom: 20px;
`;
export const Header = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const TagOff = styled.div`
  border-radius: 15px;
  padding-left: 5px;
  padding-right: 5px;
  width: 80px;
  background: #ffcb00;
  background: -moz-linear-gradient(left, #ffcb00 0%, #ffcb00 50%, #f5e437 100%);
  background: -webkit-linear-gradient(
    left,
    #ffcb00 0%,
    #ffcb00 50%,
    #f5e437 100%
  );
  background: linear-gradient(to right, #ffcb00 0%, #ffcb00 50%, #f5e437 100%);
`;

export const LabelTag = styled.span`
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  vertical-align: text-top;
`;

export const LabelTagFrete = styled.span`
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  vertical-align: text-top;
`;
export const ImageProduto = styled.div``;

export const TagFrete = styled.div`
  background-color: #7f11c8;
  border-radius: 15px;
  padding-top: 3px;
  padding-left: 10px;
  padding-right: 5px;
  width: 100px;
  position: absolute;
  margin-top: 150px;
  z-index: 99;
`;
export const BoxDescricao = styled.div`
  margin-top: 15px;
`;

export const HeaderDescricao = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Icon = styled.div`
  width: 15px;
  height: 15px;
  margin-right: 5px;
`;

export const Title = styled.h3`
font-weight: 300;
color; #7C8096;
font-size:15px
`;

export const Precos = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`;

export const PriceDiscount = styled.span`
  color: #646981;
  font-size: 13px;
`;
export const TracoDesconto = styled.span`
  text-decoration: line-through;
`;

export const PrecoDestaque = styled.span``;

export const PrecoGrande = styled.span`
  color: #7f11c8;
  font-size: 17px;
  font-weight: bold;
`;

export const ButtonAdd = styled.button`
  margin-top: 10px;
  background-color: #dd1c61;
  border: none;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    transform: scale(0.9);
  }
`;

export const TextButton = styled.span`
  color: #fff;
`;

export const IconBtn = styled.div`
  width: 13px;
  height: 15px;
  margin-right: 5px;
`;
