import { DataSource } from 'typeorm';
import { daos } from '../../src/common/daos';
import databaseConfig from 'src/common/config/database.config';

export const dataSource = new DataSource({
  type: 'postgres',
  host: databaseConfig.host,
  port: +databaseConfig.port,
  username: databaseConfig.username,
  password: databaseConfig.password,
  database: databaseConfig.database,
  entities: daos,
  migrations: ['database/migrations/*{.ts,.js}'],
  synchronize: false,
});
