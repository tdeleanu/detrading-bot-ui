# AI Trading Bot UI 🤖📈

A modern, Web3-enabled landing page for an AI-powered trading bot platform. Built with React, TypeScript, and Web3 integration, featuring a sleek dark theme inspired by modern DeFi interfaces.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-3178C6?logo=typescript)
![Web3](https://img.shields.io/badge/Web3-Enabled-7C3AED?logo=ethereum)

## ✨ Features

### 🎨 Modern UI/UX
- **Dark Theme**: Sophisticated dark design with purple/pink gradient accents
- **Glassmorphism**: Modern glass-morphic effects with backdrop filters
- **Responsive Design**: Fully responsive across all device sizes
- **Smooth Animations**: Framer Motion powered animations and transitions
- **Gradient Orbs**: Dynamic floating gradient background effects

### 🔗 Web3 Integration
- **Multi-Wallet Support**: Connect with MetaMask, Rainbow, Coinbase Wallet, and 100+ wallets via WalletConnect
- **Multi-Chain Ready**: Support for Ethereum, Polygon, Optimism, Arbitrum, Base, and BSC
- **Custom Wallet UI**: Styled wallet connection modal matching the theme
- **Chain Switching**: Easy network switching directly from the UI

### 📊 Trading Features Showcase
- **Core Trading Principles**: Systematic risk assessment and position management
- **Trading Discipline**: Rule-based trading with emotion-free execution
- **Performance Metrics**: Visual representation of trading performance
- **Multi-Exchange Support**: Integration with major crypto exchanges
- **Risk Management**: 1-2% max risk per trade with portfolio protection

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm/yarn
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/tdeleanu/detrading-bot-ui.git
cd detrading-bot-ui
```

2. **Install dependencies**
```bash
npm install --legacy-peer-deps
# or
yarn install
```

3. **Set up environment variables**
```bash
cp .env.example .env
```

Edit `.env` and add your WalletConnect Project ID:
```
REACT_APP_WALLETCONNECT_PROJECT_ID=your_project_id_here
```

Get your Project ID from [WalletConnect Cloud](https://cloud.walletconnect.com)

4. **Start the development server**
```bash
npm start
# or
yarn start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 🛠️ Tech Stack

### Frontend
- **React 18.2.0** - UI library
- **TypeScript 4.9.5** - Type safety
- **Material-UI (MUI)** - Component library
- **Framer Motion** - Animations
- **Redux Toolkit** - State management

### Web3
- **Wagmi** - React hooks for Ethereum
- **RainbowKit** - Wallet connection UI
- **Viem** - TypeScript Ethereum library
- **WalletConnect** - Multi-wallet protocol

### Development
- **Create React App** - Build tooling
- **ESLint** - Code linting
- **Prettier** - Code formatting

## 📁 Project Structure

```
detrading-bot-ui/
├── public/                 # Static assets
├── src/
│   ├── components/        # React components
│   │   ├── ConnectWallet.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── Header.tsx
│   │   ├── HeroSection.tsx
│   │   ├── LandingPage.tsx
│   │   └── ...
│   ├── config/           # Configuration files
│   │   └── wagmiConfig.ts
│   ├── theme/            # Theme configurations
│   │   ├── t3rnTheme.ts
│   │   └── rainbowKitTheme.ts
│   ├── styles/           # Global styles
│   ├── store/            # Redux store
│   └── App.tsx           # Main app component
├── .env.example          # Environment variables template
├── package.json          # Dependencies
└── tsconfig.json         # TypeScript config
```

## 🎨 Customization

### Theme Colors
Edit `src/theme/t3rnTheme.ts` to customize the color palette:
```typescript
primary: {
  main: '#7C3AED',  // Purple
},
secondary: {
  main: '#EC4899',  // Pink
}
```

### Wallet Configuration
Modify `src/config/wagmiConfig.ts` to add/remove blockchain networks or customize wallet options.

### Content
Update component files in `src/components/` to modify text content and feature descriptions.

## 📦 Building for Production

```bash
npm run build
# or
yarn build
```

This creates an optimized production build in the `build` folder.

### Deployment Options

#### Vercel
```bash
npm i -g vercel
vercel
```

#### Netlify
```bash
npm i -g netlify-cli
netlify deploy --prod --dir=build
```

#### GitHub Pages
```bash
npm run build
npm run deploy
```

## 🧪 Testing

```bash
npm test
# or
yarn test
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- UI design inspired by [t3rn.io](https://t3rn.io)
- Built with [RainbowKit](https://www.rainbowkit.com/)
- Powered by [WalletConnect](https://walletconnect.com/)

## 📞 Support

For support, please open an issue in the GitHub repository or contact the development team.

---

**Live Demo**: [Coming Soon]

**Documentation**: [Coming Soon]

Made with ❤️ by the AI Trading Bot Team