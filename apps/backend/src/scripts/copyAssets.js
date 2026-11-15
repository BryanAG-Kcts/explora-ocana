const fs = require('node:fs')

fs.cpSync('src/assets', 'dist/assets', {
  recursive: true
})
