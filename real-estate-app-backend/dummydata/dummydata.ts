import { Apartments } from '../models/Apartments';

export const dummyApartments: Apartments[] = [
  {
    id: 1,
    title: 'Apartment 1',
    description: 'First apt.',
    address: "1st on 1st street",
    renting_price: 15000,
    buying_price: 150000
  },
  {
    id: 2,
    title: 'Apartment 2',
    description: 'Second apt.',
    address: "2nd on 2nd street",
    renting_price: 20000,
    buying_price: 200000
  },
  {
    id: 3,
    title: 'Apartment 3',
    description: 'Third apt.',
    address: "3rd on 3rd street",
    renting_price: 25000,
    buying_price: 250000
  },
  {
    id: 4,
    title: 'Apartment 4',
    description: '4th apt.',
    address: "4th on 4th street",
    renting_price: 30000,
    buying_price: 300000
  }
];