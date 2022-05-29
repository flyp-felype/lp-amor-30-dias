import React, {useState} from 'react';
import {Wheel} from './Roulette';
import {makeStyles, Modal} from '@material-ui/core';
import {
  Container,
  Coluna,
  Title,
  Coluna2,
  RoletaNormal,
  RoletaBig,
  RoletaSmall,
} from './styles';
import Signos from '../Signos';
import {getRandomInt} from '../../utils/rolete';
const mockData = {
  1: '1 Libra',
  2: '2 Escorpião',
  3: '3 Sagitário',
  4: '4 Capricórnio',
  5: '5 Aquario',
  6: '6 Peixes',
  7: '7 Aries',
  8: '8 Touro!',
  9: '9 Gemêos',
  10: '10 Câncer',
  11: '11 Leão',
  12: '12 Virgem!',
};

const START_SPINNING_TIME = 800;
const CONTINUE_SPINNING_TIME = 400;
const STOP_SPINNING_TIME = 4000;
const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    position: 'absolute',
    width: '100%',
    border: '2px solid #000',
    fontSize: 30,
    textAlign: 'center',
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 4, 3),
  },
  wheelContainer: {},
  button: {
    margin: '3em auto',
    display: 'block',
    width: '10rem',
    cursor: 'pointer',
  },
}));

function Roleta() {
  const classes = useStyles();
  const [mustSpin, setMustSpin] = useState(false);
  const [couponNum, setCouponNum] = useState(1);
  const [signo, setSigno] = useState(1);

  const handleSpinClick = () => {
    let newCouponNum = getRandomInt(1, 12);
    if (newCouponNum === signo) {
      newCouponNum = getRandomInt(1, 12);
    }
    console.log(newCouponNum);
    setCouponNum(newCouponNum);
    setTimeout(() => {
      setSigno(newCouponNum);
    }, START_SPINNING_TIME + CONTINUE_SPINNING_TIME + STOP_SPINNING_TIME - 300);

    setMustSpin(true);
  };
  const handleOpen = () => {};
  return (
    <Container>
      <Coluna>
        <Title>
          Descubra os
          <br />
          signos que combinam
          <br />
          com o seu!
        </Title>
        <RoletaBig>
          <div
            style={{
              marginLeft: 40,
              width: '50em',
              height: '50em',
              marginTop: '20px',
              position: 'relative',
            }}
            onClick={handleSpinClick}>
            <Wheel
              mustStartSpinning={mustSpin}
              prizeNumber={couponNum}
              onStopSpinning={() => {
                setMustSpin(false);
                handleOpen();
              }}
            />
          </div>
        </RoletaBig>
        <RoletaNormal>
          <div
            style={{
              marginLeft: 40,
              width: '30em',
              height: '30em',
              marginTop: '20px',
              position: 'relative',
            }}
            onClick={handleSpinClick}>
            <Wheel
              mustStartSpinning={mustSpin}
              prizeNumber={couponNum}
              onStopSpinning={() => {
                setMustSpin(false);
                handleOpen();
              }}
            />
          </div>
        </RoletaNormal>
        <RoletaSmall>
          <div
            style={{
              marginLeft: 40,
              width: '20em',
              height: '20em',
              marginTop: '20px',
              position: 'relative',
            }}
            onClick={handleSpinClick}>
            <Wheel
              mustStartSpinning={mustSpin}
              prizeNumber={couponNum}
              onStopSpinning={() => {
                setMustSpin(false);
                handleOpen();
              }}
            />
          </div>
        </RoletaSmall>
      </Coluna>
      <Coluna2>
        <Signos signo={signo}></Signos>
      </Coluna2>
    </Container>
  );
}

export default Roleta;
