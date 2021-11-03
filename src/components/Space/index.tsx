import React from 'react';
import {View} from 'react-native';

interface Props {
  size: number;
}
const index = ({size}: Props) => {
  return <View style={{marginVertical: size}} />;
};

export default index;
