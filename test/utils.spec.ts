import { describe, expect, it } from 'vitest';

import { toExpressLikePath, removeLastSlash } from '../src/utils';

describe('utils:toExpressLikePath', () => {
  it('should transform to express like path', () => {
    expect(toExpressLikePath('/a/b/{c_d}')).toEqual('/a/b/:cD');
    expect(toExpressLikePath('/{a}/{b}/{c}')).toEqual('/:a/:b/:c');
  });

  it('should return same format path', () => {
    const f1 = 'a/b/c/';
    const f2 = 'a/b/c';

    expect(removeLastSlash(f1)).toEqual('a/b/c');
    expect(removeLastSlash(f2)).toEqual('a/b/c');
  });
});
