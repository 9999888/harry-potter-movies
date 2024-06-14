import { MinutesToHourConverterPipe } from './minutes-to-hour-converter.pipe';

describe('MinutesToHourConverterPipe', () => {
  it('create an instance', () => {
    const pipe = new MinutesToHourConverterPipe();
    expect(pipe).toBeTruthy();
  });
});
