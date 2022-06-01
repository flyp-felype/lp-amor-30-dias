import styled from 'styled-components';
import px2vw from '../../utils/px2vw';

export const Container = styled.div`
  display: flex;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
  @media (max-width: 1023px) {
    flex-direction: column;
  }
  position: relative;
  padding-top: 30px;
  justify-content: center;
`;

export const Title = styled.h2`
  text-align: center;
  color: #878787;
  line-height: 1.2;
  margin: 0px;
  @media (min-width: 1024px) and (max-width: 1989px) {
    font-size: ${px2vw(30)};
    padding-right: ${px2vw(130)};
  }
  @media (min-width: 1900px) {
    padding-right: ${px2vw(0)};
  }
  @media (max-width: 1023px) {
    font-size: ${px2vw(80)};
  }
`;

export const Coluna = styled.div`
  @media (min-width: 1024px) {
    width: 60%;
  }
  @media (max-width: 1023px) {
    width: 100%;
  }
`;
export const Coluna2 = styled.div`
  @media (min-width: 1024px) {
    width: 40%;
  }
  @media (max-width: 1023px) {
    width: 80%;
  }
  align-self: center;
`;
export const Card = styled.div`
  width: 100%;
  background-color: #fff;
  border-radius: ${px2vw(15)};
  padding: ${px2vw(10)};
  -webkit-box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.34);
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.34);
`;

export const RotationContainer = styled.div`
  position: absolute;
  width: 100%;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(${(props) => props.startRotationDegrees}deg);
  &.started-spinning {
    animation: spin ${({startSpinningTime}) => startSpinningTime / 1000}s
        cubic-bezier(0.71, -0.29, 0.96, 0.9) 0s 1 normal forwards running,
      continueSpin 0.75s linear
        ${({startSpinningTime}) => startSpinningTime / 1000}s 1 normal forwards
        running,
      stopSpin ${({stopSpinningTime}) => stopSpinningTime / 1000}s
        cubic-bezier(0, 0, 0.35, 1.02)
        ${({startSpinningTime, continueSpinningTime}) =>
          (startSpinningTime + continueSpinningTime) / 1000}s
        1 normal forwards running;
  }
  @keyframes spin {
    from {
      transform: rotate(${(props) => props.startRotationDegrees}deg);
    }
    to {
      transform: rotate(${(props) => props.startRotationDegrees + 360}deg);
    }
  }
  @keyframes continueSpin {
    from {
      transform: rotate(${(props) => props.startRotationDegrees}deg);
    }
    to {
      transform: rotate(${(props) => props.startRotationDegrees + 360}deg);
    }
  }
  @keyframes stopSpin {
    from {
      transform: rotate(${(props) => props.startRotationDegrees}deg);
    }
    to {
      transform: rotate(${(props) => 1440 + props.finalRotationDegrees}deg);
    }
  }
`;

export const RoletaBig = styled.div`
  @media (max-width: 1023px) {
    display: none;
  }
  @media (min-width: 1024px) and (max-width: 1899px) {
    display: none;
  }

  @media (min-width: 1900px) {
    display: block;
  }
`;

export const RoletaSmall = styled.div`
  @media (max-width: 1023px) {
    display: block;
  }
  @media (min-width: 1024px) and (max-width: 1899px) {
    display: none;
  }

  @media (min-width: 1900px) {
    display: none;
  }
`;

export const RoletaNormal = styled.div`
  @media (max-width: 1023px) {
    display: none;
  }
  @media (min-width: 1024px) and (max-width: 1899px) {
    display: block;
  }

  @media (min-width: 1900px) {
    display: none;
  }
`;

export const FlagBig = styled.div`
  @media (max-width: 1023px) {
    display: none;
  }
  @media (min-width: 1024px) and (max-width: 1899px) {
    display: none;
  }

  @media (min-width: 1900px) {
    display: block;
  }
`;

export const FlagNormal = styled.div`
  @media (max-width: 1023px) {
    display: none;
  }
  @media (min-width: 1024px) and (max-width: 1899px) {
    display: block;
  }

  @media (min-width: 1900px) {
    display: none;
  }
`;
export const FlagSmall = styled.div`
  @media (max-width: 1023px) {
    display: block;
  }
  @media (min-width: 1024px) and (max-width: 1899px) {
    display: none;
  }

  @media (min-width: 1900px) {
    display: none;
  }
`;
