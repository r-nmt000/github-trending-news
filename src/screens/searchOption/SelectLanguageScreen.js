import React, { useContext } from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { languages } from '@huchenme/github-trending';
import {ListItem} from "react-native-elements";
import { Context as SearchOptionContext } from "../../context/searchOptionContext";

const SelectLanguageScreen = () => {
  const { setLanguage } = useContext(SearchOptionContext);
  return (
    <View>
      <FlatList
        data={languages}
        keyExtractor={lang => lang.name}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                setLanguage(item.name)
              }}>
              <ListItem
                chevron
                bottomDivider={true}
                title={item.name}
              />
            </TouchableOpacity>
          )
        }
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SelectLanguageScreen;