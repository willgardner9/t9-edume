import { IsNotEmpty } from 'class-validator';

export class ConverNumbersDto {
  @IsNotEmpty()
  numbers: string;
}
