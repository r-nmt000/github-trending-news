import React, { useContext } from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Button, ListItem} from "react-native-elements";
import { Context as SearchOptionContext } from "../../context/searchOptionContext";

const SearchOptionHomeScreen = ({navigation, drawer}) => {
  const { state, setSearchPressed } = useContext(SearchOptionContext);
  return (
    <View style={styles.homeContainer}>
      <View>
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
      </View>
      <Button
        style={styles.button}
        title="Search"
        onPress={ () => {
          setSearchPressed(true);
          drawer.current.closeDrawer();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'white'
  },
  listItemContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    marginHorizontal: 12,
    marginBottom: 12,
  }
});

export default SearchOptionHomeScreen;