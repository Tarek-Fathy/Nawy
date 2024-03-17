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

interface ApartmentPageProps {
  apartment: Apartment;
}

const ApartmentPage: NextPage<ApartmentPageProps> = ({ apartment }) => {
  return (
    <div>
      <h1>Apartment Details</h1>
      <h3>{apartment.title}</h3>
      <h4>{apartment.address}</h4>
      <p>{apartment.description}</p>
      <p>{apartment.buying_price}</p>
      <p>{apartment.renting_price}</p>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<ApartmentPageProps> = async (context) => {
  const { id } = context.query;
  const response = await fetch(`http://localhost:3000/apartments/${id}`);
  const apartment = await response.json();

  return {
    props: { apartment },
  };
};

export default ApartmentPage;