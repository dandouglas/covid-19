import { LocaleStringPipe } from './locale-string.pipe';

describe('LocaleStringPipe', () => {
  it('create an instance', () => {
    const pipe = new LocaleStringPipe();
    expect(pipe).toBeTruthy();
  });
});
