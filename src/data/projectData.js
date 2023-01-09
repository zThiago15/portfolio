import SolarSystem from '../assets/imgs/projects/solar-system.png';
import TrybeWallet from '../assets/imgs/projects/trybe-wallet.png';
import StoreManager from '../assets/imgs/projects/store-manager.jpg';
import CarShop from '../assets/imgs/projects/dealership.jpg';
import BlogAPI from '../assets/imgs/projects/blog.jpg';

export const projectData = [
  {
    image: SolarSystem,
    title: 'Solar System',
    content: `Landpage de um modelo do sistema solar, mostrando seus planetas, 
    com tamanhos distintos, e informações sobre missões espaciais dos astronautas. Feito em React`,
    repository: 'https://github.com/zThiago15/solar-system'
  },
  {
    image: TrybeWallet,
    title: 'Trybe Wallet',
    content: 'Aplicação para ter controle de seus gastos e despesas. Sendo possível criar, editar e removê-las. O saldo total aparecerá no canto da tela e pode-se converter a moeda, sendo utilizado uma API financeira para buscar o valor monetário atual de cada moeda. Feito em React.',
    repository: 'https://github.com/zThiago15/wallet-expenses'
  },
  {
    image: StoreManager,
    title: 'Store Manager',
    content: 'API Rest de produtos e vendas para gerenciamento de uma loja. Feito com Node.js, express e testes unitários',
    repository: 'https://github.com/zThiago15/store-manager'
  }, 
  {
    image: CarShop,
    title: 'Car Shop',
    content: 'Gerenciamento de uma concessionária de carros e veículos',
    repository: 'https://github.com/zThiago15/car-shop'
  },
  {
    image: BlogAPI,
    title: 'Blogs API',
    content: 'API Rest de gerenciamento de um blog',
    repository: 'https://github.com/zThiago15/Blogs-API'
  }
];