import React, { useContext } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import TrendListItem from "../components/TrendListItem";
import { Context as TrendContext } from "../context/trendContext";


const TrendListScreen = ({navigation}) => {
  const { state } = useContext(TrendContext);
  console.log('render list');
  console.log(state);

  return (
    <View>
      <FlatList
        data={state.repositories}
        extraData={state.repositories}
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