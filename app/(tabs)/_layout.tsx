import React from 'react';

import { MaterialIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { StyleSheet } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from 'react-native';


function TabBarIcon(props: {
  name: React.ComponentProps<typeof MaterialIcons>['name'];
  color: string;
}) {
  return <MaterialIcons size={34} style={{ marginBottom: -30 }} {...props} />
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar
      }}>
      <Tabs.Screen
        name='index'
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name='home' color={color} />
        }}
      />
      <Tabs.Screen
        name='search'
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name='search' color={color} />,
        }}
      />
      <Tabs.Screen
        name='library'
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name='my-library-music' color={color} />,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    height: 80,
    margin: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30
  }
})
