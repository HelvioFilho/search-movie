import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ParamListBase } from '@react-navigation/native';

import { Home, Movies } from '../screens';

export function AppRoutes() {
  const { Navigator, Screen } = createDrawerNavigator<ParamListBase>();

  return (
    <Navigator>
      <Screen name="Home" component={Home} />
      <Screen name="Movies" component={Movies} />
    </Navigator>
  );
}

