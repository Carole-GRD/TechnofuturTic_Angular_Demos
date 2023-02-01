import { ToFarenheitPipe } from './to-temperature.pipe';

describe('ToFarenheitPipe', () => {
  it('create an instance', () => {
    const pipe = new ToFarenheitPipe();
    expect(pipe).toBeTruthy();
  });
});
