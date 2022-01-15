import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ParamListBase } from '@react-navigation/native';
import { defaultTheme } from '../global/styles/theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Home, Movies, Detail, Search } from '../screens';

function StackRoute() {
  const { Navigator, Screen } = createNativeStackNavigator<ParamListBase>();

  return (
    <Navigator
      initialRouteName='Home'
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="Detail"
        component={Detail}
        options={{
          headerShown: false,
          title: 'Detalhes'
        }}
      />
      <Screen
        name="Search"
        component={Search}
        options={{
          title: 'Sua busca',
          headerTintColor: defaultTheme.colors.white,
          headerTitleStyle: {
            fontSize: defaultTheme.metrics.px(30),
          },
          headerStyle: {
            backgroundColor: defaultTheme.colors.bg
          }
        }}
      />
    </Navigator>
  )
}

export function AppRoutes() {
  const { Navigator, Screen } = createDrawerNavigator<ParamListBase>();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: defaultTheme.colors.black,
          paddingTop: defaultTheme.metrics.px(20),
        },
        drawerActiveBackgroundColor: defaultTheme.colors.cta,
        drawerActiveTintColor: defaultTheme.colors.white,
        drawerInactiveTintColor: defaultTheme.colors.white,
      }}
    >
      <Screen
        name="HomeDrawer"
        component={StackRoute}
        options={{
          title: 'Home',
          drawerIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons
              name={focused ? "movie-open" : "movie-outline"}
              size={size}
              color={color}
            />
          )
        }}
      />
      <Screen
        name="Movies"
        component={Movies}
        options={{
          title: 'Meus Filmes',
          drawerIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons
              name={focused ? "archive" : "archive-outline"}
              size={size}
              color={color}
            />
          )
        }}
      />
    </Navigator>
  );
}

