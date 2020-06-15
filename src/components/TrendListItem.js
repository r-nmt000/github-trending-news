import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Icon, ListItem} from "react-native-elements";

const TrendListItem = ({name, avatar, description, stars, forks, author}) => {
  return (
    <ListItem
      chevron
      bottomDivider={true}
      title={name}
      titleStyle={styles.title}
      leftAvatar={{source: {url: avatar}}}
      subtitle={
        <View>
          <Text numberOfLines={1}> {description} </Text>
          <View style={styles.iconContainer}>
            <View style={styles.statsContainer}>
              <Icon name='star-o' type='font-awesome' size={14} />
              <Text> {stars}</Text>
            </View>
            <View style={styles.statsContainer}>
              <Icon name='code-fork' type='font-awesome' size={14} />
              <Text> {forks}</Text>
            </View>
            <View style={styles.statsContainer}>
              <Icon name='person-outline' type='material' size={14} />
              <Text> {author}</Text>
            </View>
          </View>
        </View>
      }
    />
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

export default TrendListItem;