import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ApiServiceBase } from "./base/api.service.base";

@Injectable()
export class ApiService extends ApiServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
