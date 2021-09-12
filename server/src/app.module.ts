import { Module } from '@nestjs/common';
import { T9Module } from './t9/t9.module';

@Module({
  imports: [T9Module],
  controllers: [],
  providers: [],
})
export class AppModule {}
