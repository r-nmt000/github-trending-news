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
import LoadingListScreen from "./src/screens/LoadingListScreen";

const Stack = createStackNavigator();
const SearchOptionStack = createStackNavigator();

const SearchOption = ({drawer}) => {
  return (
    <NavigationContainer>
      <SearchOptionStack.Navigator
        initialRouteName="SearchOptionHomeScreen"
        mode="modal"
      >
        <SearchOptionStack.Screen
          name="SearchOptionHomeScreen"
          options={{ title: "Search Options"}}
        >
          {props => <SearchOptionHomeScreen {...props} drawer={drawer}/>}
        </SearchOptionStack.Screen>
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
  const { state, setSearchPressed } = useContext(SearchOptionContext);
  const { state: { isLoading }, loadListScreen } = useContext(TrendContext);
  const drawer = useRef(null);

  if (isLoading) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="LoadingListScreen"
            component={LoadingListScreen}
            options={{
              title: `${state.language ? state.language : 'All'} / ${state.period}`,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
  return (
    <DrawerLayout
      drawerBackgroundColor='white'
      drawerPosition='right'
      drawerWidth={300}
      renderNavigationView={() => {
        return <SearchOption
          drawer={drawer}
        />
      }}
      ref={drawer}
      onDrawerClose={() => {
        if (state.isSearchPressed) {
          loadListScreen();
          setSearchPressed(false);
        }
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
                      name="search1"
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
            options={({route}) => ({title: route.params.name})}
          />
          <Stack.Screen
            name="LoadingListScreen"
            component={LoadingListScreen}
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
