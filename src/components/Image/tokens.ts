/**
 * @see https://github.com/pancakeswap/pancake-frontend/blob/develop/src/config/constants/tokens.ts
 */
const tokens = {
  busd: {
    symbol: "BUSD",
    address: {
      56: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
      97: "",
    },
    decimals: 18,
    projectLink: "https://www.paxos.com/busd/",
  },
  wbnb: {
    symbol: "wBNB",
    address: {
      56: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
      97: "0xae13d989dac2f0debff460ac112a837c89baa7cd",
    },
    decimals: 18,
    projectLink: "https://ghostnft.io/",
  },
  usdt: {
    symbol: "USDT",
    address: {
      56: "0x55d398326f99059fF775485246999027B3197955",
      97: "0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5",
    },
    decimals: 18,
    projectLink: "https://tether.to/",
  }
};

export default tokens;
