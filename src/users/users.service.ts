import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { User } from './dto/create-user.dto';
import { LoginInput } from './inputs/login.input';
import { UserInput } from './inputs/user.input';

@Injectable()
export class UsersService {
  constructor(private readonly httpService: HttpService) {}

  async register(input: UserInput): Promise<AxiosResponse<User>> {
    return await this.httpService.axiosRef
      .post('register', input)
      .then((res) => res.data);
  }

  async getUserById(id: string): Promise<AxiosResponse<User>> {
    const token = await this.getToken();

    return await this.httpService.axiosRef
      .get(`${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => res.data);
  }

  async getToken(input: LoginInput = null): Promise<string> {
    if (input === null) {
      input = {
        password: '12345678',
        email: 'markflerko@gmail.com',
      };
    }

    return await this.httpService.axiosRef
      .post('login', input)
      .then((res) => res.data?.jwt);
  }
}
