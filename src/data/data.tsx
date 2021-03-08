export interface ProjectData {
  id: string,
  img: string,
  title: string,
  description: string[],
  url?: string,
  repo?: string,
  stack: string[]
}

//RESUME URL
export const resumeUrl: string = "https://raw.githubusercontent.com/raphaelpg/resume/master/Raphael_Pinto_Full_Stack_JS.pdf"

// LOGO DATA
export const stackLogos: {} = {
  "aave": {
    "filename": "aave.svg",
    "url": "https://aave.com/"
  },
  "aws": {
    "filename": "aws.jpeg",
    "url": "https://aws.amazon.com/"
  },
  "css": {
    "filename": "css.svg",
    "url": "https://developer.mozilla.org/en-US/docs/Web/CSS"
  },
  "emailjs": {
    "filename": "emailjs.jpeg",
    "url": "https://www.emailjs.com/"
  },
  "ethereum": {
    "filename": "ethereum.jpeg",
    "url": "https://ethereum.org/en/"
  },
  "express": {
    "filename": "express.svg",
    "url": "http://expressjs.com/"
  },
  "fleek": {
    "filename": "fleek.jpeg",
    "url": "https://fleek.co/ipfs-gateway/"
  },
  "formspree": {
    "filename": "formspree.png",
    "url": "https://formspree.io/"
  },
  "ganache": {
    "filename": "ganache.jpeg",
    "url": "https://www.trufflesuite.com/ganache"
  },
  "gatsby": {
    "filename": "gatsby.jpeg",
    "url": "https://www.gatsbyjs.com/docs/"
  },
  "github": {
    "filename": "github.jpeg",
    "url": "https://github.com/raphaelpg"
  },
  "googleplaces": {
    "filename": "googleplaces.jpeg",
    "url": "https://developers.google.com/places/web-service/overview"
  },
  "heroku": {
    "filename": "heroku.jpeg",
    "url": "https://www.heroku.com/"
  },
  "highcharts": {
    "filename": "highcharts.jpeg",
    "url": "https://www.highcharts.com/"
  },
  "html": {
    "filename": "html.svg",
    "url": "https://developer.mozilla.org/en-US/docs/Web/HTML"
  },
  "ionos": {
    "filename": "ionos.svg",
    "url": "https://www.ionos.com/"
  },
  "ipfs": {
    "filename": "ipfs.jpeg",
    "url": "https://ipfs.io/"
  },
  "javascript": {
    "filename": "javascript.svg",
    "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  },
  "jquery": {
    "filename": "jquery.svg",
    "url": "https://api.jquery.com/"
  },
  "linkedin": {
    "filename": "linkedin.jpeg",
    "url": "https://www.linkedin.com/in/raphael-pinto-gregorio-660b2579/"
  },
  "mongo": {
    "filename": "mongo.svg",
    "url": "https://www.mongodb.com/2"
  },
  "nginx": {
    "filename": "nginx.svg",
    "url": "https://nginx.org/en/docs/"
  },
  "node": {
    "filename": "node.svg",
    "url": "https://nodejs.org/en/"
  },
  "ovh": {
    "filename": "ovh.svg",
    "url": "https://www.ovh.ie/"
  },
  "php": {
    "filename": "php.svg",
    "url": "https://www.php.net/"
  },
  "pm2": {
    "filename": "pm2.jpeg",
    "url": "https://pm2.keymetrics.io/docs/usage/pm2-doc-single-page/"
  },
  "react": {
    "filename": "react.jpeg",
    "url": "https://reactjs.org/docs/getting-started.html"
  },
  "sass": {
    "filename": "sass.svg",
    "url": "https://sass-lang.com/documentation"
  },
  "solidity": {
    "filename": "solidity.jpeg",
    "url": "https://docs.soliditylang.org/en/latest/"
  },
  "sql": {
    "filename": "sql.jpeg",
    "url": "https://www.w3schools.com/sql/"
  },
  "superfluid": {
    "filename": "superfluid.jpeg",
    "url": "https://www.superfluid.finance/"
  },
  "truffle": {
    "filename": "truffle.svg",
    "url": "https://www.trufflesuite.com/docs/truffle/overview"
  },
  "typescript": {
    "filename": "typescript.png",
    "url": "https://www.typescriptlang.org/docs/handbook/intro.html"
  },
  "web3": {
    "filename": "web3.jpeg",
    "url": "https://web3js.readthedocs.io/"
  },
  "wordpress": {
    "filename": "wordpress.png",
    "url": "https://wordpress.org/"
  }
}

// PROJECTS DATA
export const projectsData: ProjectData[] = [
  {
    id: '12',
    img: 'ipfs-portfolio.jpeg',
    title: 'IPFS-Portfolio-Typescript',
    description: [
      'My portfolio made with Gatsby and hosted on IPFS.',
      'First use of Typescript.',
      'Deployment has been made with Fleek.',
      'Solo project.',
      '',
    ],
    url: 'https://future-space.net/',
    repo: 'https://github.com/raphaelpg/IPFS-gatsby-typescript-portfolio',
    stack: [
      'gatsby',
      'typescript',
      'react',
      'formspree',
      'sass',
      'ipfs',
      'fleek',
    ]
  },
  {
    id: '11',
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
    id: '10',
    img: 'irrigate-prod.jpeg',
    title: 'Irrigate-app back end',
    description: [
      'Back end of the production version of Irrigate, the platform to gather all NGO\'s and associations accross the world allowing users to send donations from anywhere to everywhere using DAI currency.',
      'The server is hosted on Ionos 1&1 and serves data as a REST API from a MongoDb Atlas database.',
      'Current status is work in progress.',
      'Solo project.',
    ],
    url: 'https://www.future-space.org/api/causes',
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
    id: '9',
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
    id: '8',
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
    id: '7',
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
    id: '6',
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
    id: '5',
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
    id: '4',
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
    id: '3',
    img: 'espritvelo-screenshot.jpeg',
    title: 'Esprit Velo',
    description: [
      'Redesign of the bike shop website.',
      'Previous existing site on Wordpress, had to change and customize a theme, design additional modules.',
      'Solo project.',
      '',
    ],
    url: 'http://www.espritvelo.fr/',
    repo: '',
    stack: [
      'wordpress',
      'javascript',
      'php',
      'css',
      'html',
      'ovh',
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
      'ionos',
    ]
  },
];