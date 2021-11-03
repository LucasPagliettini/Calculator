import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import CircularButton from '../../components/CircularButton';
import ButtonContainerRow from '../../components/ButtonContainerRow';
import Space from '../../components/Space';
import useCalulator from '../../hooks/useCalulator';
import {colors} from '../../config/theme';
import {operations} from '../../utils/values';

const index = () => {
  const {
    firstValue,
    secondValue,
    operation,
    clear,
    backSpace,
    invertPlusMinues,
    operate,
    numberBuilder,
    calculateResult,
  } = useCalulator();

  return (
    <View style={styles.container}>
      <Text style={styles.prevValue}> {secondValue} </Text>
      {operation && <Text style={styles.prevValue}> {operation} </Text>}
      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {firstValue}
      </Text>
      <Space size={10} />
      <ButtonContainerRow>
        <CircularButton
          text={'AC'}
          onpress={clear}
          backgroundColor={colors.darkGrey}
        />
        <CircularButton
          text={'+/-'}
          onpress={invertPlusMinues}
          backgroundColor={colors.darkGrey}
        />
        <CircularButton
          text={'del'}
          onpress={backSpace}
          backgroundColor={colors.darkGrey}
        />
        <CircularButton
          text={operations.divide}
          onpress={operate}
          backgroundColor={colors.orange}
        />
      </ButtonContainerRow>
      <Space size={10} />
      <ButtonContainerRow>
        <CircularButton text={'7'} onpress={numberBuilder} />
        <CircularButton text={'8'} onpress={numberBuilder} />
        <CircularButton text={'9'} onpress={numberBuilder} />
        <CircularButton
          text={operations.multiply}
          onpress={operate}
          backgroundColor={colors.orange}
        />
      </ButtonContainerRow>
      <Space size={10} />
      <ButtonContainerRow>
        <CircularButton text={'4'} onpress={numberBuilder} />
        <CircularButton text={'5'} onpress={numberBuilder} />
        <CircularButton text={'6'} onpress={numberBuilder} />
        <CircularButton
          text={operations.subtract}
          onpress={operate}
          backgroundColor={colors.orange}
        />
      </ButtonContainerRow>
      <Space size={10} />
      <ButtonContainerRow>
        <CircularButton text={'1'} onpress={numberBuilder} />
        <CircularButton text={'2'} onpress={numberBuilder} />
        <CircularButton text={'3'} onpress={numberBuilder} />
        <CircularButton
          text={operations.add}
          onpress={operate}
          backgroundColor={colors.orange}
        />
      </ButtonContainerRow>
      <Space size={10} />
      <ButtonContainerRow>
        <CircularButton text={'0'} onpress={numberBuilder} width={180} />
        <CircularButton text={'.'} onpress={numberBuilder} />
        <CircularButton
          text={operations.calculate}
          onpress={calculateResult}
          backgroundColor={colors.orange}
        />
      </ButtonContainerRow>
      <Space size={10} />
    </View>
  );
};

export default index;
