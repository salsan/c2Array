const testArr = require('.././src/array.ts')
const assert = require('assert')
const fs = require('fs')

describe('Test Function', function () {
  const font = [
    '/usr/share/fonts/truetype/dejavu/DejaVuSerif-Bold.ttf: DejaVu Serif:style=Bold',
    '/usr/share/fonts/truetype/dejavu/DejaVuSansMono.ttf: DejaVu Sans Mono:style=Book',
    '/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf: DejaVu Sans:style=Book',
    '/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf: DejaVu Sans:style=Bold',
    '/usr/share/fonts/truetype/dejavu/DejaVuSansMono-Bold.ttf: DejaVu Sans Mono:style=Bold',
    '/usr/share/fonts/truetype/dejavu/DejaVuSerif.ttf: DejaVu Serif:style=Book',
    ''
  ]

  it('Function newline()', function () {
    const data = fs.readFileSync('./test/assets/fc-list.txt',
      { encoding: 'utf8', flag: 'r' })
    assert.strictEqual(testArr.newline(data).length, 7)
  })
  it('Function removeEmpty()', function () {
    const data = fs.readFileSync('./test/assets/empty.txt',
      { encoding: 'utf8', flag: 'r' })
    assert.strictEqual(testArr.removeEmpty([data]).length, 0)
  })
  it('Function select()', function () {
    assert.strictEqual(testArr.select(font, 'Bold').length, 3)
  })
  it('Function splitter()', function () {
    assert.strictEqual(testArr.splitter(font, ':').length, 7)
  })
})
