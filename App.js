import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DrawerLayout from "react-native-drawer-layout";
import TrendListScreen from "./src/screens/TrendListScreen";
import TrendDetailScreen from "./src/screens/TrendDetailScreen";
import SearchFilterScreen from "./src/screens/SearchFilterScreen";
import {Button, Icon} from "react-native-elements";

const Stack = createStackNavigator();

export default function App() {
  const drawer = useRef(null);

  return (
    <DrawerLayout
      drawerBackgroundColor='white'
      drawerPosition='right'
      drawerWidth={250}
      renderNavigationView={SearchFilterScreen}
      ref={drawer}
    >
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="TrendList"
        >
          <Stack.Screen
            name="TrendList"
            component={TrendListScreen}
            options={{
              headerRight: () => (
                <Button
                  type='clear'
                  icon={
                    <Icon
                      name="filter"
                      type="antdesign"
                    />
                  }
                  onPress={()=>{
                    drawer.current.openDrawer();
                  }}
                />
              )
            }}
          />
          <Stack.Screen
            name="TrendDetail"
            component={TrendDetailScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </DrawerLayout>
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
