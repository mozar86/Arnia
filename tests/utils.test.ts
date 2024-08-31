import { generateUUID } from '../utils/generateUUID';
import { generateImageUrl } from '../utils/generateImageUrl';

describe('Utils Functions', () => {
  it('should generate a valid UUID', () => {
    const uuid = generateUUID();
    expect(uuid).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/);
  });

  it('should generate a valid image URL', () => {
    const url = generateImageUrl('test.png');
    expect(url).toContain('https://example.com/images/');
    expect(url).toContain('-test.png');
  });
});
