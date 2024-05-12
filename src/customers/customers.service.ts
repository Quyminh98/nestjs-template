import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dtos/CreateCustomer.dto';

@Injectable()
export class CustomersService {
  private customers = [
    {
      id: 1,
      email: 'minhquy@gmail.com',
      name: 'Quy',
    },
    {
      id: 2,
      email: 'minhduc@gmail.com',
      name: 'Duc',
    },
    {
      id: 1,
      email: 'ducmanh@gmail.com',
      name: 'Manh',
    },
  ];
  findCustomerById(id: number) {
    return this.customers.find((customer) => customer.id === id);
  }
  createCustomer(createCustomerDto: CreateCustomerDto) {
    this.customers.push(createCustomerDto);
  }
  getCustomers() {
    return this.customers;
  }
}
