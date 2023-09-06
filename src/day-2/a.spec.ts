import { day2a } from './a';

describe('Puzzle 2 a', () => {
  test('Matches 15', async () => {
    expect(await day2a('data/day-2/a-test.txt')).toBe(15);
  });
});
