import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Avatar, ListItem, Button, Divider } from 'react-native-elements';

interface FavoriteProps {}

const FavoritesScreen: React.FC<FavoriteProps> = () => {
  const [favorites, setFavorites] = useState([
    {
      id: 1,
      name: 'Maria Oliveira',
      photo: 'https://example.com/maria.jpg',
      skills: ['Limpeza residencial', 'Passadeira'],
      experience: '3 anos de experiência',
      availability: 'Disponível para trabalhar aos sábados',
    },
    {
      id: 2,
      name: 'Ana Silva',
      photo: 'https://example.com/ana.jpg',
      skills: ['Limpeza comercial', 'Organização de ambientes'],
      experience: '5 anos de experiência',
      availability: 'Disponível para contratos de longo prazo',
    },
    {
      id: 3,
      name: 'João Santos',
      photo: 'https://example.com/joao.jpg',
      skills: ['Limpeza pós-obra', 'Higienização de estofados'],
      experience: '4 anos de experiência',
      availability: 'Disponível para serviços emergenciais',
    },
  ]);

  const removeFavorite = (id: number) => {
    // Implementar lógica para remover da lista de favoritos
    const updatedFavorites = favorites.filter((item) => item.id !== id);
    setFavorites(updatedFavorites);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Favoritos</Text>
      {favorites.map((item, index) => (
        <View key={item.id}>
          <ListItem bottomDivider>
            <Avatar rounded source={{ uri: item.photo }} />
            <ListItem.Content>
              <ListItem.Title>{item.name}</ListItem.Title>
              <View style={styles.detailsContainer}>
                <Text style={styles.skills}>{item.skills.join(', ')}</Text>
                <Text style={styles.experience}>{item.experience}</Text>
                <Text style={styles.availability}>{item.availability}</Text>
              </View>
            </ListItem.Content>
            <Button
              title="Remover"
              onPress={() => removeFavorite(item.id)}
              buttonStyle={styles.button}
            />
          </ListItem>
          {index !== favorites.length - 1 && <Divider style={styles.divider} />}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  detailsContainer: {
    marginLeft: 10,
  },
  skills: {
    color: '#888',
    marginBottom: 5,
  },
  experience: {
    marginBottom: 5,
  },
  availability: {
    color: '#777',
  },
  button: {
    backgroundColor: 'red', 
  },
  divider: {
    marginVertical: 10,
    backgroundColor: '#ccc',
  },
});

export default FavoritesScreen;
