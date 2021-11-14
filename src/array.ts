
function newline (str:string):string[] {
  if (str.endsWith('\r\n')) return str.split('\r\n')
  if (str.endsWith('\n')) return str.split('\n')

  return [str]
}

function removeEmpty (arr:string[]):string[] {
  return arr.filter(arr => arr.length > 0)
}

function select (arr:string[], chunk:string):string[] {
  return arr.filter(str => str.split(chunk)[0] !== str)
}

function splitter (arr:string[], chunk:string):string[][] {
  return arr.map(str => str.split(chunk))
}

module.exports = {
  newline: newline,
  removeEmpty: removeEmpty,
  select: select,
  splitter: splitter
}
