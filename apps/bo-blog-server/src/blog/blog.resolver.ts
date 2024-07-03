import * as graphql from "@nestjs/graphql";
import { BlogResolverBase } from "./base/blog.resolver.base";
import { Blog } from "./base/Blog";
import { BlogService } from "./blog.service";

@graphql.Resolver(() => Blog)
export class BlogResolver extends BlogResolverBase {
  constructor(protected readonly service: BlogService) {
    super(service);
  }
}
