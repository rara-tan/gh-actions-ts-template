import {hello} from '../src/hello'

describe('hello test', () => {
  test('OK', async () => {
    const res = hello("yossy")
    expect(res).toBe("Hello yossy!")
  })
})
