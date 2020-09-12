import { LocaleStringPipe } from './locale-string.pipe';
import * as faker from 'faker';

describe('LocaleStringPipe', () => {
  it('should create an instance', () => {
    const pipe = new LocaleStringPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return the same value if it is not a number', () => {
    const pipe = new LocaleStringPipe();
    const val = faker.random.word();
    expect(pipe.transform(val)).toBe(val);
  });

  it('should convert a long number into a more readable format', () => {
    const pipe = new LocaleStringPipe();
    const val = 50000;
    expect(pipe.transform(val)).toBe('50,000');
  });
});
