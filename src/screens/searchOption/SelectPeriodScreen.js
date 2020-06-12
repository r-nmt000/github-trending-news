import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ListItem } from "react-native-elements";
import { Context as SearchOptionContext } from "../../context/searchOptionContext";

const SelectPeriodScreen = ({navigation}) => {
  const { setPeriod } = useContext(SearchOptionContext);
  return (
    <View style={styles.homeContainer}>
      <TouchableOpacity
        onPress={() => {
          setPeriod('daily');
          navigation.goBack();
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
          setPeriod('weekly');
          navigation.goBack();
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
          setPeriod('monthly');
          navigation.goBack();
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