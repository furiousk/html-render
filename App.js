/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {ScrollView, Dimensions, SafeAreaView} from 'react-native';

import HTML from 'react-native-render-html';
import { IGNORED_TAGS, alterNode, makeTableRenderer } from 'react-native-render-html-table-bridge';
import WebView from 'react-native-webview';

const dataset = require('./api.mock')()

const config = {
    WebViewComponent: WebView
};

const renderers = {
    table: makeTableRenderer(config)
};

const htmlConfig = {
    alterNode,
    renderers,
    ignoredTags: IGNORED_TAGS,
    imagesMaxWidth: Dimensions.get('window').width,
    debug: true,
    allowedStyles: ['display:block', 'display:none']
};

class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <HTML html={dataset[15].html} {...htmlConfig}/>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default App;
