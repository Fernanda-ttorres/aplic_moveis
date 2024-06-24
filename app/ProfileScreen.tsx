import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { Avatar, ListItem, Icon, Button } from 'react-native-elements';
import { router, useLocalSearchParams } from 'expo-router';
import { Diarista } from './types/navigation';

const ProfileScreen: React.FC = () => {

  const { item } = useLocalSearchParams();
  const diarista: Diarista = JSON.parse(item as string);

  const handleNavigateToBooking = () => {
    router.push({
      pathname: '/BookingScreen',
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Avatar rounded size="xlarge" source={{ uri: " " }} />
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{diarista.name}</Text>
          <Icon name="heart-o" type="font-awesome" size={20}  containerStyle={styles.heartIcon} />
        </View>
        <Text style={styles.reviews}>Avaliações: {diarista.rating}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Habilidades</Text>
        {diarista.skills.map((skill: string,  index: React.Key ) => (
          <ListItem key={index} bottomDivider>
            <Icon name="check" type="font-awesome" />
            <ListItem.Content>
              <ListItem.Title>{skill}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Experiência</Text>
        <Text style={styles.sectionContent}>{diarista.experience}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Disponibilidade</Text>
        <Text style={styles.sectionContent}>{diarista.availability}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contato</Text>
        <Text style={styles.sectionContent}>Email: {diarista.email}</Text>
        <Text style={styles.sectionContent}>Telefone: {diarista.phone}</Text>
        <Button
          title="Contratar"
          onPress={handleNavigateToBooking}
          buttonStyle={styles.button}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  heartIcon: {
    marginLeft: 10,
    marginTop: 10,
  },
  reviews: {
    fontSize: 18,
    color: '#777',
    marginTop: 5,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionContent: {
    fontSize: 16,
    color: '#555',
  },
  button: {
    backgroundColor: '#007bff',
    marginTop: 10,
  },
});

export default ProfileScreen;
