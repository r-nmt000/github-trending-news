import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { fetchRepositories } from '@huchenme/github-trending';
import TrendListItem from "../components/TrendListItem";

const TrendListScreen = ({navigation}) => {
  const [repos, setRepos] = useState(null);

  useEffect(() => {
    fetchRepositories({language: '', since: 'monthly'}).then(
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
              <TrendListItem
                name={item.name}
                avatar={item.avatar}
                description={item.description}
                stars={item.stars}
                forks={item.forks}
                author={item.author}
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
});

export default TrendListScreen;