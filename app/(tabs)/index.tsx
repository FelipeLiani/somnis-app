import React from 'react';
import { StyleSheet } from 'react-native';
import { View } from '@/components/Themed';
import ForYou from '@/components/forYouConteiner';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ForYou />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //backgroundColor: 'blue',
    flex: 1,
    paddingTop: 120,
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'row'
  }
});
