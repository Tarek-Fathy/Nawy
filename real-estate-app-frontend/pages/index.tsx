import React from 'react';
import { GetServerSideProps, NextPage } from 'next';

interface Apartment {
  id: number;
  title: string;
  description: string;
  address: string;
  renting_price: number;
  buying_price: number;
}

interface ApartmentsPageProps {
  apartments: Apartment[];
}

const ApartmentsPage: NextPage<ApartmentsPageProps> = ({ apartments }) => {
  return (
    <div>
      <h1>Apartment Listing</h1>
      <ul>
        {apartments.map((apartment) => (
          <li key={apartment.id}>
            <h3>{apartment.title}</h3>
            <h4>{apartment.address}</h4>
            <p>{apartment.description}</p>
            <p>{apartment.buying_price}</p>
            <p>{apartment.renting_price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<ApartmentsPageProps> = async () => {
  const response = await fetch('http://localhost:3000/apartments');
  const apartments = await response.json();

  return {
    props: { apartments },
  };
};

export default ApartmentsPage;