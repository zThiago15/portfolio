import SolarSystem from '../assets/imgs/projects/solar-system.png';
import TrybeWallet from '../assets/imgs/projects/trybe-wallet.png';
import StoreManager from '../assets/imgs/projects/store-manager.jpg';
import CarShop from '../assets/imgs/projects/dealership.jpg';
import BlogAPI from '../assets/imgs/projects/blog.jpg';
import IDrink from '../assets/imgs/projects/idrink.png';
import TriviaGame from '../assets/imgs/projects/TriviaGame.png';

import { FaCss3Alt, FaDocker, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress, SiJavascript, SiMysql, SiRedux, SiSequelize, SiSocketdotio, SiSwagger, SiTypescript } from "react-icons/si";
import { LuTestTube2 } from "react-icons/lu";


export const projectData = [
  {
    image: IDrink,
    title: 'IDrink (Front-end & Back-end)',
    content: 'Projeto Fullstack de e-commerce de bebidas, com área para clientes e vendedores.',
    tech: 'Tecnologias front-end: React.js, Redux, Axios. Testes: Jest & React Testing Library. Tecnologias back-end: Node.js, Express, JWT, Sequelize, Socket.io, Swagger. Testes: Mocha, Chai-Http & Sinon',
    techImgs: [<FaNodeJs className="icon" />, <SiExpress className="icon" />, <SiSequelize className="icon" />, <SiSocketdotio className="icon" />, <FaReact className="icon" />, <LuTestTube2 className="icon" />, <SiMysql className="icon" />, <SiSwagger className="icon" />, <FaDocker className="icon" />],
    repository: 'https://github.com/zThiago15/IDrink',
  },
  {
    image: TriviaGame,
    title: 'Jogo de Trivia (Front-end)',
    content: 'Jogo de Trivia, onde o usuário é apresentado com 5 questões com temporizador de 30 segundos para responder. Ao final é dado feedback de acordo com a quantidade de acertos e a opção para visualizar o Ranking dos participantes que obtiveram mais acertos.',
    techImgs: [<FaReact className="icon" />, <SiRedux className="icon" />, <FaCss3Alt className="icon" />, <LuTestTube2 className="icon" />    ],
    repository: 'https://github.com/zThiago15/IDrink',
  },
  {
    image: SolarSystem,
    title: 'Solar System(Front-end)',
    content: `Landpage de um modelo do sistema solar, mostrando seus planetas, 
    com tamanhos distintos, e informações sobre missões espaciais dos astronautas. Feito em React`,
    techImgs: [<FaReact className="icon" />, <FaHtml5 className="icon" />, <FaCss3Alt className="icon" />, <SiJavascript className="icon" />],
    repository: 'https://github.com/zThiago15/solar-system'
  },
  {
    image: TrybeWallet,
    title: 'Trybe Wallet(Front-end)',
    content: 'Aplicação para ter controle de seus gastos e despesas. Sendo possível criar, editar e removê-las. O saldo total aparecerá no canto da tela e pode-se converter a moeda, sendo utilizado uma API financeira para buscar o valor monetário atual de cada moeda. Feito em React.',
    techImgs: [<FaReact className="icon" />, <FaHtml5 className="icon" />, <FaCss3Alt className="icon" />, <SiRedux className="icon" />],
    repository: 'https://github.com/zThiago15/wallet-expenses'
  },
  {
    image: StoreManager,
    title: 'Store Manager(Back-end)',
    content: 'API Rest de produtos e vendas para gerenciamento de uma loja. Feito com Node.js, express e testes unitários',
    techImgs: [<FaNodeJs className="icon" />, <SiExpress className="icon" />, <SiMysql className="icon" />],
    repository: 'https://github.com/zThiago15/store-manager'
  }, 
  {
    image: CarShop,
    title: 'Car Shop(Back-end)',
    content: 'Gerenciamento de uma concessionária de carros e veículos',
    techImgs: [<FaNodeJs className="icon" />, <SiTypescript className="icon" />, <SiExpress className="icon" />, <LuTestTube2 className="icon" />, <SiMysql className="icon" />],
    repository: 'https://github.com/zThiago15/car-shop'
  },
  {
    image: BlogAPI,
    title: 'Blogs API(Back-end)',
    content: 'API Rest de gerenciamento de um blog',
    techImgs: [<FaNodeJs className="icon" />, <SiExpress className="icon" />, <SiSequelize className="icon" />, <FaDocker className="icon" />, <SiSwagger className="icon" />],
    repository: 'https://github.com/zThiago15/Blogs-API'
  }
];