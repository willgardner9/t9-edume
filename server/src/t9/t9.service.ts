import { BadRequestException, Injectable } from '@nestjs/common';
import { ConverNumbersDto } from './dto/convert-numbers.dto';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class T9Service {
  convertT9NumbersToText(convertNumbersDto: ConverNumbersDto) {
    const { numbers } = convertNumbersDto;

    if (numbers.includes('0') || numbers.includes('1')) {
      throw new BadRequestException(`You cannot convert a '0' or '1' in t9!`);
    }

    const t9ConversionChart = {
      '2': ['a', 'b', 'c'],
      '3': ['d', 'e', 'f'],
      '4': ['g', 'h', 'i'],
      '5': ['j', 'k', 'l'],
      '6': ['m', 'n', 'o'],
      '7': ['p', 'q', 'r', 's'],
      '8': ['t', 'u', 'v'],
      '9': ['w', 'x', 'y', 'z'],
    };

    const t9Converter = (numbers) => {
      //  convert numbers into an array of individual numbers
      const individualNumbers = numbers.split('');
      //  map individual numbers against the conversion chart so
      //  each number is becomes a nested array of its possible t9 values
      const individualNumbersAsLetters = individualNumbers.map(
        (number) => t9ConversionChart[number],
      );
      //  reduce: execute the flatMap and map array methods on
      //  each element of individualNumbersAsLetters in turn,
      //  i.e. letter by letter. For example, for numbers = "23",
      // on the first iteration of the reducer, previous is
      //  ["a", "b", "c"] and current is ["d", "e", "f"]
      return individualNumbersAsLetters.reduce((previous, current) => {
        //  flatMap: executes the map array method on each element
        //  of previous in turn, i.e. letter by letter. For example,
        //  for numbers = "23", on the first iteration of the reducer,
        //  previous is "a"
        return previous.flatMap((previous) => {
          //  map: concatenates previous and current,
          //  as the reducer function iterates over each item
          //  in individualNumbersAsLetters, all possible
          //  combinations of sequential letters are generated.
          //  For example, for numbers = '23', on the first iteration
          //  of the reducer, current is 'd' and, as per above,
          //  previous is 'a', therefore 'ad' will be the first
          //  value in the reduced array. These array methods then
          //  execute recursively for all the combinations with 'a',
          //  then 'b', then 'c'
          return current.map((current) => {
            return `${previous}${current}`;
          });
        });
      });
    };

    const allCombinations = t9Converter(numbers);

    //  load https://github.com/first20hours/google-10000-english as 'dictionary' of common words
    //  as this is a list of common combinations of characters in the English language,
    //  not all entries are necessarily in the dictionary
    const dictionary = fs.readFileSync(
      path.resolve(__dirname, 'dictionary.txt'),
      { encoding: 'utf8', flag: 'r' },
    );

    //  convert dictionary to array
    const dictionaryArray = dictionary.split('\n');

    //  init empty array to populate with matches
    const filteredCombinations = [];

    //  iterate through possible combinations and check to see if they are in the dictionary file
    allCombinations.forEach((combination) => {
      const regex = new RegExp(`^${combination}$`);
      const isAWord = dictionaryArray.filter((word) => word.match(regex));
      isAWord.length ? filteredCombinations.push(combination) : '';
    });

    return {
      allCombinations: { ...[...allCombinations] },
      filteredCombinations: { ...[...filteredCombinations] },
    };
  }
}
