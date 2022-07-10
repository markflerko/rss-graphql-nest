import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { UserType } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly httpService: HttpService) {}

  async getUserById(id: string): Promise<AxiosResponse<UserType[]>> {
    const token = await this.getToken();

    return await this.httpService.axiosRef
      .get(`${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => res.data);
  }

  async getToken(): Promise<string> {
    return await this.httpService.axiosRef
      .post('login', {
        password: '12345678',
        email: 'markflerko@gmail.com',
      })
      .then((res) => res.data?.jwt);
  }
}
