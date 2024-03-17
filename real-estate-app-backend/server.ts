import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { DataSource } from 'typeorm';
import { Apartment } from './models/Apartment';
import apartmentRoutes from './apartments/apartments.routes';

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/apartments', apartmentRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


const appDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "test",
    password: "test",
    database: "Nawy_task_tarek",
    entities: [Apartment]
})

appDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
})


export { appDataSource };