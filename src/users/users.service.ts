import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { SerializedUser, User } from './types/index';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      username: 'Quy',
      password: '123',
    },
    {
      id: 2,
      username: 'Duc',
      password: '123',
    },
    {
      id: 3,
      username: 'Manh',
      password: '123',
    },
  ];
  getUsers() {
    // return this.users.map((user) => plainToClass(SerializedUser, user));
    return this.users.map((user) => new SerializedUser(user));
  }

  getUserByUsername(username: string) {
    return this.users.find((user) => user.username === username);
  }

  getUserById(id: number) {
    return this.users.find((user) => user.id === id);
  }
}
