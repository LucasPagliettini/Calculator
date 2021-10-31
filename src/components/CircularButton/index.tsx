import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';

interface Props {
  text: string;
  onpress: (newValue: string) => void;
  backgroundColor?: string;
  width?: number;
}

const index = ({
  text,
  onpress,
  backgroundColor = 'grey',
  width = 80,
}: Props) => {


  return (
    <TouchableOpacity
      activeOpacity={0.75}
      style={[styles.container, {backgroundColor, width}]}
      onPress={() => onpress(text)}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default index;
