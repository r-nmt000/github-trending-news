import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { ListItem } from "react-native-elements";

const SearchOptionHomeScreen = ({navigation}) => {
  return (
    <View style={styles.homeContainer}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("SelectLanguageScreen")
        }}
      >
        <ListItem
          chevron
          bottomDivider={true}
          title={
            <View style={styles.listItemContainer}>
              <Text>Language</Text>
              <Text>All</Text>
            </View>
          }
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("SelectPeriodScreen")
        }}
      >
        <ListItem
          chevron
          bottomDivider={true}
          title={
            <View style={styles.listItemContainer}>
              <Text>Period</Text>
              <Text>daily</Text>
            </View>
          }
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("SelectSpokenLanguageScreen")
        }}
      >
        <ListItem
          chevron
          bottomDivider={true}
          title={
            <View style={styles.listItemContainer}>
              <Text>Spoken Language</Text>
              <Text>English</Text>
            </View>
          }
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1
  },
  listItemContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});

export default SearchOptionHomeScreen;