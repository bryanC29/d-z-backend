/* eslint-disable prettier/prettier */
import { Query, Resolver } from '@nestjs/graphql';
import { User } from 'src/common/entities/user.entity';

@Resolver(() => User)
export class UserResolver {
  @Query(() => User)
  find() {
    return [] as User[];
  }
}
