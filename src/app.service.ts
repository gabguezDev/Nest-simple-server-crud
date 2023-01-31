import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World modified!';
  }
  async createUser(): Promise<any> {
    const user = await prisma.users.create({
      data: {
        email: 'elsa@prisma.io',
        name: 'Elsa Prisma',
      },
    });
    return user;
  }
}
