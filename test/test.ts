const testApp = require('../src/index')
const testFunc = require('../src/array')
const assert = require('assert')
const fs = require('fs')

const font = [
  '/usr/share/fonts/truetype/dejavu/DejaVuSerif-Bold.ttf: DejaVu Serif:style=Bold',
  '/usr/share/fonts/truetype/dejavu/DejaVuSansMono.ttf: DejaVu Sans Mono:style=Book',
  '/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf: DejaVu Sans:style=Book',
  '/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf: DejaVu Sans:style=Bold',
  '/usr/share/fonts/truetype/dejavu/DejaVuSansMono-Bold.ttf: DejaVu Sans Mono:style=Bold',
  '/usr/share/fonts/truetype/dejavu/DejaVuSerif.ttf: DejaVu Serif:style=Book',
  ''
]

describe('Test Function', function () {
  it('Function newline()', function () {
    const data = fs.readFileSync('./test/assets/fc-list.txt',
      { encoding: 'utf8', flag: 'r' })
    assert.strictEqual(testFunc.newline(data).length, 7)
  })
  it('Function removeEmpty()', function () {
    const data = fs.readFileSync('./test/assets/empty.txt',
      { encoding: 'utf8', flag: 'r' })
    assert.strictEqual(testFunc.removeEmpty([data]).length, 0)
  })
  it('Function select()', function () {
    assert.strictEqual(testFunc.select(font, 'Bold').length, 3)
  })
  it('Function splitter()', function () {
    assert.strictEqual(testFunc.splitter(font, ':').length, 7)
  })
})

describe('Test App', function () {
  const data = fs.readFileSync('./test/assets/fc-list.txt',
      { encoding: 'utf8', flag: 'r' })
      
  it('Options { newline:true, removeEmpty:true, select: ":style=", splitter : ": "  }', function () {
    const result = testApp(data, {
      newline: true,
      removeEmpty: true,
      select: ':style=',
      splitter: ': '
    }).length

    assert.strictEqual(result, 6)
  })
})
