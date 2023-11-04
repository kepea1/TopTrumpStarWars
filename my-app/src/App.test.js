import {expect, test} from '@jest/globals';
import {setIntroSate} from '../src/components/app/index.js';

// write a test to check if ramdom card genartoe is make a whole rando mNumber 
// const intro = require('./components/app/index.js');

test('intro state', () => {
    expect(setIntroSate).toBe(true);
  });

 