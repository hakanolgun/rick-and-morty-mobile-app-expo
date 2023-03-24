import React from 'react';
import {Tabs} from 'expo-router';
import {FontAwesome as Icon} from '@expo/vector-icons';

const TabLayoutNav = () => {
  return (
    <Tabs screenOptions={{tabBarShowLabel: false}}>
      <Tabs.Screen
        name="episodes"
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Icon name="home" color={focused ? 'green' : 'white'} size={36} />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: 'Favorites',
          tabBarIcon: ({focused}) => (
            <Icon name="heart" color={focused ? 'green' : 'white'} size={36} />
          ),
        }}
      />
      <Tabs.Screen name="characters" options={{href: null}} />
    </Tabs>
  );
};
export default TabLayoutNav;
