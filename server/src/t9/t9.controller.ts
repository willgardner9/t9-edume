import { Body, Controller, Post } from '@nestjs/common';
import { ConvertNumbersDto } from './dto/convert-numbers.dto';
import { T9Service } from './t9.service';

@Controller('t9')
export class T9Controller {
  constructor(private t9Service: T9Service) {}

  @Post()
  convertT9NumbersToText(@Body() convertNumbersDto: ConvertNumbersDto) {
    return this.t9Service.convertT9NumbersToText(convertNumbersDto);
  }
}
