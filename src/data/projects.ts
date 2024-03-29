import { IProject } from '../interfaces/project'

export const projectsData: IProject[] = [
  {
    img: 'bucketly_logo.jpeg',
    title: 'Bucketly: Reduce L2 bridging costs (Hackmoney 2021)',
    description: [
      'Bucketly makes it more cost-effective to bridge assets to L2s, in this case Polygon. It batches L1 txns into a bucket with other txns. They all split the fees for bridging.',
      'Doing this helps you save 3 to 5 times as much on fees. For individuals, it can be used for transfers on low cap accounts.',
      'We used hardhat for coding and testing Solidity contracts, we used Web3 and React for the frontend, and NodeJS, Express and Ethers for the relay server.',
      'Made in July 2021 for the Hackmoney hackathon, the contracts are deployed on Ethereum testnet Goerli and Polygon testnet (Mumbai).',
      'Team project, I developed part of the relay server, the smart contracts, the deployments and tests scripts.',
    ],
    url: 'https://www.youtube.com/watch?v=oaLwqtgNU5U&ab_channel=MitchellOpatowsky',
    repo: 'https://github.com/BUIDLHub/bucketly_hackmoney_2021',
    stack: [
      'polygon',
      'hardhat',
      'ethers',
      'solidity',
      'openzeppelin',
      'typescript',
      'node',
      'express',
    ]
  },
  {
    img: 'adEth-screenshot.jpeg',
    title: 'AdEth: advertising NFTs (Web3 Weekend Hackathon 2021)',
    description: [
      'AdEth is a POC made during ETH Global Web3 Weekend Hackathon, the purpose is to onboard advertising industry into web3 allowing partnership through NFTs.',
      'The project allows companies to generate an NFT that can be displayed on websites as an ad.',
      'During the minting process, the company must provide a budget in stablecoin which is added to the NFT, each time a user clics on the ad, the website is rewarded by a portion of the budget.',
      'Made in 48h, the contracts are deployed on Polygon testnet (Mumbai) and the NFTs are stored on Filecoin thanks to "NFT Storage" tool.',
      'Solo project.',
    ],
    url: '',
    repo: 'https://github.com/raphaelpg/AdETH',
    stack: [
      'polygon',
      'solidity',
      'truffle',
      'web3',
      'openzeppelin',
      'filecoin',
      'nft-storage',
      'metamask',
      'react',
    ]
  },
  {
    img: 'irrigate-polygon.jpeg',
    title: 'Irrigate-app on Matic/Polygon',
    description: [
      'Irrigate version handling ERC20 donations deployed on Matic/Polygon testnet (Mumbai).',
      'The client is a static website made with Gatsby and deployed on IPFS through Fleek, using web3 and Metamask to interact with the EVM.',
      'The server is a Node JS instance that handles CRUD operations with a NOSQL database and smart contracts calls.',
      'Both server and client are currently live, smart contract is deployed on Mumbai testnet.',
      'Solo project.',
    ],
    url: 'https://irrigateapp.xyz/',
    repo: 'https://github.com/raphaelpg/irrigate-prod-client',
    stack: [
      'solidity',
      'truffle',
      'web3',
      'openzeppelin',
      'polygon',
      'metamask',
    ]
  },
  {
    img: 'sharp-screenshot.jpeg',
    title: 'Thumbnails-to-Postgres',
    description: [
      'Local server to generate thumbnails from an uploaded image and add the local urls to a database.',
      'It uses Sharp library and Postgres database.',
      'Solo project.',
      '',
    ],
    url: '',
    repo: 'https://github.com/raphaelpg/thumbnails-to-postgres',
    stack: [
      'typescript',
      'node',
      'express',
      'postgres',
      'sharp',
    ]
  },
  {
    img: 'irrigate-prod.jpeg',
    title: 'Irrigate-app front end',
    description: [
      'Front end of the production version of Irrigate, the platform to gather all NGO\'s and associations accross the world allowing users to send donations from anywhere to everywhere using DAI currency.',
      'The client is a static website made with Gatsby and deployed on IPFS through Fleek, desktop only for the moment.',
      'It is currently work-in-progress.',
      'Solo project.',
    ],
    url: 'https://irrigateapp.xyz/',
    repo: 'https://github.com/raphaelpg/irrigate-prod-client',
    stack: [
      'gatsby',
      'typescript',
      'react',
      'sass',
      'ipfs',
      'fleek',
    ]
  },
  {
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
      'typescript',
      'node',
      'express',
      'jwt',
      'jest',
      'nginx',
      'pm2',
      'ionos',
      'mongo',
    ]
  },
  {
    img: 'ipfs-portfolio.jpeg',
    title: 'IPFS-Portfolio',
    description: [
      'My portfolio made with Gatsby and hosted on IPFS.',
      'Deployment has been made with Fleek.',
      'First use of Typescript.',
      'Solo project.',
      '',
    ],
    url: 'https://lively-cloud-0411.on.fleek.co/',
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
    img: 'irrigate-screenshot.jpeg',
    title: 'Irrigate-x-Aave Prototype (Planet Wide SOS Hackathon 2020)',
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
    img: 'donato-screenshot.jpeg',
    title: 'Donato: donation app (ETH Turin 2020 Hackathon)',
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
      'chai',
    ]
  },
  {
    img: 'cryptogama-screenshot.jpeg',
    title: 'Cryptogama: DEX prototype (ALYRA 2020 course validation project)',
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
      'chai',
    ]
  },
  {
    img: 'multisig.jpeg',
    title: 'MultiSig Wallet',
    description: [
      'MultiSigWallet smart contract where number of owners and minimum confirmations can be set in the contract deployment.',
      '',
      '',
      '',
    ],
    url: '',
    repo: 'https://github.com/raphaelpg/multiSigWallet',
    stack: [
      'ethereum',
      'solidity',
      'truffle',
      'chai',
      'openzeppelin',
    ]
  },
  {
    img: 'addressmonitoring.jpeg',
    title: 'Address Monitoring',
    description: [
      'Js script to watch pending transactions involving an address on the blockchain.',
      'The script needs an Infura project ID and an ethereum address as parameters.',
      'It is currently set to monitor on ropsten testnet but you can switch to others modifying the provider URL.',
      '',
    ],
    url: '',
    repo: 'https://github.com/raphaelpg/addressMonitoring',
    stack: [
      'ethereum',
      'web3',
      'node',
    ]
  },
  {
    img: 'faucet.jpeg',
    title: 'ERC20 Faucet Example',
    description: [
      'This is an ERC20 Faucet template to deploy on the blockchain.',
      'ERC20 EIP https://eips.ethereum.org/EIPS/eip-20.',
      '',
      '',
    ],
    url: '',
    repo: 'https://github.com/raphaelpg/ERC20FaucetExample',
    stack: [
      'ethereum',
      'solidity',
      'truffle',
      'chai',
      'openzeppelin',
      'node',
    ]
  },
  {
    img: 'ERC721.jpeg',
    title: 'ERC721 Example',
    description: [
      'This is an ERC721 Token template to deploy on ethereum blockchain.',
      'The purpose is to test functions to better understand how they work and what they do.',
      'See test file to check \'ERC721\' standards functions (was tested with Truffle).',
      'ERC721 EIP https://eips.ethereum.org/EIPS/eip-721',
    ],
    url: '',
    repo: 'https://github.com/raphaelpg/ERC721Example',
    stack: [
      'ethereum',
      'solidity',
      'truffle',
      'chai',
      'openzeppelin',
      'node',
    ]
  },
  {
    img: 'ERC20.jpeg',
    title: 'ERC20 Example',
    description: [
      'This is an ERC20 Token template to deploy on the blockchain.',
      'One token example has been deployed on Ropsten testnet at \'0x6f1d6BD8C4cca3464aB0DE2FD2BFE532a2B60eC3\' called \'EET\'.',
      'With Truffle, tested ERC20 metadatas, standards and internal functions, also \'Ownable\' functions.',
      '',
    ],
    url: '',
    repo: 'https://github.com/raphaelpg/ERC20Example',
    stack: [
      'ethereum',
      'solidity',
      'truffle',
      'chai',
      'openzeppelin',
      'node',
    ]
  },
  {
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
    img: 'espritvelo-screenshot.jpeg',
    title: 'Esprit Velo',
    description: [
      'Redesign of the website of a bike store.',
      'Previous existing site on Wordpress, had to change and customize a theme, code additional module.',
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
];