import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  languages,
  spokenLanguages,
  fetchRepositories,
  fetchDevelopers,
} from '@huchenme/github-trending';

const TrendListScreen = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetchRepositories({language: 'ruby', since: 'monthly'}).then(
      (repositories) => {
        setRepos(repositories);
      }
    );
  },[]);


  return (
    <View>
      <Text>list</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default TrendListScreen;