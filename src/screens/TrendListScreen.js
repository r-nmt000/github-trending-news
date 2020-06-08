import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { ListItem } from "react-native-elements";
import {
  languages,
  spokenLanguages,
  fetchRepositories,
  fetchDevelopers,
} from '@huchenme/github-trending';

const TrendListScreen = () => {
  const [repos, setRepos] = useState(null);

  useEffect(() => {
    fetchRepositories({language: 'ruby', since: 'monthly'}).then(
      (repositories) => {
        setRepos(repositories);
      }
    );
  },[]);

  if (!repos) {
    return null;
  }


  return (
    <View>
      <FlatList
        data={repos}
        keyExtractor={repo => repo.url}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => {
              navigation.navigate('TrendDetail', {url: item.url});
            }}>
              <ListItem
                chevron
                title={item.name}
                titleStyle={styles.title}
                subtitle={item.description}
                leftAvatar={{source: {url: item.avatar}}}
              />
            </TouchableOpacity>
          )
        }
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: '#27f',
    fontWeight: 'bold'
  }
});

export default TrendListScreen;