import React, { useState } from "react";
import { View, FlatList } from "react-native";

import { Guild, GuildProps } from "../../components/Guild";
import { ListDivider } from "../../components/ListDivider";
import { Load } from "../../components/Load";

import { styles } from "./styles";

type Props = {
  handleGuildSelect: (guild: GuildProps) => void;
}

export function Guilds({ handleGuildSelect }: Props) {
  const [loading, setLoading] = useState(true);

  const guilds = [
    {
      id: "1",
      name: "Legendary",
      icon: 'image.png',
      owner: true,
    },
    {
      id: "2",
      name: "Towards the top",
      icon: 'image.png',
      owner: true,
    },
    {
      id: "3",
      name: "Towards the top",
      icon: 'image.png',
      owner: true,
    },
    {
      id: "4",
      name: "Towards the top",
      icon: 'image.png',
      owner: true,
    },
    {
      id: "5",
      name: "Towards the top",
      icon: 'image.png',
      owner: true,
    },
    {
      id: "6",
      name: "Towards the top",
      icon: 'image.png',
      owner: true,
    },
  ]

  return (
    <View style={styles.container}>
      {/* {loading ? <Load /> : */}
      <FlatList
        data={guilds}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Guild
            data={item}
            onPress={() => handleGuildSelect(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <ListDivider isCentered />}
        ListHeaderComponent={() => <ListDivider isCentered />}
        contentContainerStyle={{ paddingBottom: 68, paddingTop: 103 }}
        style={styles.guilds}
      />
      {/* } */}
    </View>
  );
}
