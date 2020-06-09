import React from 'react';
import { WebView } from "react-native-webview";
import { View, Text, StyleSheet } from 'react-native';

const TrendDetailScreen = ({route}) => {
  const url = route.params?.url || null;
  return (
    <WebView source={{ uri: url}}/>
  );
};

const styles = StyleSheet.create({});

export default TrendDetailScreen;