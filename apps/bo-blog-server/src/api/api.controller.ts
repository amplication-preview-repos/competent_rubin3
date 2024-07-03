import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ApiService } from "./api.service";
import { ApiControllerBase } from "./base/api.controller.base";

@swagger.ApiTags("apis")
@common.Controller("apis")
export class ApiController extends ApiControllerBase {
  constructor(protected readonly service: ApiService) {
    super(service);
  }
}
