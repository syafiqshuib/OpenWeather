import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { createSwitchNavigator } from 'react-navigation';
import { createAppContainer } from 'react-navigation';
import SplashScreen from './Splash';
import MainScreen from './Main';
import HomeScreen from './Home';
import DetailsScreen from './Detail';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      >
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{
            title: 'Main',
            headerStyle: {
              backgroundColor: 'red',
            },
            headerTintColor: 'white',
            headerTitleAlign: 'center',
            headerShown: false
          }} />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Home',
            headerStyle: {
              backgroundColor: 'red',
            },
            headerTintColor: 'white',
            headerTitleAlign: 'center',
          }} />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            headerStyle: {
              backgroundColor: 'red',
            },
            headerTintColor: 'white',
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const AppsNavigator = createAppContainer(createSwitchNavigator(
  {
      SplashScreen: SplashScreen,
      StackScreen: App,
  },
  {
      initialRouteName: 'SplashScreen',
  }

));

export default AppsNavigator;

