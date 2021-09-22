import React, { ReactNode } from 'react';
import { View, Text, Modal, ModalProps } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

type Props = ModalProps & {
  title: string;
  title2: string;
  titleComplement: string;
  titleComplement2: string;
  children: ReactNode;
}

export function ModalSignOut({ title, title2, titleComplement, titleComplement2, children, ...rest }: Props) {
  const { secondary80, secondary100 } = theme.colors;

  return (
    <Modal
      transparent
      animationType="fade"
      statusBarTranslucent
      {...rest}
    >
      <View style={styles.overlay}>
        <LinearGradient colors={[secondary80, secondary100]}>
          <View style={styles.container}>
            <View style={styles.title}>
              <Text style={styles.titleDetails}>
                {title}
              </Text>

              <Text style={styles.titleComponentDetails}>
                {titleComplement}
              </Text>

              <Text style={styles.titleComponentDetails2}>
                {titleComplement2}
              </Text>

              <Text style={styles.titleDetails}>
                {title2}
              </Text>
            </View>

            <View style={styles.buttonsContainer}>
              {children}
            </View>
          </View>
        </LinearGradient>
      </View>
    </Modal>
  );
}