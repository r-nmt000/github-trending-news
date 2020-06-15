import React, { useEffect, useContext } from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import { Context as TrendContext } from "../context/trendContext";
import { Context as SearchOptionContext } from "../context/searchOptionContext"

const LoadingListScreen = () => {
  const { state } = useContext(SearchOptionContext);
  const { fetchTrend } = useContext(TrendContext);

  useEffect(() => {
    fetchTrend(state.language, state.period);
  }, []);
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large"/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  }
});

export default LoadingListScreen;