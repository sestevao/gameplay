import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { styles } from './styles';
import { Avatar } from '../Avatar';

import { useAuth } from '../../hooks/auth';

import { ButtonConfirm } from '../../components/ButtonConfirm';
import { ButtonCancel } from '../../components/ButtonCancel';
import { ModalSignOut } from '../../components/ModalSignOut';

export function Profile() {
  const { user, signOut } = useAuth();
  const [openModal, setOpenModal] = useState(false);

  function handleCloseModalSignOut() {
    setOpenModal(false);
  }

  function handleOpenModalSignOut() {
    setOpenModal(true);
  }

  function handleSignOut() {
    signOut();
  }


  return (
    <View style={styles.container}>
      <RectButton onPress={handleOpenModalSignOut}>
        <Avatar urlImage={user.avatar} />
      </RectButton>

      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>Hello,</Text>
          <Text style={styles.username}>{user.firstname}</Text>
        </View>

        <Text style={styles.message}>Today is victory day</Text>
      </View>

      <ModalSignOut
        visible={openModal}
        title="Do you want exit "
        titleComplement="Game"
        titleComplement2="Play "
        title2="?"
      >
        <ButtonCancel title="No" onPress={handleCloseModalSignOut} />
        <ButtonConfirm title="Yes" onPress={handleSignOut} />
      </ModalSignOut>
    </View>


  );
}
