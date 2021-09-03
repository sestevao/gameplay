import React from "react";
import { Image, View } from "react-native";

import DiscordSvg from '../../assets/discord.svg';
import { styles } from "./styles";

export function GuildIcon() {
  const uri =
    "https://e7.pngegg.com/pngimages/618/889/png-clipart-counter-strike-global-offensive-logo-stencil-art-font-cs-go-cloud-9-angle-logo-thumbnail.png";

  return (
    <View style={styles.container}>
      <Image
        source={{ uri }}
        style={styles.image}
        resizeMode="cover"
      />
    </View>
  );
}
