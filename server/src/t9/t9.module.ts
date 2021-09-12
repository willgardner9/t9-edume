import { Module } from '@nestjs/common';
import { T9Controller } from './t9.controller';
import { T9Service } from './t9.service';

@Module({
  controllers: [T9Controller],
  providers: [T9Service],
})
export class T9Module {}
