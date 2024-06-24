import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Avatar, ListItem, Rating, Divider } from 'react-native-elements';

interface HistoryProps {}

const HistoryScreen: React.FC<HistoryProps> = () => {
  const [history, setHistory] = useState([
    {
      id: 1,
      dateTime: '22/06/2024 10:00',
      cleanerName: 'Maria Oliveira',
      cleanerPhoto: 'https://example.com/maria.jpg',
      rating: 4,
      reviewed: true,
      serviceType: 'Limpeza Residencial',
    },
    {
      id: 2,
      dateTime: '20/06/2024 14:30',
      cleanerName: 'Ana Silva',
      cleanerPhoto: 'https://example.com/ana.jpg',
      rating: 5,
      reviewed: true,
      serviceType: 'Limpeza Comercial',
    },
    {
      id: 3,
      dateTime: '18/06/2024 09:00',
      cleanerName: 'João Santos',
      cleanerPhoto: 'https://example.com/joao.jpg',
      rating: null,
      reviewed: false,
      serviceType: 'Limpeza Pós-Obra',
    },
  ]);

  const handleReview = (id: number, rating: number) => {
    // Implementar lógica para avaliar o serviço
    const updatedHistory = history.map((item) =>
      item.id === id ? { ...item, rating, reviewed: true } : item
    );
    setHistory(updatedHistory);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Histórico de Atendimentos</Text>
      {history.map((item, index) => (
        <View key={item.id}>
          <ListItem bottomDivider>
            <Avatar rounded source={{ uri: item.cleanerPhoto }} />
            <ListItem.Content>
              <ListItem.Title>{item.cleanerName}</ListItem.Title>
              <View style={styles.detailsContainer}>
                <Text style={styles.serviceType}>{item.serviceType}</Text>
                <Text style={styles.dateTime}>{item.dateTime}</Text>
              </View>
            </ListItem.Content>
            <View style={styles.ratingContainer}>
              {item.reviewed ? (
                <Rating readonly imageSize={20} startingValue={item.rating} />
              ) : (
                <Rating
                  onFinishRating={(rating: number) => handleReview(item.id, rating)}
                  imageSize={20}
                  startingValue={null}
                />
              )}
            </View>
          </ListItem>
          {index !== history.length - 1 && <Divider style={styles.divider} />}
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
  dateTime: {
    color: '#888',
    marginBottom: 5,
  },
  serviceType: {
    color: '#777',
    marginBottom: 5,
  },
  ratingContainer: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  divider: {
    marginVertical: 10,
    backgroundColor: '#ccc',
  },
});

export default HistoryScreen;
