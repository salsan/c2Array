# c2Array
c2Array convert output from a prompt console to array 


## Install

```bash
npm install c2array
```

## Usage

```js
const c2Array  = require('c2array')
const fs = require('fs')

const data = fs.readFileSync(process.argv[2],
        { encoding: 'utf8', flag: 'r' })

console.log(c2Array(data, {
    newline : true, // split aray based from newline character
    removeEmpty : true, // remove empty array
    select: ':style=', // select only array which respect this word and delete if is not divisibile
    splitter: ': ' // split array in according with word choice
}))
```

The return value is an Array

```bash
 node index.js fc-list.txt

[
  [
    '/usr/share/fonts/truetype/dejavu/DejaVuSerif-Bold.ttf',
    'DejaVu Serif:style=Bold'
  ],
  [
    '/usr/share/fonts/truetype/dejavu/DejaVuSansMono.ttf',
    'DejaVu Sans Mono:style=Book'
  ],
  [
    '/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf',
    'DejaVu Sans:style=Book'
  ],
  [
    '/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf',
    'DejaVu Sans:style=Bold'
  ],
  [
    '/usr/share/fonts/truetype/dejavu/DejaVuSansMono-Bold.ttf',
    'DejaVu Sans Mono:style=Bold'
  ],
  [
    '/usr/share/fonts/truetype/dejavu/DejaVuSerif.ttf',
    'DejaVu Serif:style=Book'
  ]
]
```
# License

MIT License - Copyright 2021 Salvatore Santagati (<mailto:me@salsan.dev>)
