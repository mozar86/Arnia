import { uploadSchema } from '../schemas/uploadSchema';

describe('Upload Schema', () => {
  it('should validate a correct payload', async () => {
    const payload = {
      image: 'data:image/png;base64,somebase64string',
      customer_code: '12345',
      measure_datetime: new Date(),
      measure_type: 'WATER',
    };

    await expect(uploadSchema.validate(payload)).resolves.toBeTruthy();
  });

  it('should throw an error for invalid payload', async () => {
    const payload = {
      image: 'invalidimageformat',
      customer_code: '',
      measure_datetime: '',
      measure_type: 'INVALID_TYPE',
    };

    await expect(uploadSchema.validate(payload)).rejects.toThrow();
  });
});
