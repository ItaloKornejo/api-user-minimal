import { DataSource } from 'typeorm';
import { User } from './entities/user.entity';

require('dotenv').config()

export const appDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  // ssl: { rejectedUnauthorized: true },
  entities: [ User],
  logging: true,
  // synchronize: true
});


