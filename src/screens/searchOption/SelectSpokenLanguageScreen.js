import React, { useContext} from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { spokenLanguages } from '@huchenme/github-trending';
import {ListItem} from "react-native-elements";
import { Context as SearchOptionContext } from "../../context/searchOptionContext";

const SelectSpokenLanguageScreen = ({ navigation }) => {
  const { setSpokenLanguage } = useContext(SearchOptionContext);
  return (
    <View>
      <FlatList
        data={spokenLanguages}
        keyExtractor={lang => lang.name}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                setSpokenLanguage(item.name);
                navigation.goBack();
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

export default SelectSpokenLanguageScreen;