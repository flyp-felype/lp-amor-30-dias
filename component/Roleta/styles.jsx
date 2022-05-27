import styled from 'styled-components';
import px2vw from '../../utils/px2vw';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  padding-top: 30px;
`;

export const Title = styled.h2`
  text-align: center;
  padding-right: 100px;
  color: #878787;
  margin: 0px;
  @media (min-width: 1024px) {
    font-size: ${px2vw(30)};
  }
  @media (max-width: 1023px) {
    font-size: ${px2vw(50)};
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
    width: 100%;
  }
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
