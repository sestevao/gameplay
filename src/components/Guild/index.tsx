import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, View, Text, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

import { GuildIcon } from '../GuildIcon';
import { Button } from '../Button';

export type GuildProps = {
  id: string;
  name: string;
  icon: string | null;
  owner: boolean;
};

type Props = TouchableOpacityProps & {
  data: GuildProps;
}

export function Guild({ data, ...rest }: Props) {

  function handleDeleteGuild() {
    Alert.alert("delete");

    /* const storage = await AsyncStorage.removeItem(COLLECTION_APPOINTMENTS);
    const appointments = storage ? JSON.parse(storage) : [];

    await AsyncStorage.setItem(COLLECTION_APPOINTMENTS, JSON.stringify([...appointments]));

    navigation.navigate('Home');  */
  }

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      {...rest}
    >
      <GuildIcon guildId={data.id} iconId={data.icon} />

      <View style={styles.content}>
        <View>
          <Text style={styles.title}>{data.name}</Text>

          <Text style={styles.type}>{data.owner ? 'Administrator' : 'Guest'}</Text>
        </View>

        <Button title="DEL" onPress={handleDeleteGuild} />
      </View>

      <Feather
        name='chevron-right'
        color={theme.colors.heading}
        size={24}
      />
    </TouchableOpacity>
  );
}
