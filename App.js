import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TrendListScreen from "./src/screens/TrendListScreen";
import TrendDetailScreen from "./src/screens/TrendDetailScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="TrendList"
      >
        <Stack.Screen
          name="TrendList"
          component={TrendListScreen}
        />
        <Stack.Screen
          name="TrendDetail"
          component={TrendDetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
