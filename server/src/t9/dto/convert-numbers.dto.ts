import { IsNotEmpty } from 'class-validator';

export class ConvertNumbersDto {
  @IsNotEmpty()
  numbers: string;
}
