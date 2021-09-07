import React from "react";
import { View, Text } from "react-native";

import { styles } from "./styles";
import { Avatar } from "../Avatar";

import { useAuth } from "../../hooks/auth";

export function Profile() {
  const { user } = useAuth();

  return (
    <View style={styles.container}>
      <Avatar urlImage={user.avatar} />

      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>Hello,</Text>
          <Text style={styles.username}>{user.firstName}</Text>
        </View>

        <Text style={styles.message}>Today is victory day</Text>
      </View>
    </View>
  );
}
