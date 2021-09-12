import { Controller } from '@nestjs/common';
import { T9Service } from './t9.service';

@Controller('t9')
export class T9Controller {
  constructor(private t9Service: T9Service) {}
}
