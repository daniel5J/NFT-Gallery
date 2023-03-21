
## How to install
Please use `yarn` package manager. For the migration, you can check `package.json` script commands.
You should set `.env` file before running the project.
- `yarn install`
- `yarn start:dev`

## Project structure
The project is composed of two `resources` (`user`, `nft`) and some common modules (`config`, `shared`).

### `User` module
This includes creating, updating and reading actions.
For the creating and updating, it uses `siwe`(https://docs.login.xyz/general-information/siwe-overview/eip-4361) standard for the wallet verification.

### `Nft` module
This includes fetching owned nfts from an address. I used Moralis API to fetch owned nfts. (https://v1docs.moralis.io/moralis-dapp/web3-api/nft-api)

### `WalletService`
This is to validate EVM addresses and to verify `siwe` messages sent from frontend.

### `ConfigService`
This stores the global configuration variables for the project.

