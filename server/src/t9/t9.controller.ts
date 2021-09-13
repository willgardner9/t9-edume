import { Body, Controller, Post } from '@nestjs/common';
import { ConverNumbersDto } from './dto/convert-numbers.dto';
import { T9Service } from './t9.service';

@Controller('t9')
export class T9Controller {
  constructor(private t9Service: T9Service) {}

  @Post()
  convertT9NumbersToText(@Body() convertNumbersDto: ConverNumbersDto) {
    return this.t9Service.convertT9NumbersToText(convertNumbersDto);
  }
}
