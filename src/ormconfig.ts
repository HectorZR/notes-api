import { DataSourceOptions } from 'typeorm';

const ormConfigs: DataSourceOptions = {
  type: 'postgres',
  url: 'postgres://arzvxxdvntvmyn:b94be777efae22bf42a5e3fe1b08f81dee53b5059738aa26f550a99dd1a62691@ec2-54-164-40-66.compute-1.amazonaws.com:5432/dficoct3516c77',
  migrations: ['./migrations/**/*{.ts,.js}'],
  entities: ['./entity/**/*.ts'],
};

export default ormConfigs;
