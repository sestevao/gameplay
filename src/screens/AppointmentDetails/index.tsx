import React from "react";
import { View, Text, ImageBackground, FlatList } from "react-native";
import { Fontisto } from "@expo/vector-icons";
import { BorderlessButton } from "react-native-gesture-handler";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { ButtonIcon } from "../../components/ButtonIcon";
import { ListHeader } from "../../components/ListHeader";
import { ListDivider } from "../../components/ListDivider";
import { Member } from "../../components/Member";

import BannerImg from "../../assets/banner.png";

// type GuildWidget = {
//   id: string;
//   name: string;
//   instant_invite: string;
//   members: MemberProps[];
// }

export function AppointmentDetails() {
  const members = [
    {
      id: "1",
      name: "Susana",
      avatar_url: "https://github.com/sestevao.png",
      status: "online",
    },
    {
      id: "2",
      name: "Hugo",
      avatar_url: "https://www.pinpng.com/pngs/m/369-3690533_sexy-beautiful-art-dragon-king-human-form-hd.png",
      status: "offline",
    },
    {
      id: "3",
      name: "Diego",
      avatar_url: "https://blog.rocketseat.com.br/content/images/2019/05/profile.png",
      status: "occupied",
    },
  ];

  return (
    <Background>
      <Header
        title="Details"
        action={
          <BorderlessButton>
            <Fontisto
              name="share"
              size={24}
              color={theme.colors.primary}
            />
          </BorderlessButton>
        }
      />

      <ImageBackground source={BannerImg} style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>League of Legends</Text>

          <Text style={styles.subtitle}>
            It is today that we will reach the challenger without losing a md10
            match
          </Text>
        </View>
      </ImageBackground>

      <ListHeader title="Players" subtitle="Total 3" />

      <FlatList
        data={members}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (<Member data={item} />)}
        ItemSeparatorComponent={() => <ListDivider isCentered />}
        style={styles.members}
      />

      <View style={styles.footer}>
        <ButtonIcon title="Enter Discord server" />
      </View>
    </Background>
  );
}
