import {hello} from '../src/main'

describe('hello test', () => {
  test('OK', async () => {
    const res = hello("yossy")
    expect(res).toBe("Hello yossy!")
  })
})
