export interface Diarista {
    id: string;
    name: string;
    skills: string[];
    experience: string;
    availability: string;
    email: string;
    phone: string;
    city: string;
    price: number;
    rating: number;
  }
  
  export type RootStackParamList = {
    '(tabs)': undefined;
    ProfileScreen: { diarista: Diarista };
  };
  