import { confirmSchema } from '../schemas/confirmSchema';

describe('Confirm Schema', () => {
  it('should validate a correct payload', async () => {
    const payload = {
      measure_uuid: 'some-uuid',
      confirmed_value: 123,
    };

    await expect(confirmSchema.validate(payload)).resolves.toBeTruthy();
  });

  it('should throw an error for invalid payload', async () => {
    const payload = {
      measure_uuid: '',
      confirmed_value: -123,
    };

    await expect(confirmSchema.validate(payload)).rejects.toThrow();
  });
});
