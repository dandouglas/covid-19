import { HumanisePipe } from './humanise.pipe';
import * as faker from 'faker';

describe('HumanisePipe', () => {
  it('should create an instance', () => {
    const pipe = new HumanisePipe();
    expect(pipe).toBeTruthy();
  });

  it(`should return the same value if it's a string`, () => {
    const pipe = new HumanisePipe();
    const val = faker.random.number();
    expect(pipe.transform(val)).toBe(val);
  });

  it('should take a camel case string and convert it to a human readable format', () => {
    const pipe = new HumanisePipe();
    const val = 'CamelCaseString';
    expect(pipe.transform(val)).toBe('Camel Case String');
  });
});
