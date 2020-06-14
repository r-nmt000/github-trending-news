import React, { useContext} from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { spokenLanguages } from '@huchenme/github-trending';
import {ListItem} from "react-native-elements";
import { Context as SearchOptionContext } from "../../context/searchOptionContext";

const SelectSpokenLanguageScreen = ({ navigation }) => {
  const spokenLanguages = [
    'All', 'English', 'Chinese', 'French', 'German', 'Irish', 'Italian', 'Japanese', 'Korean', 'Latin', 'Russian'
  ];
  const { setSpokenLanguage } = useContext(SearchOptionContext);
  return (
    <View>
      <FlatList
        data={spokenLanguages}
        keyExtractor={lang => lang}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                setSpokenLanguage(item);
                navigation.goBack();
              }}>
              <ListItem
                chevron
                bottomDivider={true}
                title={item}
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