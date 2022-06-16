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
  Strong,
  BottonCarta,
  TitleMobile,
  Options,
  Radio,
  LabelRadio,
  ItemRadio,
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
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDownload} from '@fortawesome/free-solid-svg-icons';
import ZemaINstagram from '../../public/images/zemaInstagram.png';
import axios from 'axios';
require('dayjs/locale/pt-br');

const corpoCarta = `[Escreva o nome do destinatário]\n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n 
[Escreva o nome do remetente], ${dayjs()
  .locale('pt-br')
  .format('DD [de] MMMM [de] YYYY')}`;

const msgCrush = `[Escreva o nome do destinatário] \n
Oii, razão dos meus sorrisos bobos e pensamentos mais bobos, rs.o] \n
Resolvi subir o nível das indiretas e ir direto para fase da conquista. Essa cartinha serve como uma forma de demonstrar aquilo que sinto por você de forma mais direta e nada clichê. Aliás, como ser clichê quando falo de você?o] \n
Andei te observando e acho que você tem todos os requisitos para ser o amor da minha vida, hein!o] \n
Quando penso em nós dois, sinto um misto de sensações, e para falar a verdade... só você me faz vivenciar isso. De tudo o que eu pensava que fosse acontecer comigo, certamente encontrar alguém como você não estava nos meus planos.o] \n
Como explicar que com você tudo é mais colorido e divertido? Não sei dizer, somente sinto. Também não posso afirmar se é amor ou paixão, só sei que é bom demaaaais sentir isso!o] \n
Sem mais promessas e juras de amor, só tenho mais uma coisa a dizer: Ainda não sei tudo sobre você, mas tenho uma vida inteira para saber.o] \n
PS: saudades do que a gente não viveu ainda... \n \n
[Escreva o nome do remetente], ${dayjs()
  .locale('pt-br')
  .format('DD [de] MMMM [de] YYYY')}`;

const msgNamoro = `[Escreva o nome do destinatário] \n
Ei, você sabia que meu ponto fraco tem nome, endereço e um sorriso lindo? Agora você entende o porquê dessa cartinha ter chegado para você! \n
Costumam dizer que o amor deixa a gente meio bobo e incerto das coisas. Mas de uma coisa tenho certeza, escolhi a pessoa certa para amar. \n
Toda vez que eu te vejo é como se fosse a primeira vez. O sentimento, o frio na barriga... ahhh, como é bom ter isso comigo toda vez em que te olho! \n
Quando nossos caminhos se cruzaram eu não tinha noção do efeito que é ter você na minha vida. Os dias ao seu lado passam rapidamente e tudo o que fazemos juntos me dá mais vontade de estar contigo. Encontrei em você uma companhia diferente de todas as outras: alguém que me entende e que me ama do jeito que eu sou. E não podemos negar, a nossa conexão é de outro mundo! \n
Que nosso amor seja eterno enquanto dure toda eternidade...eu te amo muito! \n \n
[Escreva o nome do remetente], ${dayjs()
  .locale('pt-br')
  .format('DD [de] MMMM [de] YYYY')}`;

const msgAmizade = `[Escreva o nome do destinatário] \n
Ei!\n
Sabe aquele tipo de pessoa que topa tudo? Desde tocar a campainha da casa de alguém e sair correndo, até a assaltar um um banco as 3:00H da manhã? Posso dizer que encontrei essa pessoa em você!\n
É engraçado parar pra pensar como tem pessoas que encaixam de forma exata na vida da gente! Nossa ligação é assim: conseguimos entender tudo o que outro sente com um simples olhar! Essa amizade me traz as melhores memórias, aquelas que quando estivermos bem velhinhos, vamos contar para os nossos netos as melhooores vivências (exceto algumas, se é que me entende) hahaha - Cada diferença, cada piada, cada semelhança, cada conselho, cada desentendimento, uma amizade de se guardar para toda vida!\n
Obrigada (o) por fazer parte de vários dos meus melhores momentos que, com certeza, não seriam o mesmo sem você!\n \n
[Escreva o nome do remetente], ${dayjs()
  .locale('pt-br')
  .format('DD [de] MMMM [de] YYYY')}`;

function BoxCarta() {
  const [msgCart, setMsgCarta] = useState(corpoCarta);

  const [rNome, setRnome] = useState('');
  const [rCidade, setRcidade] = useState('');
  const [rEndereco, setRendereco] = useState('');
  const [rBairro, setRbairro] = useState('');
  const [rCep, setRcep] = useState('');
  const [rNumero, setRnumero] = useState('');
  const [rTelefone, setRtelefone] = useState('');
  const [rEmail, setRemail] = useState('');

  const [dNome, setDnome] = useState('');
  const [dCidade, setDcidade] = useState('');
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

  const [crush, setCrush] = useState(false);
  const [namoro, setNamoro] = useState(false);
  const [amizade, setAmizade] = useState(false);
  const [disableDest, setDisableDest] = useState(true);
  const cadastro = useRef(null);
  const carta = useRef(null);

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

    const data = {
      remetente: {
        nome: rNome,
        email: rEmail,
        endereco: {
          rua: rEndereco,
          bairro: rBairro,
          cidade: rCidade,
          cep: rCep,
        },
        telefone: rTelefone,
        opt_in: true,
      },
      destinatario: {
        nome: dNome,
        endereco: {
          rua: dEndereco,
          bairro: dBairro,
          cidade: dCidade,
          cep: dCep,
        },
      },
      carta: {
        corpo: msgCart,
      },
    };
    axios
      .post(process.env.NEXT_PUBLIC__URL + 'correioElegante', data, {
        headers: {
          'Content-type': 'Application/json',
        },
      })
      .then((response) => {
        console.log(response);
        if (response.data.success === true) {
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
        } else {
          toast.error(response.data.mensagem, {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      })
      .catch((error) => {
        console.log(error.response);
        if (error.response.data.mensagem) {
          toast.error(error.response.data.mensagem, {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          toast.error('Erro ao enviar a carta! Favor tentar novamente', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      });
  };

  const handleCarta = (event) => {
    event.preventDefault();

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
      <TitleMobile>
        Já sabe o que falar? Escreva essa mensagem com carinho hein, pois
        lembre-se: Aqui começa uma grande história!
      </TitleMobile>
      <Carta>
        <form onSubmit={handleCarta}>
          <p
            style={{
              fontFamily: 'Titillium Web, sans-serif;',
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: px2vw(30),
              color: '#52018A',
            }}>
            ESCREVA SUA CARTINHA
          </p>
          <Options>
            <ItemRadio>
              <Radio
                type="radio"
                value={crush}
                checked={crush}
                onChange={() => {
                  setCrush(true);
                  setNamoro(false);
                  setAmizade(false);
                  setMsgCarta(msgCrush);
                }}
              />
              <LabelRadio>CRUSH</LabelRadio>
            </ItemRadio>
            <ItemRadio>
              <Radio
                type="radio"
                value={namoro}
                checked={namoro}
                onChange={() => {
                  setCrush(false);
                  setNamoro(true);
                  setAmizade(false);
                  setMsgCarta(msgAmizade);
                }}
              />
              <LabelRadio>NAMORO</LabelRadio>
            </ItemRadio>
            <ItemRadio>
              <Radio
                type="radio"
                value={amizade}
                checked={amizade}
                onChange={() => {
                  setCrush(false);
                  setNamoro(false);
                  setAmizade(true);
                  setMsgCarta(msgNamoro);
                }}
              />
              <LabelRadio>AMIZADE</LabelRadio>
            </ItemRadio>
          </Options>
          <CartaInterior>
            <BgImage>
              {/* <Box>
                <InputText
                  id={'destinatario'}
                  label={'[Escreva o nome do destinatário]'}
                  variant={'standard'}
                  value={destinatario}
                  onChange={(e) => {
                    console.log(e);
                    setDestinatario(e.target.value);
                  }}
                />
              </Box> */}
              <Box>
                <TextArea
                  name="textarea"
                  cols="33"
                  value={msgCart}
                  onChange={(value) => setMsgCarta(value.target.value)}>
                  {msgCart}
                </TextArea>
              </Box>

              <div ref={carta}>
                {cartaFinalizada ? (
                  <>
                    <Box style={{marginTop: 100}}>
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
                    <div
                      style={{
                        width: '100%',
                        marginTop: 50,
                        display: 'flex',
                        justifyContent: 'center',
                      }}>
                      <div
                        style={{
                          textAlign: 'center',
                          marginRight: 20,
                          fontFamily: 'Patrick Hand, cursive',
                          fontSize: 20,
                          color: '#222222',
                          float: 'left',
                        }}>
                        Sua cartinha chegou e você amou? Vai ser bom demais se
                        você
                        <br />
                        postar uma foto com ela e marcar a gente:
                      </div>
                      <div style={{height: 32, marginTop: 10}}>
                        <Image
                          src={ZemaINstagram}
                          alt="instagram Zema"
                          width={140}
                          height={32}
                        />
                      </div>
                    </div>
                  </>
                ) : null}
              </div>
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
              <br /> <br />
              Leia nossa{' '}
              <a
                href="https://www.zema.com/central-atendimento#1"
                target="_blank"
                style={{
                  fontWeight: 'bold',
                  color: '#DF1179',
                  textDecoration: 'none',
                }}>
                Política de Privacidade{' '}
                <FontAwesomeIcon icon={faDownload} color={'#52018A'} />
              </a>
            </CheckBox>
            <br />

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
                      placeholder="Cidade"
                      onChange={(e) => setRcidade(e.target.value)}
                      value={rCidade}
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
                      placeholder="Cidade"
                      onChange={(e) => setDcidade(e.target.value)}
                      value={dCidade}
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
                        Confirmar e enviar
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
