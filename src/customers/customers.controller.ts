import {
  Controller,
  Get,
  ParseIntPipe,
  HttpException,
  Param,
  HttpStatus,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dtos/CreateCustomer.dto';

@Controller('customers')
export class CustomersController {
  constructor(private customersService: CustomersService) {}
  @Get(':id')
  getCustomer(@Param('id', ParseIntPipe) id: number) {
    return this.customersService.findCustomerById(+id);
  }

  @Get('/search/:id')
  searchCustomerById(@Param('id', ParseIntPipe) id: number) {
    const customer = this.customersService.findCustomerById(id);
    if (!customer)
      throw new HttpException('Customer Not Found!', HttpStatus.BAD_REQUEST);
    return customer;
  }

  @Get()
  getAllCustomers() {
    return this.customersService.getCustomers();
  }

  @Post('create')
  @UsePipes(ValidationPipe)
  createCustomer(@Body() createCustomerDto: CreateCustomerDto) {
    this.customersService.createCustomer(createCustomerDto);
  }
}
