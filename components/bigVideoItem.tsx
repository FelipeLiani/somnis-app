import React from 'react';
import { View } from './Themed';
import { StyleSheet, Image } from 'react-native';

export default function BigVideoItem() {
  return (
    <View>
      <Image
        style={styles.image}
        source={require('../assets/images/thumbnail.jpg')}
        resizeMode='cover'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 346,
    borderRadius: 20
  }

});
