import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { DataSource } from 'typeorm';
import { Apartments } from './models/Apartments';
import apartmentRoutes from './apartments/apartments.routes';
import { dummyApartments } from './dummydata/dummydata';

  
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/apartments', apartmentRoutes);



const appDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "test_for_nawy_task",
    password: "test_for_nawy_task",
    database: "Nawy_task_tarek",
    entities: [Apartments]
})

const apartmentRepository = appDataSource.getRepository(Apartments);

appDataSource.initialize()
    .then(async() => {
        console.log("Data Source has been initialized!")
        await apartmentRepository.save(dummyApartments)
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export { appDataSource };