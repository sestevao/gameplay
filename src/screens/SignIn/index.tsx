import React, { useContext } from "react";
import { View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";
import IllustrationImg from "../../assets/illustration.png";

import { Background } from "../../components/Background";
import { ButtonIcon } from "../../components/ButtonIcon";
import { useAuth } from "../../hooks/auth";

export function SignIn() {
  const navigation = useNavigation();

  const { user } = useAuth();
  // console.log(user)

  function handleSignIn() {
    navigation.navigate('Home');
  }

  return (
    <Background>
      <View style={styles.container}>
        <Image
          source={IllustrationImg}
          style={styles.image}
          resizeMode="stretch"
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

          <ButtonIcon title="Enter with Discord" onPress={handleSignIn} />
        </View>
      </View>
    </Background>
  );
}
