import { Module } from "@nestjs/common";
import { ApiModuleBase } from "./base/api.module.base";
import { ApiService } from "./api.service";
import { ApiController } from "./api.controller";
import { ApiResolver } from "./api.resolver";

@Module({
  imports: [ApiModuleBase],
  controllers: [ApiController],
  providers: [ApiService, ApiResolver],
  exports: [ApiService],
})
export class ApiModule {}
