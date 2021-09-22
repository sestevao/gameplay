import React from 'react';
import { View, Text, Image, Alert, ActivityIndicator } from 'react-native';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import IllustrationImg from '../../assets/illustration.png';

import { Background } from '../../components/Background';
import { ButtonIcon } from '../../components/ButtonIcon';

import { useAuth } from '../../hooks/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function SignIn() {
  //AsyncStorage.clear();
  const { signIn, loading } = useAuth();

  async function handleSignIn() {
    try {
      await signIn();
    } catch (error) {
      Alert.alert("ERROR: " + error);
    }
  }

  return (
    <Background>
      <View style={styles.container}>
        <Image
          source={IllustrationImg}
          style={styles.image}
          resizeMode='stretch'
        />

        <View style={styles.content}>
          <Text style={styles.title}>
            Log in {`\n`}
            and organize {`\n`}
            your games {`\n`}
            easily
          </Text>

          <Text style={styles.subtitle}>
            Create groups to play your favorite {`\n`}
            games with your friends
          </Text>

          {loading ? <ActivityIndicator color={theme.colors.primary} /> : <ButtonIcon title='Enter with Discord' onPress={handleSignIn} />}
        </View>
      </View>
    </Background>
  );
}
