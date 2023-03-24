import React from 'react';
import {Pressable, View} from 'react-native';
import {Link, Tabs, useRouter} from 'expo-router';
import {FontAwesome as Icon} from '@expo/vector-icons';

const TabLayoutNav = () => {
  const router = useRouter();
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        tabBarShowLabel: false,
        headerStyle: {},
        headerTitleStyle: {},
        headerTitleAlign: 'center',
        headerTintColor: '#fff',
      }}>
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
      <Tabs.Screen
        name="characters"
        options={{
          href: null,
          headerShown: true,
          title: 'Character',
          headerLeft: () => (
            <Pressable style={{paddingHorizontal: 10}} onPress={() => router.back()}>
              <Icon name="arrow-left" color="white" size={24} />
            </Pressable>
          ),
        }}
      />
    </Tabs>
  );
};
export default TabLayoutNav;
