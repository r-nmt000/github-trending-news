import React, { useContext } from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { ListItem } from "react-native-elements";
import { Context as SearchOptionContext } from "../../context/searchOptionContext";

const SelectLanguageScreen = ({ navigation }) => {
  const languages = [
    'All', 'C', 'C#', 'C++', 'Clojure', 'CommonLisp', 'Crystal', 'CSS',
    'Elixir', 'Elm', 'EmacsLisp', 'Erlang', 'Go', 'Gradle', 'GraphQL', 'Groovy',
    'Haml', 'Haskell', 'HTML', 'Java', 'JavaScript', 'JSON', 'JSX', 'Julia', 'Kotlin', 'Less',
    'LLVM', 'Lua', 'Markdown', 'Objective-C', 'Perl', 'PHP',
    'Python', 'R', 'Ruby', 'Rust', 'Sass', 'Scala', 'Shell', 'SQL', 'Swift', 'Tex', 'TypeScript'
  ];
  const { setLanguage } = useContext(SearchOptionContext);
  console.log(languages);
  return (
    <View>
      <FlatList
        data={languages}
        keyExtractor={language => language}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                setLanguage(item);
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

export default SelectLanguageScreen;