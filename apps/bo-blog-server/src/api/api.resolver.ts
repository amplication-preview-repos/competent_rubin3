import * as graphql from "@nestjs/graphql";
import { ApiResolverBase } from "./base/api.resolver.base";
import { Api } from "./base/Api";
import { ApiService } from "./api.service";

@graphql.Resolver(() => Api)
export class ApiResolver extends ApiResolverBase {
  constructor(protected readonly service: ApiService) {
    super(service);
  }
}
