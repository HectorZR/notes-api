import { DataSourceOptions } from 'typeorm';

const ormConfigs: () => DataSourceOptions = () => ({
  type: 'postgres',
  database: process.env.DATABASE_NAME,
  password: process.env.DATABASE_PASSWORD,
  username: process.env.DATABASE_USER,
  port: Number(process.env.DATABASE_PORT),
  host: process.env.DATABASE_HOST,
  migrations: ['./migrations/**/*{.ts,.js}'],
  entities: ['./entity/**/*.ts'],
  ssl: true,
});

export default ormConfigs;
