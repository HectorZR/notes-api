import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: process.env.DATABASE_NAME,
      password: process.env.DATABASE_PASSWORD,
      username: process.env.DATABASE_USER,
      port: Number(process.env.DATABASE_PORT),
      host: process.env.DATABASE_HOST,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
