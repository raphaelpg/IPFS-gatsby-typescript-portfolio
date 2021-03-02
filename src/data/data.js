//RESUME URL
export const resumeUrl = "https://raw.githubusercontent.com/raphaelpg/resume/master/Raphael_Pinto_Full_Stack_JS.pdf"

// LOGO DATA
export const stackLogos = {
  aave: ['aave.svg', 'https://aave.com/'],
  aws: ['aws.jpeg', 'https://aws.amazon.com/'],
  css: ['css.svg', 'https://developer.mozilla.org/en-US/docs/Web/CSS'],
  emailjs: ['emailjs.jpeg', 'https://www.emailjs.com/'],
  ethereum: ['ethereum.jpeg', 'https://ethereum.org/en/'],
  express: ['express.svg', 'http://expressjs.com/'],
  fleek: ['fleek.jpeg', 'https://fleek.co/ipfs-gateway/'],
  ganache: ['ganache.jpeg', 'https://www.trufflesuite.com/ganache'],
  gatsby: ['gatsby.jpeg', 'https://www.gatsbyjs.com/docs/'],
  github: ['github.jpeg', 'https://github.com/raphaelpg'],
  googleplaces: ['googleplaces.jpeg', 'https://developers.google.com/places/web-service/overview'],
  heroku: ['heroku.jpeg', 'https://www.heroku.com/'],
  highcharts: ['highcharts.jpeg', 'https://www.highcharts.com/'],
  html: ['html.svg', 'https://developer.mozilla.org/en-US/docs/Web/HTML'],
  ionos: ['ionos.svg', 'https://www.ionos.com/'],
  ipfs: ['ipfs.jpeg', 'https://ipfs.io/'],
  javascript: ['javascript.svg', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'],
  jquery: ['jquery.svg', 'https://api.jquery.com/'],
  linkedin: ['linkedin.jpeg', 'https://www.linkedin.com/in/raphael-pinto-gregorio-660b2579/'],
  mongo: ['mongo.svg', 'https://www.mongodb.com/2'],
  nginx: ['nginx.svg', 'https://nginx.org/en/docs/'],
  node: ['node.svg', 'https://nodejs.org/en/'],
  php: ['php.svg', 'https://www.php.net/'],
  pm2: ['pm2.jpeg', 'https://pm2.keymetrics.io/docs/usage/pm2-doc-single-page/'],
  react: ['react.jpeg', 'https://reactjs.org/docs/getting-started.html'],
  sass: ['sass.svg', 'https://sass-lang.com/documentation'],
  solidity: ['solidity.jpeg', 'https://docs.soliditylang.org/en/latest/'],
  sql: ['sql.jpeg', 'https://www.w3schools.com/sql/'],
  superfluid: ['superfluid.jpeg', 'https://www.superfluid.finance/'],
  truffle: ['truffle.svg', 'https://www.trufflesuite.com/docs/truffle/overview'],
  web3: ['web3.jpeg', 'https://web3js.readthedocs.io/']
};

// PROJECTS DATA
export const projectsData = [
  {
    id: '10',
    img: 'irrigate-prod.jpeg',
    title: 'Irrigate-app front end',
    description: [
      'Front end of the production version of Irrigate, the platform to gather all NGO\'s and associations accross the world allowing users to send donations from anywhere to everywhere using DAI currency.',
      'The client is a static website made with Gatsby and deployed on IPFS through Fleek, desktop only for the moment.',
      'It is currently work-in-progress.',
      'Solo project.',
    ],
    url: 'https://autumn-queen-5530.on.fleek.co/',
    repo: 'https://github.com/raphaelpg/irrigate-prod-client',
    stack: [
      'gatsby',
      'react',
      'sass',
      'ipfs',
      'fleek',
    ]
  },
  {
    id: '9',
    img: 'irrigate-prod.jpeg',
    title: 'Irrigate-app back end',
    description: [
      'Back end of the production version of Irrigate, the platform to gather all NGO\'s and associations accross the world allowing users to send donations from anywhere to everywhere using DAI currency.',
      'The server is hosted on Ionos 1&1 and serves data as an API from a MongoDb Atlas database.',
      'Current status is work in progress.',
      'Solo project.',
    ],
    repo: 'https://github.com/raphaelpg/irrigate-prod-server',
    stack: [
      'node',
      'nginx',
      'pm2',
      'ionos',
      'mongo',
    ]
  },
  {
    id: '8',
    img: 'ipfs-portfolio.jpeg',
    title: 'IPFS-Portfolio',
    description: [
      'My portfolio made with Gatsby and hosted on IPFS.',
      'Deployment has been made with Fleek.',
      'Solo project.',
      '',
    ],
    url: 'https://divine-dawn-0363.on.fleek.co/',
    repo: 'https://github.com/raphaelpg/IPFS-Gatsby-portfolio',
    stack: [
      'gatsby',
      'react',
      'sass',
      'ipfs',
      'fleek',
    ]
  },
  {
    id: '7',
    img: 'IrrigateV2_light.jpeg',
    title: 'Irrigate-x-Superfluid',
    description: [
      'Second version of Irrigate platform, this time integrating Superfluid protocol allowing users to subscribe monthly donations in DAI (Constant Flow Agreement).',
      'Also using Superfluid Instant Distribution Agreement to simultaneously distribute funds to all the associations at the end of the month.',
      'Deployed on Goerli testnet and hosted on Heroku.',
      'Solo project.',
    ],
    url: 'https://irrigate-v2.herokuapp.com/',
    repo: 'https://github.com/raphaelpg/irrigateV2-x-Superfluid',
    stack: [
      'react',
      'node',
      'express',
      'mongo',
      'ethereum',
      'web3',
      'superfluid',
      'heroku',
    ]
  },
  {
    id: '6',
    img: 'irrigate-screenshot.jpeg',
    title: 'Irrigate-x-Aave Prototype',
    description: [
      'Hackathon POC: A platform to gather all NGO\'s and associations accross the world allowing users to send donations from anywhere to everywhere using DAI currency.',
      'It integrates Aave Lending Pool protocol allowing donations to be staked and generate interests to cover the transactions and maintenance costs.',
      'Solo project hosted on Heroku and deployed on Ropsten testnet.',
      '',
    ],
    url: 'https://irrigateheroku.herokuapp.com/',
    repo: 'https://github.com/raphaelpg/irrigate-x-Aave',
    stack: [
      'react',
      'node',
      'express',
      'mongo',
      'ethereum',
      'web3',
      'aave',
      'heroku',
    ]
  },
    {
    id: '5',
    img: 'cryptogama-screenshot.jpeg',
    title: 'Cryptogama',
    description: [
      'Course validation project: Cryptogama is a decentralized exchange prototype for Ethereum ERC-20 tokens that I made as a student project during a blockchain course at Alyra school in Paris. It includes a faucet so you can test it with Metamask on Ropsten network.',
      'Solo project.',
      '',
      '',
    ],
    url: 'https://cryptogama.herokuapp.com/',
    repo: 'https://github.com/raphaelpg/cryptogama-heroku',
    stack: [
      'react',
      'node',
      'express',
      'ethereum',
      'web3',
      'solidity',
      'truffle',
      'ganache',
      'heroku',
      'highcharts',
    ]
  },
    {
    id: '4',
    img: 'donato-screenshot.jpeg',
    title: 'Donato',
    description: [
      'Hackathon project: DonaTo is an application based on Ethereum which aims to bring transparency and accountability to donations.',
      'People who suffered from a disaster can open an account and start receiving donations from around the world.',
      'Team project. Did the smart contract and the tests part.',
      '',
    ],
    url: '',
    repo: 'https://github.com/DonaTo-Project/donato',
    stack: [
      'ethereum',
      'solidity',
      'truffle',
      'ganache',
      'web3',
    ]
  },
    {
    id: '3',
    img: 'yobale-screenshot.jpeg',
    title: 'Yobale',
    description: [
      'Startup application prototype: a platform allowing customers to book transports accross Senegal via email confirmations.',
      'Serverless, it integrates EmailJS SDK, Google Places Autocomplete API and React Datetime calendar pickup library.',
      'Solo project.',
      '',
    ],
    url: 'https://yobale.sn/',
    repo: '',
    stack: [
      'react',
      'sass',
      'css',
      'html',
      'emailjs',
      'googleplaces',
    ]
  },
    {
    id: '2',
    img: 'spacedodger-screenshot.jpeg',
    title: 'SpaceDodger',
    description: [
      'Basic video game prototype: a browser 2D video game made with jQuery.',
      'Solo project.',
      '',
      '',
    ],
    url: 'http://future-space.net/dodger/index.html',
    repo: '',
    stack: [
      'jquery',
      'css',
      'html',
    ]
  },
    {
    id: '1',
    img: 'nekosake-screenshot.jpeg',
    title: 'NekoSake',
    description: [
      'Brand website: promote a japanese sake brand through a clean and smooth website. The owner has a dashboard where he can customize the content himself.',
      'Solo project.',
      '',
      '',
    ],
    url: 'https://www.neko-sake.com/',
    repo: '',
    stack: [
      'javascript',
      'css',
      'html',
      'php',
      'sql',
    ]
  },
];