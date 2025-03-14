/* eslint-disable prettier/prettier */
import { MongooseModuleOptions } from '@nestjs/mongoose';

export const mongoConfiguration: MongooseModuleOptions = {
  uri: 'mongodb://localhost:27017/dz',
};
