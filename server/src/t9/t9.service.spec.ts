import { Test } from '@nestjs/testing';
import { T9Service } from './t9.service';

const mockConvertNumbersDto23 = {
  numbers: '23',
};

const mockConvertNumbersDto230 = {
  numbers: '230',
};

const mockConvertNumbersDto231 = {
  numbers: '231',
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
      expect(t9Service.convertT9NumbersToText(mockConvertNumbersDto23)).toEqual(
        {
          allCombinations: {
            '0': 'ad',
            '1': 'ae',
            '2': 'af',
            '3': 'bd',
            '4': 'be',
            '5': 'bf',
            '6': 'cd',
            '7': 'ce',
            '8': 'cf',
          },
          filteredCombinations: {
            '0': 'ad',
            '1': 'ae',
            '2': 'af',
            '3': 'bd',
            '4': 'be',
            '5': 'cd',
            '6': 'ce',
            '7': 'cf',
          },
        },
      );
    });
    it('throws an error when inputting a 0', () => {
      expect(() =>
        t9Service.convertT9NumbersToText(mockConvertNumbersDto230),
      ).toThrowError();
    });
    it('throws an error when inputting a 1', () => {
      expect(() =>
        t9Service.convertT9NumbersToText(mockConvertNumbersDto231),
      ).toThrowError();
    });
  });
});
