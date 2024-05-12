import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { CustomersController } from './customers.controller';
import { CustomersService } from './customers.service';
import { ValidateCustomerMiddleware } from './middlewares/validate-customer.middleware';
import { ValidateCustomerAccountMiddleware } from './middlewares/validate-ex-customer-account.middleware';

@Module({
  controllers: [CustomersController],
  providers: [CustomersService],
})
export class CustomersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ValidateCustomerMiddleware, ValidateCustomerAccountMiddleware)
      .exclude(
        {
          path: 'api/customers/create',
          method: RequestMethod.POST,
        },
        {
          path: 'api/customers',
          method: RequestMethod.GET,
        },
      )
      .forRoutes
      // {
      //   path: 'customers/search/:id',
      //   method: RequestMethod.GET,
      // },
      // {
      //   path: 'customers/:id',
      //   method: RequestMethod.GET,
      // },
      ();
  }
}
