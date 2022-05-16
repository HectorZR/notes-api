import 'reflect-metadata';
import { DataSource } from 'typeorm';
import ormConfigs from './ormconfig';

export const AppDataSource = new DataSource({
  ...ormConfigs(),
});
