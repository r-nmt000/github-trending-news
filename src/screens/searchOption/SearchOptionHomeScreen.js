import React, { useContext } from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { ListItem } from "react-native-elements";
import { Context as SearchOptionContext } from "../../context/searchOptionContext";

const SearchOptionHomeScreen = ({navigation}) => {
  const { state } = useContext(SearchOptionContext);
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
              <Text>{state.language ? state.language : 'All'}</Text>
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
              <Text>{state.period}</Text>
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
              <Text>{state.spokenLanguage ? state.spokenLanguage : 'All'}</Text>
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