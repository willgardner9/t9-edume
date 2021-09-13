import { Body, Controller, Post } from '@nestjs/common';
import { T9Service } from './t9.service';

@Controller('t9')
export class T9Controller {
  constructor(private t9Service: T9Service) {}

  @Post()
  convertT9NumbersToText(@Body('numbers') numbers: string) {
    return this.t9Service.convertT9NumbersToText(numbers);
  }
}
