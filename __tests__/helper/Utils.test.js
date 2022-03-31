import {indexToAlpha} from '../../src/helper/utils';

test('Get Charactor test', () => {
    const englishLetter = indexToAlpha(2);
    expect("C").toBe(englishLetter); 
    
  });