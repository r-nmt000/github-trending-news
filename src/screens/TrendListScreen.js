import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import {Icon, ListItem} from "react-native-elements";
import {
  languages,
  spokenLanguages,
  fetchRepositories,
  fetchDevelopers,
} from '@huchenme/github-trending';

const TrendListScreen = ({navigation}) => {
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
                bottomDivider={true}
                title={item.name}
                titleStyle={styles.title}
                leftAvatar={{source: {url: item.avatar}}}
                subtitle={
                  <View>
                    <Text numberOfLines={1}> {item.description} </Text>
                    <View style={styles.iconContainer}>
                      <View style={styles.statsContainer}>
                        <Icon name='star-o' type='font-awesome' size='14' />
                        <Text> {item.stars}</Text>
                      </View>
                      <View style={styles.statsContainer}>
                        <Icon name='code-fork' type='font-awesome' size='14' />
                        <Text> {item.forks}</Text>
                      </View>
                      <View style={styles.statsContainer}>
                        <Icon name='person-outline' type='material' size='14' />
                        <Text> {item.author}</Text>
                      </View>
                    </View>
                  </View>
                }
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
  },
  iconContainer: {
    marginTop: 12,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statsContainer: {
    display: 'flex',
    flexDirection: 'row',
  }

});

export default TrendListScreen;