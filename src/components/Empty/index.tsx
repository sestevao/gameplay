import React from 'react';
import { View, Text } from 'react-native';

import EmptySvg from '../../assets/empty.svg';

import { styles } from './styles';

type Props = {
  title: string;
};

export function Empty({ title, ...rest }: Props) {
  return (
    <View style={styles.container} {...rest}>
      <Text style={styles.title}>{title}</Text>

      <EmptySvg width={150} height={150} />
    </View>
  );
}
