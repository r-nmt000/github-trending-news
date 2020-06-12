import React, { useContext, useRef } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DrawerLayout from "react-native-drawer-layout";
import TrendListScreen from "./src/screens/TrendListScreen";
import TrendDetailScreen from "./src/screens/TrendDetailScreen";
import SearchOptionHomeScreen from "./src/screens/searchOption/SearchOptionHomeScreen";
import {Button, Icon} from "react-native-elements";
import SelectLanguageScreen from "./src/screens/searchOption/SelectLanguageScreen";
import SelectSpokenLanguageScreen from "./src/screens/searchOption/SelectSpokenLanguageScreen";
import SelectPeriodScreen from "./src/screens/searchOption/SelectPeriodScreen";
import { Provider as SearchOptionProvider } from "./src/context/searchOptionContext";
import { Provider as TrendProvider } from "./src/context/trendContext";
import { Context as SearchOptionContext } from "./src/context/searchOptionContext";
import { Context as TrendContext } from "./src/context/trendContext";

const Stack = createStackNavigator();
const SearchOptionStack = createStackNavigator();

const SearchOption = () => {
  return (
    <NavigationContainer>
      <SearchOptionStack.Navigator
        initialRouteName="SearchOptionHomeScreen"
        mode="modal"
      >
        <SearchOptionStack.Screen
          name="SearchOptionHomeScreen"
          component={SearchOptionHomeScreen}
          options={{ title: "Search Options"}}
        />
        <SearchOptionStack.Screen
          name="SelectLanguageScreen"
          component={SelectLanguageScreen}
          options={{ title: "Language"}}
        />
        <SearchOptionStack.Screen
          name="SelectSpokenLanguageScreen"
          component={SelectSpokenLanguageScreen}
          options={{ title: "Spoken Language"}}
        />
        <SearchOptionStack.Screen
          name="SelectPeriodScreen"
          component={SelectPeriodScreen}
          options={{ title: "Period"}}
        />
      </SearchOptionStack.Navigator>
    </NavigationContainer>
  )
};

const App = () => {
  const { state } = useContext(SearchOptionContext);
  const { fetchTrend } = useContext(TrendContext);
  const drawer = useRef(null);
  return (
    <DrawerLayout
      drawerBackgroundColor='white'
      drawerPosition='right'
      drawerWidth={300}
      renderNavigationView={SearchOption}
      ref={drawer}
      onDrawerClose={() => {
        console.log('fetchtrend');
        fetchTrend(state.language, state.period, state.spokenLanguage);
      }}
    >
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="TrendList"
        >
          <Stack.Screen
            name="TrendList"
            component={TrendListScreen}
            options={{
              title: `${state.language ? state.language : 'All'} / ${state.period}`,
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default () => {
  return (
    <TrendProvider>
      <SearchOptionProvider>
        <App/>
      </SearchOptionProvider>
    </TrendProvider>
  )
}
