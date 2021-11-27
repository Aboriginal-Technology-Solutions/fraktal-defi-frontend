const contractTypes = [
  'uniswap-router',
  'uniswap-factory',
  'masterchef',
  'miniApeV2',
  'polycat-referralHandler'
]

const _exchanges = [
  {
    name:'quickswap',
    components: {
      factory: {
        abi: null,
        address: `0x5757371414417b8c6caad45baef941abc7d3ab32`
      },
      router: {
        abi: null,
        address: `0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff`
      }
    },
    exchangeType: 'uniswap'
  },    
  {
    name:'apeswap',
    components: {
      factory: {
        abi: null,
        address: `0xcf083be4164828f00cae704ec15a36d711491284`
      },
      router: {
        abi: null,
        address: `0xc0788a3ad43d79aa53b09c2eacc313a787d1d607`
      }
    },
    exchangeType: 'uniswap'
  },
  {
    name:'Polyzap',
    components: {
      factory: {
        abi: null,
        address: `0x34De5ce6c9a395dB5710119419A7a29baa435C88`
      },
      router: {
        abi: null,
        address: `0x4aaec1fa8247f85dc3df20f4e03feafdcb087ae9`
      }
    },
    exchangeType: 'uniswap'
  },
  {
    name:'Polydex',
    components: {
      factory: {
        abi: null,
        address: `0xeaa98f7b5f7bfbcd1af14d0efaa9d9e68d82f640`
      },
      router: {
        abi: null,
        address: `0xc60ae14f2568b102f8ca6266e8799112846dd088`
      }
    },
    exchangeType: 'uniswap'
  },
    {
      name:'sushiswap',
      components: {
        factory: {
          abi: null,
          address: `0xE7Fb3e833eFE5F9c441105EB65Ef8b261266423B`
        },
        router: {
          abi: null,
          address: `0xA102072A4C07F06EC3B4900FDC4C7B80b6c57429`
        }
      },
      exchangeType: 'uniswap'
    },
    {
      name:'dfyn',
      components: {
        factory: {
          abi: null,
          address: `0xc35dadb65012ec5796536bd9864ed8773abc74c4`
        },
        router: {
          abi: null,
          address: `0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506`
        }
      },
      exchangeType: 'uniswap'
    },
    {
      name:'cometh',
      components: {
        factory: {
          abi: null,
          address: `0x800b052609c355ca8103e06f022aa30647ead60a`
        },
        router: {
          abi: null,
          address: `0x93bcdc45f7e62f89a8e901dc4a0e2c6c427d9f25`
        },
      },
      exchangeType: 'uniswap'
    },
    {
      name:'smartdex',
      components: {
          factory: {
          abi: null,
          address: `0xBE087BeD88539d28664c9998FE3f180ea7b9749C`,
        },
        router: {
          abi: null,
          address: `0x6f5fE5Fef0186f7B27424679cbb17e45df6e2118`
        },
      },
      exchangeType: 'uniswap'
    },
    {
      name:'ELK',
      components: {
          factory: {
          abi: null,
          address: `0xE3BD06c7ac7E1CeB17BdD2E5BA83E40D1515AF2a`,
        },
        router: {
          abi: null,
          address: `0xa7c7d39c5102B65557c7c494d033385215652e11`
        },
      },
      exchangeType: 'uniswap'
    },
    {
      name:'WaultSwap',
      components: {
          factory: {
          abi: null,
          address: `0xa98ea6356a316b44bf710d5f9b6b4ea0081409ef`,
        },
        router: {
          abi: null,
          address: `0x3a1d87f206d12415f5b0a33e786967680aab4f6d`
        },
      },
      exchangeType: 'uniswap'
    },
    {
      name:'SteakSwap',
      components: {
          factory: {
          abi: null,
          address: `0x42E635D36913c94a340567761Ec8383b9932906a`,
        },
        router: {
          abi: null,
          address: `0x5d54689e49c5873dc87dd410dd780c940d17f466`
        },
      },
      exchangeType: 'uniswap'
    },
    {
      name:'Dexkit',
      components: {
          factory: {
          abi: null,
          address: ``,
        },
        router: {
          abi: null,
          address: `0xdef1c0ded9bec7f1a1670819833240f027b25eff`
        },
      },
      exchangeType: 'dexkit'
    }, 
    {
      name: 'Firebird',
      exchangeType: 'uniswap',
      components: {
        router: {
          address: `0xf6fa9ea1f64f1bbfa8d71f7f43faf6d45520bfac`
        },
        factory: {
          address: `0x5de74546d3b86c8df7feec30253865e1149818c8`
        }
      }
    }, 
    {
      name: 'Kyber',
      exchangeType: 'kyber',
      components: {
        router: {
          address: `0x546C79662E028B661dFB4767664d0273184E4dD1`
        },
        factory: {
          address: `0x5F1fe642060B5B9658C15721Ea22E982643c095c`
        }
      }
    }, 
    {
      name: 'JetSwap',
      exchangeType: 'uniswap',
      components: {
        router: {
          address: `0x5c6ec38fb0e2609672bdf628b1fd605a523e5923`
        },
        factory: {
          address: `0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270`
        }
      }
    }, 
    {
      name: 'Polycat',
      exchangeType: 'farmer',
      components: {
        router: {
          address: `0x94930a328162957ff1dd48900af67b5439336cbd`
        },
        factory: {
          address: `0x477ce834ae6b7ab003cce4bc4d8697763ff456fa`
        },
       masterChef: {
          abi: abis.IPolycatMasterChef,
          address: `0x8CFD1B9B7478E7B0422916B72d1DB6A9D513D734`
        },
        vaultChef: {
          abi: abis.IPolycatVaultChef,
          address: `0xBdA1f897E851c7EF22CD490D2Cf2DAce4645A904`
        },
        timelock: {
          abi: null,
          address: `0xf5a824B077Cc0aaF50Cf83a9E82714b89B684925​`
        },
        referralHandler: {
          abi: null,
          address: `0xB67aD6C2Fe7dd6Ba346706b833cCF4234256266D​`
        },
      }
    }
  ]
  const contracts = [
  {
    name: `polycat-referralHandler`,
    address: `0xB67aD6C2Fe7dd6Ba346706b833cCF4234256266D​`.
    abi: ''
  },
  {
    abi: 'uniswapV2Router02',
    name: 'quickswap-Router',
    address: `0x5757371414417b8c6caad45baef941abc7d3ab32`,
    type: 0
  },
  {
    abi: 'uniswapv2Factory',
    address: `0x5757371414417b8c6caad45baef941abc7d3ab32`,
    types: 1
  },
  {
    name: 'apeswap-router',
    abi: '',
    address: '',
    type: 0
  },
  {
    name: 'apeswap-factory',
    abi: '',
    address: '',
    type: 1   
  },
  {
    name: 'apeswap-miniape',
    abi: 'MiniApeV2',
    address: '',
    type: 3
  }
]

module.exports = contracts