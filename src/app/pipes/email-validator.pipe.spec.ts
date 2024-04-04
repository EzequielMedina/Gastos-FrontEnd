import { EmailValidatorPipe } from './email-validator.pipe';

describe('EmailValidatorPipe', () => {
  it('create an instance', () => {
    const pipe = new EmailValidatorPipe();
    expect(pipe).toBeTruthy();
  });
});
