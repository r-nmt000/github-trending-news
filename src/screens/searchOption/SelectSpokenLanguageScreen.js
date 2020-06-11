import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { spokenLanguages } from '@huchenme/github-trending';
import {ListItem} from "react-native-elements";

const SelectSpokenLanguageScreen = () => {
  return (
    <View>
      <FlatList
        data={spokenLanguages}
        keyExtractor={lang => lang.name}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => {
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