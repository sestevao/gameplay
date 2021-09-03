import React from "react";
import { Text, View } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";

import { theme } from "../../global/styles/theme";
import { styles } from "./styles";
import PlayerSvg from "../../assets/player.svg";
import CalendarSvg from "../../assets/calendar.svg";

import { categories } from "../../utils/categories";
import { GuildIcon } from "../GuildIcon";

import { GuildProps } from '../Guild';

export type AppointmentProps = {
  id: string;
  guild: GuildProps;
  subtitle: string;
  category: string;
  date: string;
  description: string;
};

type Props = RectButtonProps & {
  data: AppointmentProps;
};

export function Appointment({ data, ...rest }: Props) {
  const [category] = categories.filter((item) => item.id === data.category);
  const { primary, on, secondary50, secondary70 } = theme.colors;
  const { owner } = data.guild;

  return (
    <RectButton {...rest}>
      <View style={styles.container}>
        <LinearGradient
          style={styles.guildIconContainer}
          colors={[secondary50, secondary70]}
        >
          <GuildIcon />
        </LinearGradient>

        <View style={styles.content}>
          <View style={styles.header}>
            <View style={styles.headerTitle}>
              <Text style={styles.title}>{data.guild.name}</Text>
              <Text style={styles.subtitle}>{data.subtitle}</Text>
            </View>
            <Text style={styles.category}>{category.title}</Text>
          </View>

          <View style={styles.footer}>
            <View style={styles.dateInfo}>
              <CalendarSvg />

              <Text style={styles.date}>{data.date}</Text>
            </View>

            <View style={styles.playersInfo}>
              <PlayerSvg fill={owner ? primary : on} />

              <Text style={[styles.player, { color: owner ? primary : on }]}>
                {owner ? "Host" : "Visitor"}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </RectButton>
  );
}
