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
    <img src="https://img.shields.io/npm/dt/@chainplatform/progressive-image.svg"></img>
  </a>
  <a href="https://www.npmjs.com/package/@chainplatform/progressive-image">
    <img src="https://img.shields.io/badge/platform-android%20%7C%20ios%20%7C%20web-blue"></img>
  </a>
  <a href="https://github.com/ChainPlatform/react-native-progressive-image/pulls">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome!" />
  </a>
  <a href="https://twitter.com/intent/follow?screen_name=doansan">
    <img src="https://img.shields.io/twitter/follow/doansan.svg?label=Follow%20@doansan" alt="Follow @doansan" />
  </a>
</p>

### Install
```
npm install @chainplatform/progressive-image --save
```
or
```
yarn add @chainplatform/progressive-image
```

### Example

```js
import React from 'react';
import {StyleSheet} from 'react-native';
import ProgressiveImage, {Loading, ViewLoader} from '@chainplatform/progressive-image';

class App extends React.Component {

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