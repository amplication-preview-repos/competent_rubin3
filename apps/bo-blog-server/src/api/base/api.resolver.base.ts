/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Api } from "./Api";
import { ApiCountArgs } from "./ApiCountArgs";
import { ApiFindManyArgs } from "./ApiFindManyArgs";
import { ApiFindUniqueArgs } from "./ApiFindUniqueArgs";
import { CreateApiArgs } from "./CreateApiArgs";
import { UpdateApiArgs } from "./UpdateApiArgs";
import { DeleteApiArgs } from "./DeleteApiArgs";
import { User } from "../../user/base/User";
import { ApiService } from "../api.service";
@graphql.Resolver(() => Api)
export class ApiResolverBase {
  constructor(protected readonly service: ApiService) {}

  async _apisMeta(
    @graphql.Args() args: ApiCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Api])
  async apis(@graphql.Args() args: ApiFindManyArgs): Promise<Api[]> {
    return this.service.apis(args);
  }

  @graphql.Query(() => Api, { nullable: true })
  async api(@graphql.Args() args: ApiFindUniqueArgs): Promise<Api | null> {
    const result = await this.service.api(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Api)
  async createApi(@graphql.Args() args: CreateApiArgs): Promise<Api> {
    return await this.service.createApi({
      ...args,
      data: {
        ...args.data,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Api)
  async updateApi(@graphql.Args() args: UpdateApiArgs): Promise<Api | null> {
    try {
      return await this.service.updateApi({
        ...args,
        data: {
          ...args.data,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Api)
  async deleteApi(@graphql.Args() args: DeleteApiArgs): Promise<Api | null> {
    try {
      return await this.service.deleteApi(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  async getUser(@graphql.Parent() parent: Api): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}