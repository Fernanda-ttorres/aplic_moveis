import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Slider from "@react-native-community/slider";
import { ListItem, Icon, Button } from "react-native-elements";
import { Picker } from "@react-native-picker/picker";
import { router, useNavigation } from 'expo-router';
import { Diarista } from '@/app/types/navigation';

const mockData: Diarista[] = [
  {
    id: "1",
    name: "João Silva",
    skills: ["JavaScript", "React Native", "TypeScript", "Node.js"],
    experience: "5 anos de experiência em desenvolvimento de software.",
    availability: "Disponível para projetos freelance e contrato full-time.",
    email: "joao.silva@example.com",
    phone: "+55 11 99999-9999",
    city: "São Paulo",
    price: 150,
    rating: 4.5,
  },
  {
    id: "2",
    name: "Maria Oliveira",
    city: "Rio de Janeiro",
    price: 200,
    rating: 4.7,
    skills: ["JavaScript", "React Native", "TypeScript", "Node.js"],
    experience: "5 anos de experiência em desenvolvimento de software.",
    availability: "Disponível para projetos freelance e contrato full-time.",
    email: "joao.silva@example.com",
    phone: "+55 11 99999-9999",
  },
  {
    id: "3",
    name: "Pedro Santos",
    city: "Belo Horizonte",
    price: 100,
    rating: 4.2,
    skills: ["JavaScript", "React Native", "TypeScript", "Node.js"],
    experience: "5 anos de experiência em desenvolvimento de software.",
    availability: "Disponível para projetos freelance e contrato full-time.",
    email: "joao.silva@example.com",
    phone: "+55 11 99999-9999",
  },
  {
    id: "4",
    name: "Ana Souza",
    city: "Brasília",
    price: 180,
    rating: 4.0,
    skills: ["JavaScript", "React Native", "TypeScript", "Node.js"],
    experience: "5 anos de experiência em desenvolvimento de software.",
    availability: "Disponível para projetos freelance e contrato full-time.",
    email: "joao.silva@example.com",
    phone: "+55 11 99999-9999",
  },
  {
    id: "5",
    name: "Carlos Ferreira",
    city: "Salvador",
    price: 120,
    rating: 4.9,
    skills: ["JavaScript", "React Native", "TypeScript", "Node.js"],
    experience: "5 anos de experiência em desenvolvimento de software.",
    availability: "Disponível para projetos freelance e contrato full-time.",
    email: "joao.silva@example.com",
    phone: "+55 11 99999-9999",
  },
  {
    id: "6",
    name: "Mariana Costa",
    city: "Curitiba",
    price: 250,
    rating: 4.3,
    skills: ["JavaScript", "React Native", "TypeScript", "Node.js"],
    experience: "5 anos de experiência em desenvolvimento de software.",
    availability: "Disponível para projetos freelance e contrato full-time.",
    email: "joao.silva@example.com",
    phone: "+55 11 99999-9999",
  },
  {
    id: "7",
    name: "Ricardo Almeida",
    city: "Fortaleza",
    price: 170,
    rating: 4.6,
    skills: ["JavaScript", "React Native", "TypeScript", "Node.js"],
    experience: "5 anos de experiência em desenvolvimento de software.",
    availability: "Disponível para projetos freelance e contrato full-time.",
    email: "joao.silva@example.com",
    phone: "+55 11 99999-9999",
  },
  {
    id: "8",
    name: "Juliana Lima",
    city: "Porto Alegre",
    price: 160,
    rating: 4.4,
    skills: ["JavaScript", "React Native", "TypeScript", "Node.js"],
    experience: "5 anos de experiência em desenvolvimento de software.",
    availability: "Disponível para projetos freelance e contrato full-time.",
    email: "joao.silva@example.com",
    phone: "+55 11 99999-9999",
  },
  {
    id: "9",
    name: "Luiz Carlos",
    city: "Manaus",
    price: 140,
    rating: 4.1,
    skills: ["JavaScript", "React Native", "TypeScript", "Node.js"],
    experience: "5 anos de experiência em desenvolvimento de software.",
    availability: "Disponível para projetos freelance e contrato full-time.",
    email: "joao.silva@example.com",
    phone: "+55 11 99999-9999",
  },
  {
    id: "10",
    name: "Fernanda Oliveira",
    city: "Recife",
    price: 210,
    rating: 4.8,
    skills: ["JavaScript", "React Native", "TypeScript", "Node.js"],
    experience: "5 anos de experiência em desenvolvimento de software.",
    availability: "Disponível para projetos freelance e contrato full-time.",
    email: "joao.silva@example.com",
    phone: "+55 11 99999-9999",
  },
];

const cities = [
  "Belo Horizonte",
  "Brasília",
  "Curitiba",
  "Fortaleza",
  "Rio de Janeiro",
  "Salvador",
  "São Paulo",
];


const SearchScreen = () => {
  const [city, setCity] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(500);
  const [rating, setRating] = useState(3);
  const [filteredData, setFilteredData] = useState<Diarista[]>(mockData);


  const filterData = () => {
    const filtered = mockData.filter(
      (item) => {
        return (
          (city === "" || item.city === city) &&
          item.price >= minPrice &&
          item.price <= maxPrice &&
          item.rating >= rating
        );
      }
    );
    setFilteredData(filtered);
  };

  const handleNavigateToProfile = (item: Diarista) => {
    router.push({
      pathname: '/ProfileScreen',
      params: { item: JSON.stringify(item) }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buscar diarista</Text>
      <View style={styles.filterContainer}>
        <Text style={styles.label}>Cidade</Text>
        <Picker
          selectedValue={city}
          style={styles.picker}
          onValueChange={(itemValue) => setCity(itemValue)}
        >
          <Picker.Item label="Todas as Cidades" value="" />
          {cities.map((c, index) => (
            <Picker.Item key={index} label={c} value={c} />
          ))}
        </Picker>
        <Text style={styles.label}>
          Faixa de Preço: R${minPrice} - R${maxPrice}
        </Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={500}
          step={10}
          value={minPrice}
          onValueChange={setMinPrice}
        />
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={500}
          step={10}
          value={maxPrice}
          onValueChange={setMaxPrice}
        />
        <Text style={styles.label}>Avaliação Mínima: {rating} estrelas</Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={5}
          step={0.5}
          value={rating}
          onValueChange={setRating}
        />
        <Button title="Aplicar Filtros" onPress={filterData} />
      </View>
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() =>  handleNavigateToProfile(item)}>
            <ListItem bottomDivider>
              <Icon name="person" />
              <ListItem.Content>
                <ListItem.Title>{item.name}</ListItem.Title>
                <ListItem.Subtitle>{item.city}</ListItem.Subtitle>
                <Text>Preço: R${item.price}</Text>
                <Text>Avaliação: {item.rating} estrelas</Text>
              </ListItem.Content>
            </ListItem>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  filterContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginVertical: 10,
  },
  picker: {
    height: 50,
    width: "100%",
    marginBottom: 10,
  },
  slider: {
    width: "100%",
    height: 40,
  },
});

export default SearchScreen;
