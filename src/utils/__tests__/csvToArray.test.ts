import { csvToArray } from '../csvToArray';

describe('csvToArray function', () => {
  it('converts valid csv into an array of objects', () => {
    const expectedReslut = [
      {
        id: '1',
        title: 'test',
      },
    ];
    const actualResult = csvToArray('title;id\ntest;1');

    expect(actualResult).toStrictEqual(expectedReslut);
  });
});
