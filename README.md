# @chainplatform/progressive-image

React Native Progressive Image for React Native and React Native Web.

<p align="center">
  <a href="https://github.com/ChainPlatform/react-native-progressive-image/blob/HEAD/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" />
  </a>
  <a href="https://www.npmjs.com/package/@chainplatform/progressive-image">
    <img src="https://img.shields.io/npm/v/@chainplatform/progressive-image?color=brightgreen&label=npm%20package" alt="Current npm package version." />
  </a>
  <a href="https://www.npmjs.com/package/@chainplatform/progressive-image">
    <img src="https://img.shields.io/npm/dt/@chainplatform/progressive-image.svg" />
  </a>
  <a href="https://www.npmjs.com/package/@chainplatform/progressive-image">
    <img src="https://img.shields.io/badge/platform-android%20%7C%20ios%20%7C%20web-blue" />
  </a>
  <a href="https://github.com/ChainPlatform/react-native-progressive-image/pulls">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome!" />
  </a>
  <a href="https://twitter.com/intent/follow?screen_name=doansan">
    <img src="https://img.shields.io/twitter/follow/doansan.svg?label=Follow%20@doansan" alt="Follow @doansan" />
  </a>
</p>

---

## 🚀 Installation

```bash
npm install @chainplatform/progressive-image
```

or

```bash
yarn add @chainplatform/progressive-image
```

---

## 🧩 Usage Example

```js
import React from 'react';
import { View } from 'react-native';
import {StyleSheet} from 'react-native';
import ProgressiveImage, {Loading, ViewLoader} from '@chainplatform/progressive-image';

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
          <ViewLoader
            style={{
              showLoading: false,
              imageType: "link",
              source: "image link",
              resizeMode: 'center',
              style: {
                width: 96,
                height: 40,
                color: '#4189FF'
              }
            }}/>
      </View>
    );
  }
}
```

---

## 🖼 Components

### `ProgressiveImage`
The core image component with animation.

### `ViewLoader`
A simple wrapper around `ProgressiveImage` for easy drop-in usage.

---

## 💡 Notes
- Fully compatible with **React Native Web**.  
- Animation uses `useNativeDriver` when possible for smoother performance.

---

## 🪪 License
MIT © 2025 [Chain Platform](https://chainplatform.net)

---

## 💖 Support & Donate

If you find this package helpful, consider supporting the development:

| Cryptocurrency | Address |
|----------------|----------|
| **Bitcoin (BTC)** | `17grbSNSEcEybS1nHh4TGYVodBwT16cWtc` |
![alt text](image-1.png)
| **Ethereum (ETH)** | `0xa2fd119a619908d53928e5848b49bf1cc15689d4` |
![alt text](image-2.png)
| **Tron (TRX)** | `TYL8p2PLCLDfq3CgGBp58WdUvvg9zsJ8pd` |
![alt text](image.png)
| **DOGE (DOGE)** | `DDfKN2ys4frNaUkvPKcAdfL6SiVss5Bm19` |
| **USDT (SOLANA)** | `cPUZsb7T9tMfiZFqXbWbRvrUktxgZQXQ2Ni1HiVXgFm` |

Your contribution helps maintain open-source development under the Chain Platform ecosystem 🚀
