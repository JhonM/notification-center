import { union } from '../src/index';

test('basic', () => {
  expect(union(['hey'], ['you'])).toStrictEqual(['hey', 'you']);
});
