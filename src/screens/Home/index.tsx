import React, { useState } from "react";
import { View, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";

import { Background } from "../../components/Background";
import { Profile } from "../../components/Profile";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { ListHeader } from "../../components/ListHeader";
import { Appointment } from "../../components/Appointment";
import { ListDivider } from "../../components/ListDivider";
import { Load } from "../../components/Load";

export function Home() {
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  const appointments = [
    {
      id: "1",
      guild: {
        id: "1",
        name: "Legendary",
        icon: null,
        owner: true,
      },
      subtitle: "League of Legends",
      category: "1",
      date: "Fri 22/06 at 8.40pm",
      description:
        "It is today that we will reach the challenger without losing a md10 match",
    },
    {
      id: "2",
      guild: {
        id: "1",
        name: "Yeah, boy",
        icon: null,
        owner: false,
      },
      subtitle: "Red Dead Redemption 2",
      category: "3",
      date: "Wed 23/06 at 7pm",
      description:
        "It is today that we will reach the challenger without losing a md10 match",
    },
    {
      id: "3",
      guild: {
        id: "1",
        name: "Towards the top",
        icon: null,
        owner: false,
      },
      subtitle: "Counter-Strike: GO",
      category: "2",
      date: "Sun 20/06 at 9am",
      description:
        "It is today that we will reach the challenger without losing a md10 match",
    },
    {
      id: "4",
      guild: {
        id: "1",
        name: "Let's burn everything",
        icon: null,
        owner: false,
      },
      subtitle: "Apex Legends",
      category: "1",
      date: "Sun 20/06 at 2.20pm",
      description:
        "It is today that we will reach the challenger without losing a md10 match",
    },
    {
      id: "5",
      guild: {
        id: "1",
        name: "Brave",
        icon: null,
        owner: false,
      },
      subtitle: "Valorant",
      category: "3",
      date: "Mon 22/06 at 4.50pm",
      description:
        "It is today that we will reach the challenger without losing a md10 match",
    },
  ];

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory("") : setCategory(categoryId);
  }

  function handleAppointmentDetails() {
    navigation.navigate("AppointmentDetails");
  }

  function handleAppointmentCreate() {
    navigation.navigate('AppointmentCreate');
  }

  return (
    <Background>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd onPress={handleAppointmentCreate} />
      </View>

      <CategorySelect
        categorySelected={category}
        setCategory={handleCategorySelect}
      />

      {/* {loading ? <Load /> : */}
        {/* <> */}
        <ListHeader title="Scheduled matches" subtitle="Total 6" />

        <FlatList
          data={appointments}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Appointment data={item} onPress={handleAppointmentDetails} />
          )}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <ListDivider />}
          contentContainerStyle={{ paddingBottom: 69 }}
          style={styles.matches}
        />
        {/* </>
      } */}
      </Background>
      );
}
