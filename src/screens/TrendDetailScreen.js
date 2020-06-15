import React, { useState } from 'react';
import { WebView } from "react-native-webview";
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';

const TrendDetailScreen = ({route}) => {
  const url = route.params?.url || null;
  const [isLoading, setLoading] = useState(true);
  return (
    <View style={styles.container}>
      <WebView
        onLoadStart={() => {setLoading(true)}}
        onLoad={() => {setLoading(false)}}
        source={{ uri: url}}/>
      {isLoading && (
        <ActivityIndicator size="large" style={styles.indicator}/>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  indicator: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  }
});

export default TrendDetailScreen;