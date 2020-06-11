import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ListItem } from "react-native-elements";

const SelectPeriodScreen = () => {
  return (
    <View style={styles.homeContainer}>
      <TouchableOpacity
        onPress={() => {
        }}
      >
        <ListItem
          chevron
          bottomDivider={true}
          title='daily'
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
        }}
      >
        <ListItem
          chevron
          bottomDivider={true}
          title='weekly'
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
        }}
      >
        <ListItem
          chevron
          bottomDivider={true}
          title='monthly'
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SelectPeriodScreen;