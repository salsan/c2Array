const arr = require('./src/array')

interface Options {
  newline: boolean;
  removeEmpty: boolean;
  select: string;
  splitter: string;
}

module.exports = function c2Array (str:string, option:Options):string[] {
  let result:string[] = (option.newline) ? arr.newline(str) : [str]

  if (option.removeEmpty) result = arr.removeEmpty(result)
  if (option.select) result = arr.select(result, option.select)
  if (option.splitter) result = arr.splitter(result, option.splitter)

  return result
}
