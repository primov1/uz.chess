import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  url:
    process.env.DATABASE_URL ||
    'postgresql://postgres:1111@localhost:5432/chess.com',
  synchronize: true,
  entities: [__dirname + '/../**/*.entity{.tpublics,.js}'],
  logging: false,
};
