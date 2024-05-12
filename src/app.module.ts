import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomersController } from './customers/customers.controller';
import { CustomersModule } from './customers/customers.module';
import { CustomersService } from './customers/customers.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    CustomersModule,
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'testuser',
      password: 'testuser123',
      database: 'tutorial_db',
      entities: [],
      synchronize: true,
    }),
  ],
  controllers: [CustomersController],
  providers: [CustomersService],
})
export class AppModule {}
