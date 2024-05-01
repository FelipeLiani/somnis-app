import React from 'react';
import { View, Text } from './Themed';
import { StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import BigVideoItem from './bigVideoItem';

export default function forYou() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Para você</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.verTodosText}>Ver todos</Text>
      </TouchableOpacity>
      <ScrollView contentContainerStyle={styles.videoContainer}>
        <BigVideoItem />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 380,
    width: '100%',
    //backgroundColor: 'blue'
  },
  title: {
    margin: 14,
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  button: {
    alignItems: 'flex-end',
    marginRight: 22,
    marginTop: -22,
    marginBottom: 8,
  },
  verTodosText: {
    color:'#61C1C9'
  },
  videoContainer: {
    alignItems: 'center',
  },
  videoItem: {
    backgroundColor: 'red',
    height: 200,
    width: 346,
    borderRadius: 20,
  },
});
