import React from 'react';
import {StyleSheet, View} from 'react-native';

const index = ({children}: {children: any}) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
});

export default index;
