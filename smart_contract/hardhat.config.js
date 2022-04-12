// https://eth-ropsten.alchemyapi.io/v2/Vwv7FewX5bymIlXcNrw_fOy-XU7IOmZC

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/Vwv7FewX5bymIlXcNrw_fOy-XU7IOmZC',
      accounts: [ 'd53c5657a9f749dc2a6cdd9cf150a653de28715bdee3225552bab257827f8e17' ]
    }
  }
}