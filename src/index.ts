const arr = require('./array')

interface Options {
  newline: boolean;
  removeEmpty: boolean;
  select: string;
  splitter: string;
}

module.exports = function c2Array (str:string, option:Options):string[] {
  let result:string[] = (option.newline) ? arr.newline(str) : [str]
  result = (option.removeEmpty) ? arr.removeEmpty(result) : result
  result = (option.select) ? arr.select(result, option.select) : result
  result = (option.splitter) ? arr.splitter(result, option.splitter) : result

  return result
}
