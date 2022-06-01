import React, {useEffect, useState, useRef} from 'react';

import {
  Container,
  Title,
  Traco,
  Carta,
  CartaInterior,
  TextArea,
  BgImage,
  Box,
  LabelData,
  SubTitle,
  TitleEx,
  ContainerClear,
  BoxFooter,
  GifFooter,
  CorpoRetorno,
  ButtonFinalizar,
  TextButtonFinalizar,
  ContainerButton,
  CheckBox,
  Formularios,
  CorpoForm,
  TitleForm,
  Quadrado,
  Input,
  Row,
  Box60,
  Box40,
  CorpoForm2,
  BottonCarta,
} from './styles';

import InputText from '../InputText';
import dayjs from 'dayjs';
import Image from 'next/image';
import DeuMatch from '../../public/images/DeuMatch2.gif';
import FooterZema from '../../public/images/imagezema.png';
import Cupons from '../Cupons';
import EnviarCarta from '../../public/images/enviar-carta.png';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import px2vw from '../../utils/px2vw';
require('dayjs/locale/pt-br');

const corpoCarta = `Escreva aqui sua carta...`;
function BoxCarta() {
  const [msgCart, setMsgCarta] = useState(corpoCarta);

  const [rNome, setRnome] = useState('');
  const [rEndereco, setRendereco] = useState('');
  const [rBairro, setRbairro] = useState('');
  const [rCep, setRcep] = useState('');
  const [rNumero, setRnumero] = useState('');
  const [rTelefone, setRtelefone] = useState('');
  const [rEmail, setRemail] = useState('');

  const [dNome, setDnome] = useState('');
  const [dEndereco, setDendereco] = useState('');
  const [dBairro, setDbairro] = useState('');
  const [dCep, setDcep] = useState('');
  const [dNumero, setDnumero] = useState('');
  const [dataAtual, setDataAtual] = useState('');

  const [remetente, setRemetente] = useState('');
  const [aceitoCarta, setAceitocarta] = useState(false);
  const [destinatario, setDestinatario] = useState('');

  const [cartaPreenchida, setcartaPreenchida] = useState(false);

  const [rAceito, setRaceito] = useState(false);
  const [dAceito, setDaceito] = useState(false);

  const [cartaFinalizada, setCartaFinalizada] = useState(false);

  const [disableDest, setDisableDest] = useState(true);
  const cadastro = useRef(null);
  const carta = useRef(null);
  useEffect(() => {
    setDataAtual(dayjs().locale('pt-br').format('DD [de] MMMM [de] YYYY'));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (rNome === '') {
      toast.error('Nome do remetente é obrigatório', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    if (rEndereco === '') {
      toast.error('Endereço do remetente é obrigatório', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    if (rTelefone === '') {
      toast.error('Telefone do remetente é obrigatório', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    if (rNumero === '') {
      toast.error('Número do remetente é obrigatório', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    if (rCep === '') {
      toast.error('CEP do remetente é obrigatório', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    if (rBairro === '') {
      toast.error('Bairro do remetente é obrigatório', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    if (rAceito === false) {
      toast.error('Obrigatório aceitar os termos de compromisso do Remetente', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    setDisableDest(false);
  };
  const handleSubmitDestinatario = (event) => {
    event.preventDefault();
    if (dNome === '') {
      toast.error('Nome do destinatário é obrigatório', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    if (dEndereco === '') {
      toast.error('Endereço do destinatário é obrigatório', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    if (dBairro === '') {
      toast.error('Bairro do destinatário é obrigatório', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    if (dNumero === '') {
      toast.error('Número do destinatário é obrigatório', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    if (dCep === '') {
      toast.error('CEP do destinatário é obrigatório', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    toast.success('Carta enviada com sucesso!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setRemetente('');
    setDestinatario('');
    setMsgCarta(corpoCarta);
    setRnome('');
    setRendereco('');
    setRbairro('');
    setRcep('');
    setRnumero('');
    setRemail('');
    setDnome('');
    setDendereco('');
    setDaceito(false);
    setRaceito(false);
    setDbairro('');
    setDcep('');
    setAceitocarta(false);
    setcartaPreenchida(false);
    setCartaFinalizada(true);

    carta.current.scrollIntoView({behavior: 'smooth'});
  };

  const handleCarta = (event) => {
    event.preventDefault();

    if (remetente === '') {
      toast.error('É preciso preencher o remetente', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    if (destinatario === '') {
      toast.error('É preciso preencher o destinatário', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    if (msgCart === corpoCarta) {
      toast.error('É preciso preencher a carta', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    if (aceitoCarta === false) {
      toast.error('É preciso aceitar os termos de compromisso', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    setcartaPreenchida(true);
    cadastro.current.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <Container id="carta">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
      <Title>
        Já sabe o que falar? Escreva essa mensagem com carinho hein, pois
        lembre-se: Aqui começa uma grande história!
      </Title>
      <Carta>
        <form onSubmit={handleCarta}>
          <p
            style={{
              fontFamily: 'Titillium Web, sans-serif;',
              textAlign: 'center',
              fontSize: px2vw(20),
              color: '#878787',
            }}>
            Escreva sua cartinha
          </p>
          <CartaInterior>
            <BgImage>
              <Box>
                <InputText
                  id={'remetente'}
                  label={'[remetente]'}
                  variant={'standard'}
                  value={remetente}
                  onChange={(e) => {
                    console.log(e);
                    setRemetente(e.target.value);
                  }}
                />
              </Box>
              <Box>
                <TextArea
                  name="textarea"
                  cols="33"
                  value={msgCart}
                  onChange={(value) =>
                    setMsgCarta(value.target.value)
                  }></TextArea>
              </Box>
              <Box
                style={{
                  float: 'right',
                  display: 'flex',
                  justifyContent: 'flex-end',
                  paddingRight: 20,
                }}>
                <InputText
                  id={'destinatário'}
                  label={'[destinatário]'}
                  variant={'standard'}
                  style={{width: 130}}
                  value={destinatario}
                  onChange={(e) => setDestinatario(e.target.value)}
                />
                <LabelData>,{dataAtual}</LabelData>
              </Box>
              {cartaFinalizada ? (
                <>
                  <Box style={{marginTop: 100}} ref={carta}>
                    <SubTitle>
                      Alguém especial deixou essas surpresinhas aqui
                      <br />
                      pra você... acesse o site e aproveite!
                    </SubTitle>
                  </Box>
                  <BoxFooter>
                    <GifFooter>
                      <Image
                        src={DeuMatch}
                        alt="Deu Match Zema"
                        layout="responsive"
                      />
                      <Image
                        src={FooterZema}
                        width={172}
                        style={{paddingLeft: 20}}
                      />
                    </GifFooter>
                    <Cupons />
                  </BoxFooter>
                </>
              ) : null}
            </BgImage>
          </CartaInterior>
          <ContainerButton>
            <CheckBox>
              <input
                type="checkbox"
                onChange={(e) => {
                  console.log(e.target.checked);
                  setAceitocarta(e.target.checked);
                }}
                checked={aceitoCarta}
                id="aceito"
                style={{marginRight: 10}}
              />
              <label htmlFor="aceito">
                Me responsabilizo que o conteúdo dessa cartinha não possui
                vínculos diretos com a Zema e que também não há nenhum tipo de
                mensagem ofensiva para o destinatário e/ou envolvidos na
                operação de envio.
              </label>
              <br />
              <br />
              Leia a nossa política de privacidade no site [
              <a
                href="https://www.zema.com/central-atendimento#1"
                target="_blank">
                https://www.zema.com/central-atendimento#1
              </a>
              ]
            </CheckBox>
            <ButtonFinalizar>
              <TextButtonFinalizar>Finalizar carta!</TextButtonFinalizar>
            </ButtonFinalizar>
          </ContainerButton>
        </form>
      </Carta>
      <ContainerClear ref={cadastro}>
        {cartaPreenchida ? (
          <>
            <Traco />
            <CorpoRetorno>
              <TitleEx>
                Agora é onde você confirma seus dados e do destinatário para que
                possamos enviar sua cartinha de forma correta e segura:
              </TitleEx>
              <Formularios>
                <CorpoForm>
                  <TitleForm>
                    <Quadrado />
                    Remetente
                  </TitleForm>
                  <form onSubmit={handleSubmit}>
                    <Input
                      placeholder="Nome"
                      onChange={(e) => setRnome(e.target.value)}
                      value={rNome}
                      type="text"
                    />
                    <Input
                      placeholder="Endereço"
                      onChange={(e) => setRendereco(e.target.value)}
                      value={rEndereco}
                      type="text"
                    />
                    <Row>
                      <Box60>
                        <Input
                          placeholder="Bairro"
                          onChange={(e) => setRbairro(e.target.value)}
                          value={rBairro}
                          type="text"
                        />
                      </Box60>
                      <Box40>
                        <Input
                          placeholder="CEP"
                          onChange={(e) => setRcep(e.target.value)}
                          value={rCep}
                          type="text"
                        />
                      </Box40>
                    </Row>
                    <Row>
                      <Box40>
                        <Input
                          placeholder="Número"
                          onChange={(e) => setRnumero(e.target.value)}
                          value={rNumero}
                          type="number"
                        />
                      </Box40>
                      <Box60>
                        <Input
                          placeholder="Telefone (DDD + Número)"
                          onChange={(e) => setRtelefone(e.target.value)}
                          value={rTelefone}
                          type="tel"
                        />
                      </Box60>
                    </Row>
                    <Input
                      placeholder="E-mail"
                      onChange={(e) => setRemail(e.target.value)}
                      value={rEmail}
                      type="email"
                    />
                    <input
                      type="checkbox"
                      id="aceitoR"
                      onChange={(e) => {
                        console.log(e.target.checked);
                        setRaceito(e.target.checked);
                      }}
                      checked={rAceito}
                      style={{marginRight: 10}}
                    />
                    <label htmlFor="aceitoR" style={{color: '#FFF'}}>
                      Ao cadastrar, eu concordo em disponibilizar meus dados
                      para fins comerciais e publicitários através dos canais de
                      divulgação da Zema.
                    </label>
                    <br />
                    <ButtonFinalizar>
                      <TextButtonFinalizar>Continuar</TextButtonFinalizar>
                    </ButtonFinalizar>
                  </form>
                </CorpoForm>
                <CorpoForm2>
                  <TitleForm>
                    <Quadrado />
                    Destinatário
                  </TitleForm>
                  <form onSubmit={handleSubmitDestinatario}>
                    <Input
                      placeholder="Nome"
                      onChange={(e) => setDnome(e.target.value)}
                      value={dNome}
                      type="text"
                      disabled={disableDest}
                    />
                    <Input
                      placeholder="Endereço"
                      onChange={(e) => setDendereco(e.target.value)}
                      value={dEndereco}
                      type="text"
                      disabled={disableDest}
                    />
                    <Row>
                      <Box60>
                        <Input
                          placeholder="Bairro"
                          onChange={(e) => setDbairro(e.target.value)}
                          value={dBairro}
                          type="text"
                          disabled={disableDest}
                        />
                      </Box60>
                      <Box40>
                        <Input
                          placeholder="Número"
                          onChange={(e) => setDnumero(e.target.value)}
                          value={dNumero}
                          type="number"
                          disabled={disableDest}
                        />
                      </Box40>
                    </Row>

                    <Input
                      placeholder="CEP"
                      onChange={(e) => setDcep(e.target.value)}
                      value={dCep}
                      type="string"
                      disabled={disableDest}
                    />
                    <input
                      type="checkbox"
                      id="aceitoD"
                      onChange={(e) => {
                        console.log(e.target.checked);
                        setDaceito(e.target.checked);
                      }}
                      checked={dAceito}
                      disabled={disableDest}
                      style={{marginRight: 10}}
                    />
                    <label htmlFor="aceitoD" style={{color: '#FFF'}}>
                      Estes dados não serão usados para fins comerciais e/ou
                      publicitários.
                    </label>
                    <br />
                    <ButtonFinalizar disabled={disableDest}>
                      <TextButtonFinalizar>
                        Confrmar e enviar
                      </TextButtonFinalizar>
                    </ButtonFinalizar>
                  </form>
                </CorpoForm2>
                <BottonCarta>
                  <Image src={EnviarCarta} layout={'responsive'} />
                </BottonCarta>
              </Formularios>
            </CorpoRetorno>
          </>
        ) : null}
      </ContainerClear>
    </Container>
  );
}

export default BoxCarta;
