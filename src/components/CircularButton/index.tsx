import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import { colors } from '../../config/theme';
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
  backgroundColor = colors.grey,
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
