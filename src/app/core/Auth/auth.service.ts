import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './auth.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  users: User[] = [
    { name: 'Pedro', email: 'pedrojose0272@gmail.com', password: '123456' },
  ];

  register(user: User) {
    this.users.push(user);

    return {
      status: 201,
      data: user,
      msg: 'User Created',
    };
  }

  login({ email, password }: any) {
    console.log(email, password);
    const found = this.users.find(
      (user) => user.email == email && password == user.password
    );

    console.log(found);
    if (found)
      return {
        status: 200,
        data: found,
        msg: 'Login successful',
      };
    return {
      status: 404,
      error: 'user not found',
    };
  }
}
