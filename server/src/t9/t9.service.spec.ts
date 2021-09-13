import { Test } from '@nestjs/testing';
import { T9Service } from './t9.service';

const mockConvertNumbersDto = {
  numbers: '23',
};

describe('t9Service', () => {
  let t9Service: T9Service;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [T9Service],
    }).compile();

    t9Service = module.get(T9Service);
  });

  describe('convertT9NumbersToText', () => {
    it('converts t9 input numbers to text', () => {
      expect(t9Service.convertT9NumbersToText(mockConvertNumbersDto)).toEqual({
        '0': 'ad',
        '1': 'ae',
        '2': 'af',
        '3': 'bd',
        '4': 'be',
        '5': 'bf',
        '6': 'cd',
        '7': 'ce',
        '8': 'cf',
      });
    });
  });
});
