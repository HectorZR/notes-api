import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppDataSource } from './data-source';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  AppDataSource.initialize().then(async (dataSource) => {
    await dataSource.createQueryRunner().createTable({
      name: 'notes',
      columns: [
        // @ts-expect-error only required properties are defined
        {
          name: 'id',
          isPrimary: true,
          isUnique: true,
          type: 'int',
          isGenerated: true,
          isNullable: false,
        },
        // @ts-expect-error only required properties are defined
        {
          name: 'content',
          type: 'varchar',
          isNullable: false,
          length: '2000',
        },
        // @ts-expect-error only required properties are defined
        {
          name: 'created_at',
          type: 'timestamp',
          isNullable: false,
        },
        // @ts-expect-error only required properties are defined
        {
          name: 'updated_at',
          type: 'timestamp',
          isNullable: true,
        },
      ],
    });
  });
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
