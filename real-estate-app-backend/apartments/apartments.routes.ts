import express from 'express';
import { Apartment } from '../models/Apartment';
import  {appDataSource}  from '../server'

const router = express.Router();
const apartmentRepository = appDataSource.getRepository(Apartment);

router.get('/', async (req, res) => {
  const apartments = await apartmentRepository.find();
  res.json(apartments);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const apartment = await apartmentRepository.findOne(id);
  if (!apartment) {
    return res.status(404).json({ message: 'Apartment not found' });
  }
  res.json(apartment);
});

router.post('/', async (req, res) => {
  const { title, description, address, renting_price, buying_price } = req.body;
  const apartment = new Apartment();
  apartment.title = title;
  apartment.description = description;
  apartment.address = address;
  apartment.renting_price = renting_price;
  apartment.buying_price = buying_price;

  try {
    const savedApartment = await apartmentRepository.save(apartment);
    res.status(201).json(savedApartment);
  } catch (error) {
    res.status(400).json({ message: 'Failed to add apartment' });
  }
});

export default router;