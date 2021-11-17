const fn = require('./array')

interface Options {
  newline: boolean;
  removeEmpty: boolean;
  select: string;
  splitter: string;
  removeEmptyString: boolean
}

module.exports = function c2Array (str:string, options:Options):string[] {
  const defaultOptions = {
    newline: true,
    removeEmpty: true,
    removeEmptyString: false
  }

  options = Object.assign({}, defaultOptions, options)

  let result:string[] = (options.newline) ? fn.newline(str) : [str]
  result = (options.removeEmpty) ? fn.removeEmpty(result) : result
  result = (options.select) ? fn.select(result, options.select) : result
  result = (options.splitter) ? fn.splitter(result, options.splitter) : result
  result = (options.removeEmptyString) ? fn.removeEmptyString(result) : result

  return result
}

module.exports.newline = function newline (str:string):string[] {
  return fn.newline(str)
}

module.exports.removeEmpty = function removeEmpty (arr:string[]):string[][] {
  return fn.removeEmpty(arr)
}

module.exports.select = function (arr:string[], chunk:string):string[] {
  return fn.select(arr, chunk)
}

module.exports.splitter = function splitter (arr:string[], chunk:string):string[][] {
  return fn.splitter(arr, chunk)
}

module.exports.removeEmptyString = function removeEmptyString (item:string[][]):string[][] {
  return fn.removeEmptyString(item)
}
