import { registerAs } from '@nestjs/config';
import { join } from 'path';
import * as daos from '../common/daos';

export default registerAs('database', () => ({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: Object.values(daos),
  synchronize: false,
  migrations: [join(__dirname, '../../database/migrations/*{.ts,.js}')],
}));
