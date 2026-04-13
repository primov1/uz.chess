import { DataSource } from 'typeorm';

const AppDataSource = new DataSource({
  type: 'postgres',
  url:
    process.env.DATABASE_URL ||
    'postgresql://postgres:1111@localhost:5432/chess.com',
  entities: ['dist/**/*.intity.js'],
  synchronize: false,
  migrations: [__dirname + '/migrations/**/*{.js,.ts}'],
});

export default AppDataSource;
