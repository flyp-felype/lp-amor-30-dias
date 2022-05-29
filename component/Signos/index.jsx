import React, {useEffect, useState} from 'react';

import {
  Container,
  Header,
  Title,
  IconSigno,
  Traco,
  Corpo,
  Combina,
  SignoCombina,
  IconCombina,
  SignosCombina,
  TextSigno,
  ItemDescricao,
  Color,
} from './styles';
import Aquario from '../../public/images/signos/aquarius.png';
import Aries from '../../public/images/signos/aries.png';
import Cancer from '../../public/images/signos/cancer.png';
import Capricornio from '../../public/images/signos/capricornio.png';
import Escorpiao from '../../public/images/signos/escorpiao.png';
import Gemeos from '../../public/images/signos/gemeos.png';
import Leao from '../../public/images/signos/leao.png';
import Libra from '../../public/images/signos/libra.png';
import Peixes from '../../public/images/signos/peixes.png';
import Sagitario from '../../public/images/signos/sagitario.png';
import Touro from '../../public/images/signos/touro.png';
import Virgem from '../../public/images/signos/virgem.png';
import Image from 'next/image';

const itensSignos = [
  {
    id: 1,
    signo: 'Libra',
    icone: Libra,
    descricao:
      'Por ser um signo de ar, pensa bastante e não gosta de se sentir limitado.',
    descricao2: 'Gosta de harmonia, paz e ponderação.',
    descricao3: 'Geralmente os librianos encantam por sua elegância e carisma.',
    combina: [7, 8, 2],
  },
  {
    id: 2,
    signo: 'Escorpião',
    icone: Escorpiao,
    descricao:
      'Representa perfeitamente o elemento água, são profundos e emocionais.',
    descricao2: 'É misterioso, sedutor e intuitivo.',
    descricao3:
      'Não gosta de nada pela metade, ou tem algo por inteiro ou não tem.',
    combina: [1, 10, 6],
  },
  {
    id: 3,
    signo: 'Sagitário',
    icone: Sagitario,
    descricao: 'É impulsivo e espontâneo, além de muito otimista.',
    descricao2:
      'Como signo de terra, eles têm os pés no chão e são bastantes disciplinados.',
    descricao3:
      'O sagitariano é idealista e não gosta de se sentir aprisionado.',
    combina: [7, 11, 6],
  },
  {
    id: 4,
    signo: 'Capricórnio',
    icone: Capricornio,
    descricao: 'Tem a personalidade sábia e bastante discreta.',
    descricao2: 'Muito ligado ao intelecto graças ao elemento fogo do signo.',
    descricao3: 'Um de seus pontos fortes é o comprometimento.',
    combina: [8, 12, 10],
  },
  {
    id: 5,
    signo: 'Aquário',
    icone: Aquario,
    descricao: 'É criativo, inteligente e mentalmente dinâmico.',
    descricao2:
      'Como signo de ar, dá uma importância imensa as amizades, muito mais do que ao amor.',
    descricao3: 'Aquário é leve e rápido, tanto mental quanto fisicamente.',
    combina: [1, 9, 11],
  },
  {
    id: 6,
    signo: 'Peixes',
    icone: Peixes,
    descricao: 'É sensível, sonhador e romântico.',
    descricao2:
      'Como signo de água, pode ter dificuldade de equilibrar as emoções e sentimentos.',
    descricao3:
      'É comum que os piscianos se percam em suas ideias, distraindo-se facilmente.',
    combina: [8, 1, 2],
  },
  {
    id: 7,
    signo: 'Áries',
    icone: Aries,
    descricao: 'Marcado pela intensidade em suas relações.',
    descricao2: 'É objetivo, sociável e cheio de energia.',
    descricao3: 'Por ser um signo do elemento fogo, é ímpeto e corajoso.',
    combina: [11, 3, 9],
  },
  {
    id: 8,
    signo: 'Touro',
    icone: Touro,
    descricao:
      'Suas características refletem muito em seu elemento, que é terra. São rígidos e racionais.',
    descricao2:
      'São taxados de lerdos mas a verdade é que agem de forma metódica.',
    descricao3: 'É confiável, paciente e persistente.',
    combina: [10, 2, 6],
  },
  {
    id: 9,
    signo: 'Gêmeos',
    icone: Gemeos,
    descricao:
      'Regidos pelo elemento ar, são pessoas comunicativas, versáteis e sociáveis.',
    descricao2: 'Estão sempre querendo entender diversos assuntos.',
    descricao3:
      'Não são duas caras! A verdade é que sempre conseguem analisar os dois lados da moeda.',
    combina: [7, 1, 3],
  },
  {
    id: 10,
    signo: 'Câncer',
    icone: Cancer,
    descricao: 'Primeiro signo romântico do Zodíaco.',
    descricao2: 'É emotivo, sensível e possui um alto grau de percepção.',
    descricao3:
      'Como parte do elemento água, tende a ter grandes variações de sentimentos.',
    combina: [6, 4, 1],
  },
  {
    id: 11,
    signo: 'Leão',
    icone: Leao,
    descricao:
      'Signo digno do elemento fogo. É determinado, volátil e animado.',
    descricao2: 'É conhecido como o mais vaidoso do Zodíaco.',
    descricao3:
      'Por trás da personalidade mandona existe uma pessoa que gosta de atenção e validação.',
    combina: [7, 3, 5],
  },
  {
    id: 12,
    signo: 'Virgem',
    icone: Virgem,
    descricao: 'É companheiro e romântico nas relações.',
    descricao2:
      'Por ser um signo do elemento terra, gosta de estabilidade e segurança.',
    descricao3:
      'Possui o título de mais chato do Zodíaco devido o perfeccionismo e cuidado.',
    combina: [7, 3, 5],
  },
];
function Signos(signo = 1) {
  const [signoSelect, setSignoSelect] = useState();
  useEffect(() => {
    console.log('signo ', signo.signo);
    if (signo) {
      setSignoSelect(itensSignos.find((x) => x.id === signo.signo));
    }
  }, [signo]);
  return signoSelect ? (
    <Container>
      <Header>
        <IconSigno>
          <Image src={signoSelect.icone} layout="responsive" quality={100} />
        </IconSigno>

        <Title>{signoSelect.signo}</Title>
      </Header>
      <Traco />
      <Corpo>
        <Combina>Combina com</Combina>
        <SignosCombina>
          {signoSelect.combina.map((item, index) => {
            const itemSigno = itensSignos.find((x) => x.id === item);
            return (
              <SignoCombina key={index}>
                <IconCombina>
                  <Image src={itemSigno.icone} quality={100} />
                </IconCombina>
                <TextSigno>{itemSigno.signo}</TextSigno>
              </SignoCombina>
            );
          })}
        </SignosCombina>
      </Corpo>
      <Traco />
      <Corpo>
        <ItemDescricao>
          <Color>1.</Color> {signoSelect.descricao}
        </ItemDescricao>
        <ItemDescricao>
          <Color>2.</Color> {signoSelect.descricao2}
        </ItemDescricao>
        <ItemDescricao>
          <Color>3.</Color> {signoSelect.descricao3}
        </ItemDescricao>
      </Corpo>
    </Container>
  ) : null;
}

export default Signos;
